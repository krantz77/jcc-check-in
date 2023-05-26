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
                Number: rowObj[COLUMN_INDEX.Number] ? rowObj[COLUMN_INDEX.Number]: -1,
                surname: rowObj[COLUMN_INDEX.surname] ? rowObj[COLUMN_INDEX.surname]:  [],
                name: rowObj[COLUMN_INDEX.name] ? rowObj[COLUMN_INDEX.name] :[],
                second_member: rowObj[COLUMN_INDEX.second_member] ? rowObj[COLUMN_INDEX.second_member]: [],
                last_visit: rowObj[COLUMN_INDEX.last_visit],
                visited_in_last_week,
                number_of_kids: rowObj[COLUMN_INDEX.number_of_kids] ? rowObj[COLUMN_INDEX.number_of_kids]: '--',
                address_street: rowObj[COLUMN_INDEX.address] ? rowObj[COLUMN_INDEX.address]: '--',
                crossing_city: rowObj[COLUMN_INDEX.city] ? rowObj[COLUMN_INDEX.city]: '--',
                border_crossing: rowObj[COLUMN_INDEX.border_crossing] ? rowObj[COLUMN_INDEX.border_crossing]: '--',
                comments: rowObj[COLUMN_INDEX.comments] ? rowObj[COLUMN_INDEX.comments]: '--',
                deny: rowObj[COLUMN_INDEX.deny] ? rowObj[COLUMN_INDEX.deny]: '--',
                year_of_birth: rowObj[COLUMN_INDEX.year_of_birth] ? rowObj[COLUMN_INDEX.year_of_birth] : '--',
                isDisabled: visited_in_last_week === "Yes" ? true : false,
                isActive: rowObj[COLUMN_INDEX.deny] === "Deny" ||  rowObj[COLUMN_INDEX.deny] === "DENY" || rowObj[COLUMN_INDEX.deny] === "deny"? true : false,
            }
        })
        return data
};

const formatForWrite = (row: IDataRow) => {
    return {
        'Number': row.Number ? row.Number : '--',
        'Surname': row.surname ? row.surname :'--',
        'Name': row.name ? row.name : '--',
        'Second Member': row.second_member ? row.second_member : '--',
        'Number of Kids': row.number_of_kids ? row.number_of_kids : '--',
        'Address': row.address? row.address : '--',
        'City': row.city? row.city: '--',
        'Border Crossing': row.border_crossing ? row.border_crossing : '--',
        'Year of Birth': row.year_of_birth ? row.year_of_birth : '--',
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
            if (oldRow.Number === row.Number) {
                const res = {
                    ...oldRow,
                    ...result,
                }
                const finalRes = {
                    ...res,
                    visited_in_last_week: checkLastVisit(res.last_visit),
                    isDisabled: res.visited_in_last_week === "Yes" ? true : false,
                    isActive: res.deny === "Deny" || res.deny === "deny" || res.deny === "DENY"  ? true : false,
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
        if(row.Number == user) {
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
        if(row.Number == user) {
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


export const getSearchResults = (searchValue: string, data: IDataRow[], setIndex = (number: number) => {}) => {
    const result = _.map(data, (row) => {
        const options = row.Number + row.surname + row.second_member;
        if(_.includes(_.toLower(options), _.toLower(searchValue))) {
            return row
        }
    })
    setIndex(0)
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