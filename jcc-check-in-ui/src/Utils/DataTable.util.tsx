import {IRow} from "../Interfaces/interfaces"
import _ from "lodash";

const checkLastVisit = (date: string) => {
    console.log(new Date())
    const today = new Date().getTime();
    const lastVisit = Date.parse(date)
    const difference = (today - lastVisit)/(1000*3600*24);
    return difference <= 7 ? 'Yes' : 'No'
}
export const formatData = (rows: any, setDataFormatted?: any) => {
    console.log(rows)
        const data: IRow[] = _.map(rows, (row) => {
            return {
                id: row[0] ? row[0] : -1,
                householdMembers: row[1] ? row[1] : [],
                lastVisit: row[2],
                visitedInLastWeek: row[2] ? checkLastVisit(row[2]) : 'No',
                address: row[4] ? row[4] : 'unknown',
                hometown: row[5] ? row[5] : 'unknown'
            }
        })
    // if (setDataFormatted && !_.isEmpty(data)) {
    //     setDataFormatted({rows:_.drop(data)})
    // }
    console.log(data)
        return _.drop(data)
};

export const checkIn = (id: number, data: any, setData: (data: { rows: unknown[] }) => {})=> {
    console.log(data)
   const result =_.map(data, (row) => {
       console.log(row)
        if(row[0] == id) {
            console.log('here')
            return {
                id: row[0],
                householdMembers:[row[1]],
                lastVisit: new Date().toString(),
                visitedInLastWeek: 'Yes',
            }
        }
        return row
    })
    console.log(result)
    setData({rows: result})
}

