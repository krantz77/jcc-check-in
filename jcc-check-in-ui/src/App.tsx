import React, {useEffect, useState} from 'react';
import logo from './logo.png';
import './App.css';
import MyDropzone, {IDropzoneProps} from "./Components/MyDropzone";
import _ from "lodash"
import {checkIn, formatData, setDataToFormatted} from "./Utils/DataTable.util";
import {IRow} from "./Interfaces/interfaces";
import DataTable from "lucid-ui/dist/esm/components/DataTable/DataTable";

function App() {
    const [data, setData] = useState({rows: [] as [], cols: []} as any );
    const [dataFormatted, setDataFormatted] = useState([] as IRow[])
    const [showButtons, setShowButtons] = useState(false);
    const [selected, setSelected]= useState(-1);
    var key = 0;

    const columnNames = data.rows? _.map(data.rows[0], (col) => {
       return {column: col, key: col}}) : data.cols;

    const selectColumn= (index: IRow) => {
        setSelected(index.id);
        setShowButtons(!showButtons)
    }
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
            <button onClick={() => checkIn(selected, dataFormatted as IRow[], setDataFormatted as (data: {}) => {})}>
                check in
            </button>}
        </div>
        <div className="App-Body">
            <p>
                <MyDropzone set={(data) => setDataToFormatted(data, setDataFormatted as unknown as any)}/>
                <div  className="data-table">
                {dataFormatted ? (
                    <DataTable
                        data={dataFormatted}
                        isSelectable
                        onSelect={(index) => selectColumn(index)}
                    >
                        <DataTable.Column field={'id'}>
                            Id
                        </DataTable.Column>
                        <DataTable.Column field={'householdMembers'}>
                            Household Members
                        </DataTable.Column>
                        <DataTable.Column field={'lastVisit'}>
                            Last visit
                        </DataTable.Column>
                        <DataTable.Column field={'visitedInLastWeek'}>
                            Visited This Week
                        </DataTable.Column>
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
