// import { GoogleSpreadsheet } from "google-spreadsheet";
//
// // Config variables
// const SPREADSHEET_ID = process.env.REACT_APP_GOOGLE_SHEET_ID as string;
// const SHEET_ID = 0;
// const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_SERVICE_ACCOUNT_EMAIL as string;
// const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_PRIVATE_KEY as string;
//
// const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
//
// export const appendSpreadsheet = async () => {
//     try {
//         await doc.useServiceAccountAuth({
//             client_email: CLIENT_EMAIL,
//             private_key: PRIVATE_KEY,
//         });
//         // loads document properties and worksheets
//         await doc.loadInfo();
//         console.log(doc.title)
//
//         const sheet = doc.sheetsById[SHEET_ID];
//         //const result = await sheet.addRow(row);
//     } catch (e) {
//         console.error('Error: ', e);
//     }
// };
//
// const newRow = { Name: "new name", Value: "new value" };
//
// //appendSpreadsheet(newRow);

export {}