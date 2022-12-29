import {IRow} from "../Interfaces/interfaces"
import _ from "lodash";

const checkLastVisit = (date: string) => {
    console.log(date)
    console.log(new Date())
    const today = new Date().getTime();
    const lastVisit = Date.parse(date)
    const difference = (today - lastVisit)/(1000*3600*24);
    console.log(Date.parse(date))
    console.log(lastVisit)
    console.log(today)
    console.log(difference)
    return difference <= 7 ? 'Yes' : 'No'
}
export const formatData = (rows: any, setData?: (data: IRow[]) => {},) => {
    console.log(rows)
        const data: IRow[] = _.map(rows, (row) => {
            console.log(row[2] ? checkLastVisit(row[2]) : 'No')
            return {
                id: row[0] ? row[0] : -1,
                householdMembers: row[1] ? row[1] : [],
                lastVisit: row[2],
                visitedInLastWeek: row[2] ? checkLastVisit(row[2]) : 'No',
                address: row[4] ? row[4] : 'unknown',
                hometown: row[5] ? row[5] : 'unknown'
            }
        })

        console.log(data)
        //setData(data);
        return _.drop(data)
};