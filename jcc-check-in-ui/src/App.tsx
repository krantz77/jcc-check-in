import React, {useState} from 'react';
import logo from './logo.png';
import './App.css';
import MyDropzone, {IDropzoneProps} from "./Components/MyDropzone";
import { OutTable } from "react-excel-renderer";
import _ from "lodash"
import {formatData} from "./Utils/DataTable.util";
import {IRow} from "./Interfaces/interfaces";
import set = Reflect.set;
import DataTable from "lucid-ui/dist/esm/components/DataTable/DataTable";

function App() {
    //const [data, setData] = useState([] as IRow[]);
    // const [data, setData] = useState({} as{rows:[], cols:[]});
    const [data, setData] = useState({rows: [], cols: []} as any )
    var key = 0;

    console.log(data)
    const columnNames = data.rows? _.map(data.rows[0], (col) => {
        return {column: col, key: key+1}}) : data.cols;
    console.log(columnNames)

    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
        JCC Krakow Check In
        </div>
      </header>
        <div className="App-Body">
            <p>
                {/*<MyDropzone set={(data: any) => setData(formatData(data)) as unknown as (resp:any) => {}}/>*/}
                {/*<MyDropzone set={(data) => formatData(setData as (data:IRow[]) => {}, data) } />*/}
                <MyDropzone set={setData}/>
                <div  className="data-table">

                {data ? (
                    <DataTable data={formatData(data.rows)}>
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
