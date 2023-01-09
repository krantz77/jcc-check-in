import React, {useEffect, useState} from 'react';
import logo from './logo.png';
import './App.css';
import MyDropzone, {IDropzoneProps} from "./Components/MyDropzone";
import _ from "lodash"
import {checkIn, formatData} from "./Utils/DataTable.util";
import {IRow} from "./Interfaces/interfaces";
import DataTable from "lucid-ui/dist/esm/components/DataTable/DataTable";

function App() {
    const [data, setData] = useState({rows: [] as [], cols: []} as any );
    const [dataFormatted, setDataFormatted] = useState([] as IRow[])
    const [showButtons, setShowButtons] = useState(false);
    const [selected, setSelected]= useState(-1);
    var key = 0;

    // const columnNames = data.rows? _.map(data.rows[0], (col) => {
    //     return {column: col, key: key+1}}) : data.cols;
    const selectColumn= (index: IRow) => {
        console.log(index)
        setSelected(index.id);
        setShowButtons(!showButtons)
    }
    console.log(data)

    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
        JCC Krakow Check In
        </div>
      </header>
        <div className="Grid-Header">
            {showButtons &&
            <button onClick={() => checkIn(selected, data.rows as IRow[], setData as (data: {}) => {})}>
                check in
            </button>}
        </div>
        <div className="App-Body">
            <p>
                <MyDropzone set={setData}/>
                <div  className="data-table">
                {data ? (
                    <DataTable
                        data={formatData(data.rows? data.rows: data, )}
                        isSelectable
                        onSelect={(index) => selectColumn(index)}
                    >
                        {
                            _.map(data.rows[0], (col: string) => {
                            return (
                                <DataTable.Column field={col}>
                                    {col}
                                </DataTable.Column>
                            )})
                        }
                    </DataTable>
                ) : (
                    ""
                )}
                </div>
            </p>
            </div>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
            Learn React
        </a>
    </div>
  );
}

export default App;
