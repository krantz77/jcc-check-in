import axios from "axios"
import React from "react";

export const getData = async () => {
    const result = await axios.get('https://sheet.best/api/sheets/259f7bec-fcd6-4be1-846d-c3c5dd47c8c3').then(res => {
        return res
    }).catch((error) => {
        console.log(error);
    });
    return result
}
export const writeData = async (data: { "Family Member Three": string; "Visited in Last Week": string; Comments: string; Deny: string; "Previous Visits": string[] | string; UID: string; "City where came from/ Місто походження": string; "Border Crossing Date/ Дата перетину кордону": string; "Family Surname": string; "Family Member Two": string; "Number of Kids/Кількість дітей": number | string; "Address - Street/ Вулиця": string; "Last Visit": string }) => {
    await axios.patch(`https://sheet.best/api/sheets/259f7bec-fcd6-4be1-846d-c3c5dd47c8c3/UID/${data.UID}`, data).then( response => {console.log(response)})
}
export const writeDataNew = async (data: { "Family Member Three": string; "Visited in Last Week": string; Comments: string; Deny: string; "Previous Visits": string[] | string; UID: string; "City where came from/ Місто походження": string; "Border Crossing Date/ Дата перетину кордону": string; "Family Surname": string; "Family Member Two": string; "Number of Kids/Кількість дітей": number | string; "Address - Street/ Вулиця": string; "Last Visit": string }) => {
    await axios.post(`https://sheet.best/api/sheets/259f7bec-fcd6-4be1-846d-c3c5dd47c8c3`, data).then( response => {console.log(response)})
}