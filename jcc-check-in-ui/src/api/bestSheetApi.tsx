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

export const writeData = async (data: { UID: string; 'Family Surname/Прізвище': string | undefined; 'Number of Kids/Кількість дітей': number | undefined; 'Address - Street/ Вулиця': string | undefined; 'Address - Postcode/ Поштовий код': string | undefined; 'Address - City/ Місто': string | undefined; 'Border Crossing Date/ Дата перетину кордону': string | undefined; 'City where came from/ Місто походження': string | undefined; 'Last Visit': string | undefined; 'Visited in Last Week': string | undefined; Comments: string | undefined; }) => {
    const result = await axios.patch(`https://sheet.best/api/sheets/259f7bec-fcd6-4be1-846d-c3c5dd47c8c3/UID/${data.UID}`, data).then( response => {console.log(response)})
}