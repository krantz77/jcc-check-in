import axios from "axios"
import React from "react";

export const getData = async () => {
    const result = await axios.get('https://sheet.best/api/sheets/97c28ba9-1020-447b-a425-97c74c9babff').then(res => {
        return res
    }).catch((error) => {
        console.log(error);
    });
    return result
}
export const writeData = async (data: { Number?: string; "Surname"?: string; Name?: string; "Second Member"?: string; "Number of Kids"?: string | number; "Year"?: number; "Address"?: string; "City"?: string; "Year of Birth"?: string; "Border Crossing"?: string; "Last Visit"?: string; "Visited in Last Week"?: string; Comments?: string; "Previous Visits"?: string | string[]; Deny?: string;}) => {
    await axios.patch(`https://sheet.best/api/sheets/97c28ba9-1020-447b-a425-97c74c9babff/Number/${data.Number}`, data).then( response => {console.log(response)})
}
export const writeDataNew = async (data: { Number?: string; "Surname"?: string; Name?: string; "Second Member"?: string; "Number of Kids"?: string | number; "Year"?: number; "Address"?: string; "City"?: string; "Year of Birth"?: string; "Border Crossing"?: string; "Last Visit"?: string; "Visited in Last Week"?: string; Comments?: string; "Previous Visits"?: string | string[]; Deny?: string;}) => {
    await axios.post(`https://sheet.best/api/sheets/97c28ba9-1020-447b-a425-97c74c9babff`, data).then( response => {console.log(response)})
}