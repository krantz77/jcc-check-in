import {COLUMN_INDEX, COLUMN_NAMES, COLUMN_ORDER, IDataRow, IRow} from "../Interfaces/interfaces"
import _ from "lodash";
import { format } from 'date-fns';
import  * as XLSX from "xlsx" ;
import {writeData} from "../api/bestSheetApi";

export const setDataToFormatted = (data: IRow[], setDataFormatted: (value: unknown[]) => void) => {
    setDataFormatted(formatData(data as any));
}
const checkLastVisit = (date: string) => {
    if(date === null) {
        return 'No'
    }
    const today = new Date().getTime();
    const lastVisit = Date.parse(date)
    const difference = (today - lastVisit)/(1000*3600*24);
    return difference <= 7 ? 'Yes' : 'No'
}
export const formatData = (rows: any,) => {
        const data: IDataRow[] = _.map(rows, (row) => {
            const properties = Object.keys(row);
            const rowObj = _.map(properties, (key) => row[key])
            return {
                UID: rowObj[COLUMN_INDEX.UID] ? rowObj[COLUMN_INDEX.UID]: -1,
                family_surname: rowObj[COLUMN_INDEX.family_surname] ? rowObj[COLUMN_INDEX.family_surname]:  [],
                last_visit: rowObj[COLUMN_INDEX.last_visit],
                visited_in_last_week: rowObj[COLUMN_INDEX.visited_in_last_week] ? checkLastVisit(rowObj[COLUMN_INDEX.last_visit]) : 'No',
                address_city: rowObj[COLUMN_INDEX.address_city] ? rowObj[COLUMN_INDEX.address_city] :'--',
                number_of_kids: rowObj[COLUMN_INDEX.number_of_kids] ? rowObj[COLUMN_INDEX.number_of_kids]: '--',
                address_street: rowObj[COLUMN_INDEX.address_street] ? rowObj[COLUMN_INDEX.address_street]: '--',
                address_postcode: rowObj[COLUMN_INDEX.address_postcode] ? rowObj[COLUMN_INDEX.address_postcode]: '--',
                crossing_city: rowObj[COLUMN_INDEX.crossing_city] ? rowObj[COLUMN_INDEX.crossing_city]: '--',
                border_crossing: rowObj[COLUMN_INDEX.border_crossing] ? rowObj[COLUMN_INDEX.border_crossing]: '--',
                comments: rowObj[COLUMN_INDEX.comments] ? rowObj[COLUMN_INDEX.comments]: '--',

            }
        })
        return data
};

const formatForWrite = (row: IDataRow) => {
    return {
        'UID': row.UID,
        "Family Surname/Прізвище": row.family_surname,
        'Number of Kids/Кількість дітей': row.number_of_kids,
        'Address - Street/ Вулиця': row.address_street,
        'Address - Postcode/ Поштовий код': row.address_postcode,
        'Address - City/ Місто': row.address_city,
        'Border Crossing Date/ Дата перетину кордону': row.border_crossing,
        'City where came from/ Місто походження': row.crossing_city,
        'Last Visit': row.last_visit,
        'Visited in Last Week': row.visited_in_last_week,
        'Comments': row.comments
    }
}

export const submitUser =(editedUser: any, row: IDataRow, data: any, setDataFormatted: (data: unknown[]) => {},) => {
    const result = {...row, ...editedUser}
    const newData = _.map(data, (oldRow) => {
        if(oldRow.UID === result.UID) {
            const res = {
                ...oldRow,
                ...result,
            }
            const finalRes = {
                ...res,
                visited_in_last_week: checkLastVisit(res.last_visit)
            }
            writeData(formatForWrite(finalRes)).then();
            return finalRes
        }
        return oldRow
    })
    setDataFormatted(newData);
}
export const checkIn = (id: string, data: any, setDataFormatted: (data: unknown[]) => {}, setCheckInDisabled:(value: boolean) => {}) => {
   const result =_.map(data, (row) => {
        if(row.UID == id) {
            const result = {
                ...row,
                last_visit: format(new Date(), 'yyyy-MM-dd'),
                visited_in_last_week: 'Yes',
                isSelected: false,
            }
            writeData(formatForWrite(result)).then();
            return result
        }
        return row
    })
    setDataFormatted(result);
    setCheckInDisabled(true)
}
export const exportData = (data: any) => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb =  XLSX.utils.book_new();
    const path = require('path');
    const filePath = path.join(__dirname, 'Data/example_data.xlsx');
    XLSX.utils.book_append_sheet(wb, ws, "Example_Data");
    XLSX.writeFile(wb, filePath)
    //XLSX.writeFile(wb, "../Data/example_data.xlsx");
}

