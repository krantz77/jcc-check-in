import {COLUMN_INDEX, IDataRow,} from "../Interfaces/interfaces"
import _ from "lodash";
import { format } from 'date-fns';
//import  * as XLSX from "xlsx" ;
// @ts-ignore
import {json_to_sheet, book_new, book_append_sheet, writeFile} from "xlsx";
import {writeData, writeDataNew} from "../api/bestSheetApi";

const checkLastVisit = (date: string) => {
    if(date === null) {
        return 'No'
    }
    const today = new Date().getTime();
    const lastVisit = Date.parse(date)
    const difference = (today - lastVisit)/(1000*3600*24);
    const result = difference <= 7 ? 'Yes' : 'No'

    return result
}
export const formatData = (rows: any, tally: number, setTally: (number: any) => {}) => {
        const data: IDataRow[] = _.map(rows, (row) => {
            const properties = Object.keys(row);
            const rowObj = _.map(properties, (key) => row[key])
            const visited_in_last_week = rowObj[COLUMN_INDEX.visited_in_last_week] ? checkLastVisit(rowObj[COLUMN_INDEX.last_visit]) : 'No';
            setTally(tally + 1)
            return {
                UID: rowObj[COLUMN_INDEX.UID] ? rowObj[COLUMN_INDEX.UID]: -1,
                family_surname: rowObj[COLUMN_INDEX.family_surname] ? rowObj[COLUMN_INDEX.family_surname]:  [],
                name: rowObj[COLUMN_INDEX.name] ? rowObj[COLUMN_INDEX.name] :[],
                family_member_two: rowObj[COLUMN_INDEX.family_member_two] ? rowObj[COLUMN_INDEX.family_member_two]: [],
                family_member_three: rowObj[COLUMN_INDEX.family_member_three] ? rowObj[COLUMN_INDEX.family_member_three]: [],
                last_visit: rowObj[COLUMN_INDEX.last_visit],
                visited_in_last_week,
                number_of_kids: rowObj[COLUMN_INDEX.number_of_kids] ? rowObj[COLUMN_INDEX.number_of_kids]: '--',
                address_street: rowObj[COLUMN_INDEX.address_street] ? rowObj[COLUMN_INDEX.address_street]: '--',
                crossing_city: rowObj[COLUMN_INDEX.crossing_city] ? rowObj[COLUMN_INDEX.crossing_city]: '--',
                border_crossing: rowObj[COLUMN_INDEX.border_crossing] ? rowObj[COLUMN_INDEX.border_crossing]: '--',
                comments: rowObj[COLUMN_INDEX.comments] ? rowObj[COLUMN_INDEX.comments]: '--',
                deny: rowObj[COLUMN_INDEX.deny] ? rowObj[COLUMN_INDEX.deny]: '--',
                isDisabled: visited_in_last_week === "Yes" ? true : false,
                isActive: rowObj[COLUMN_INDEX.deny] === "Deny" ? true : false,
            }
        })
        return data
};

const formatForWrite = (row: IDataRow) => {
    return {
        'UID': row.UID ? row.UID : '--',
        'Family Surname': row.family_surname ? row.family_surname :'--',
        'Number of Kids/Кількість дітей': row.number_of_kids ? row.number_of_kids : '--',
        'Family Member Two': row.family_member_two ? row.family_member_two : '--',
        'Family Member Three': row.family_member_three ? row.family_member_three : '--',
        'Address - Street/ Вулиця': row.address_street? row.address_street : '--',
        'Border Crossing Date/ Дата перетину кордону': row.border_crossing ? row.border_crossing : '--',
        'City where came from/ Місто походження': row.crossing_city ? row.crossing_city : '--',
        'Last Visit': row.last_visit? row.last_visit  : '--',
        'Visited in Last Week': row.visited_in_last_week? row.visited_in_last_week : '--',
        'Comments': row.comments ? row.comments : '--',
        'Deny': row.deny? row.deny  : '--',
        'Previous Visits': row.previous_visits ? row.previous_visits  : '--'
    }
}

export const submitUser = (editedUser: any, row: IDataRow | null, data: any, setDataFormatted: (data: unknown[]) => {}, setEditedUser: (value: {}) => {}, setTally: (tally:number) => {}) => {
    if(row === null) {
        const formatted = formatForWrite(editedUser);
        writeDataNew(formatted).then();
        setDataFormatted(_.flatten(_.concat(data, editedUser)))
    }
    else {
        const result = {...row, ...editedUser}
        const newData = _.map(data, (oldRow) => {
            if (oldRow.UID === row.UID) {
                const res = {
                    ...oldRow,
                    ...result,
                }
                const finalRes = {
                    ...res,
                    visited_in_last_week: checkLastVisit(res.last_visit),
                    isDisabled: res.visited_in_last_week === "Yes" ? true : false,
                    isActive: res.deny === "Deny" || res.deny === "deny"  ? true : false,
                }
                const formatted = formatForWrite(finalRes);
                writeData(formatted).then();
                return finalRes
            }
            else {
                return oldRow
            }
        })
        setDataFormatted(newData);
        setTally(getTally(newData))
    }
    setEditedUser({})
}
export const checkIn = (user: any, data: any, tally:number, setDataFormatted: (data: unknown[]) => {}, setCheckInDisabled:(value: boolean) => {}, setCheckOutDisabled:(value: boolean) => {}, searchResult: any, setSearchResult: (data: unknown[])=>{}, setTally:(tally:number)=>{}) => {
   const result =_.map(_.isEmpty(searchResult) ? data : searchResult, (row) => {
        if(row.UID == user) {
            const result = {
                ...row,
                last_visit: format(new Date(), 'yyyy-MM-dd'),
                visited_in_last_week: 'Yes',
                isSelected: false,
                isDisabled: true,
                previous_visits: _.isEmpty(row.last_visit) ? row.previous_visits : [row.previous_visits, row.last_visit]
            }
            setTally(tally +1)
            writeData(formatForWrite(result)).then();
            return result
        }
        return row
    })
    _.isEmpty(searchResult) ? setDataFormatted(result) : setSearchResult(result)
    setCheckInDisabled(true);
   setCheckOutDisabled(false)
}

export const checkOut = (user: any, data: any, tally:number, setDataFormatted: (data: unknown[]) => {}, setCheckInDisabled:(value: boolean) => {}, setCheckOutDisabled:(value: boolean) => {}, searchResult: any, setSearchResult: (data: unknown[])=>{}, setTally:(tally:number)=>{}) => {
    const result =_.map(_.isEmpty(searchResult) ? data : searchResult, (row) => {
        if(row.UID == user) {
            const result = {
                ...row,
                last_visit: '--',
                visited_in_last_week: 'No',
                isSelected: false,
                isDisabled: true,
                previous_visits: _.isEmpty(row.last_visit) ? row.previous_visits : [row.previous_visits, row.last_visit]
            }
            setTally(tally +1)
            writeData(formatForWrite(result)).then();
            return result
        }
        return row
    })
    _.isEmpty(searchResult) ? setDataFormatted(result) : setSearchResult(result)
    setCheckInDisabled(false);
    setCheckOutDisabled(true);
};

export const exportData = (data: any) => {
    const ws = json_to_sheet(data);
    const wb =  book_new();
    const path = require('path');
    const filePath = path.join(__dirname, 'Data/example_data.xlsx');
    book_append_sheet(wb, ws, "Example_Data");
    writeFile(wb, filePath)
}


export const getSearchResults = (searchValue: string, data: IDataRow[]) => {
    const result = _.map(data, (row) => {
        const options = row.UID + row.family_surname + row.family_member_two + row.family_member_three
        if(_.includes(_.toLower(options), _.toLower(searchValue))) {
            return row
        }
    })
    return _.without(result, undefined)as IDataRow[]
}

export const getTally = (data: IDataRow[]) => {
    let result = 0;
    _.forEach(data, (row) => {
        if (row.visited_in_last_week === 'Yes') {
            result = result +1
        }
    })
    return result
}