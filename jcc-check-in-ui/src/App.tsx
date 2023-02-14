// import React, {useEffect, useState} from 'react';
// import logo from './logo.png';
// import './App.css';
// import MyDropzone, {IDropzoneProps} from "./Components/MyDropzone";
// import _ from "lodash"
// import {checkIn, exportData, formatData, setDataToFormatted} from "./Utils/DataTable.util";
// import {IRow} from "./Interfaces/interfaces";
// import DataTable from "lucid-ui/dist/esm/components/DataTable/DataTable";
// import ResultOverlay, {IProps} from "./Components/ResultOverlay";
// import {SearchField} from "lucid-ui";
// import {googleApi, verifyGoogleToken} from "./api/googleApi";
// import {getData} from "./api/bestSheetApi";
// const { GoogleSpreadsheet } = require('google-spreadsheet');
//
// const doc = new GoogleSpreadsheet(process.env.REACT_APP_GOOGLE_SHEET_ID);
//
// async function handler() {
//     try {
//         if(process.env.REACT_APP_GOOGLE_PRIVATE_KEY && process.env.REACT_APP_GOOGLE_SERVICE_ACCOUNT_EMAIL) {
//
//             await doc.useServiceAccountAuth({
//                 client_email: process.env.REACT_APP_GOOGLE_SERVICE_ACCOUNT_EMAIL,
//                 private_key: process.env.REACT_APP_GOOGLE_PRIVATE_KEY.replace(/\\n/gm, '\n')
//             });
//             await doc.loadInfo();
//             console.log(await doc.title)
//             if(await doc.title){
//                 console.log('here')
//                 return doc.title}
//             await doc.getInfo();
//             const sheet = doc.sheetsByIndex[0];
//             const rows = await sheet.getRows();
//             //const raw_data = rows[0]._rawData;
//             //const header_values = rows[0]._sheet.headerValues;
//             //const row_value = rows[0][id];
//             console.log(await rows)
//             return rows
//         }
//
//
//         //res.status(200).json({ message: 'A ok!' });
//     } catch (error) {
//         //res.status(500).json(error);
//     }
// }
//
// function App() {
//     const [data, setData] = useState({rows: [] as [], cols: []} as any );
//     const [dataFormatted, setDataFormatted] = useState([] as IRow[])
//     const [showButtons, setShowButtons] = useState(false);
//     const [selected, setSelected]= useState(-1);
//     const [checkInDisabled, setCheckInDisabled] = useState(true);
//     const [showOverlay, setShowOverlay] = useState(false as boolean);
//     const [searchValue, setSearchValue] = useState('' as string)
//     handler().then(result => console.log(result))
//     useEffect(() => {
//         const result = handler().then((res) => {console.log(res)})
//
//     })
//
//     // googleApi().then();
//     // console.log(verifyGoogleToken())
//     // appendSpreadsheet().then()
//     //getData().then()
//     const columnNames = data.rows? _.map(data.rows[0], (col) => {
//        return {column: col, key: col}}) : data.cols;
//     useEffect(() => {
//         if(dataFormatted[0] != null) {
//             setShowButtons(true);
//         }
//         else {
//             setShowButtons(false);
//         }
//     }, [dataFormatted])
//
//     const selectColumn= (index: IRow) => {
//         setSelected(index.id);
//         setShowButtons(!showButtons);
//         const swapSelected = _.map(dataFormatted, (row) => {
//             if( index.id === row.id ){
//                 console.log(index.isSelected)
//                 return {
//                     isSelected: index.isSelected? false : true,
//                     id: row.id,
//                     lastVisit: row.lastVisit,
//                     visitedItnLastWeek: row.visitedInLastWeek,
//                     householdMembers: row.householdMembers
//                 }
//             }
//             else {
//                 return {...row}
//             }
//         }) as IRow[];
//         setDataFormatted(swapSelected)
//         setCheckInDisabled(!checkInDisabled)
//     }
//
//     const OverlayProps = {
//         id: searchValue,
//         isShown: showOverlay,
//         setShowOverlay: (value: boolean) => {setShowOverlay(value)},
//         dataFormatted: dataFormatted,
//         setDataFormatted: (value: IRow[]) => {setDataFormatted(value)},
//     }
//     return (
//     <div className="App">
//         { showOverlay &&
//         <div id="opaque"></div>
//         }
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <div>
//         JCC Krakow Check In
//         </div>
//       </header>
//         <div className="Grid-Header">
//             {showButtons &&
//             <div className="Buttons">
//                 <button onClick={() => {exportData(dataFormatted)}}>
//                     Export
//                 </button>
//                 <button disabled={checkInDisabled} onClick={() => checkIn(selected, dataFormatted as IRow[], setDataFormatted as (data: {}) => {})}>
//                     check in
//                 </button>
//             </div>}
//         </div>
//         <div className="App-Body">
//             <p>
//                 <MyDropzone set={(data) => setDataToFormatted(data, setDataFormatted as unknown as any)}/>
//                 <div className='search-bar'>
//                     Enter Id:
//                     <SearchField onChange={(value: string) => setSearchValue(value)}/>
//                     <div className='submit'>
//                     <button onClick={() => setShowOverlay(true)}> Submit </button>
//                     </div>
//                 </div>
//                 <ResultOverlay {...OverlayProps as IProps}/>
//
//                 <div  className="data-table">
//                 {dataFormatted ? (
//                     <DataTable
//                         data={dataFormatted}
//                         isSelectable
//                         onSelect={(index) => selectColumn(index)}
//                         emptyCellText={"--"}
//                         hasLightHeader={false}
//                     >
//                         <DataTable.Column field={'id'}>
//                             Id
//                         </DataTable.Column>
//                         <DataTable.Column field={'householdMembers'}>
//                             Household Members
//                         </DataTable.Column>
//                         <DataTable.Column field={'lastVisit'}>
//                             Last visit
//                         </DataTable.Column>
//                         <DataTable.Column field={'visitedInLastWeek'}>
//                             Visited This Week
//                         </DataTable.Column>
//                     </DataTable>
//                 ) : (
//                     ""
//                 )}
//                 </div>
//             </p>
//             </div>
//         <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//         >
//         </a>
//     </div>
//   );
// }
//
// export default App;
export {}