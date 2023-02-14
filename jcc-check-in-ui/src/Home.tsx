import React, {useEffect, useState} from 'react';
import logo from './logo.png';
import './App.css';
import _ from "lodash"
import {checkIn, exportData, formatData} from "./Utils/DataTable.util";
import {COLUMN_FIELD, IDataRow} from "./Interfaces/interfaces";
import DataTable from "lucid-ui/dist/esm/components/DataTable/DataTable";
import ResultOverlay, {IProps} from "./Components/ResultOverlay";
import {SearchField} from "lucid-ui";
import {getData} from "./api/bestSheetApi";

function Home() {
    const [data, setData] = useState({rows: [] as [], cols: []} as any );
    const [dataFormatted, setDataFormatted] = useState( [] as unknown as IDataRow[]);
    const [selected, setSelected]= useState('-1');
    const [checkInDisabled, setCheckInDisabled] = useState(true);
    const [showOverlay, setShowOverlay] = useState(false as boolean);
    const [searchValue, setSearchValue] = useState('' as string)
    const [canEdit, setCanEdit] = useState(false as boolean);
    let tempvar = 0;
    useEffect( () => {
        if(tempvar ===0 ) {
            getData().then((res: any) => {
                const data = _.flatten(res.data) as unknown as IDataRow
                const formatRetrievedData = formatData(data);
                setDataFormatted(formatRetrievedData)
            })
            tempvar = 1;
        }

    }, [data])

    // useEffect(() => {
    //     if(dataFormatted[0] != null) {
    //         setShowButtons(true);
    //     }
    //     else {
    //         setShowButtons(false);
    //     }
    // }, [dataFormatted])

    const selectColumn= (index: IDataRow) => {
        setSelected(index.UID);
        const swapSelected = _.map(dataFormatted, (row) => {
            if( index.UID === row.UID ){
                return {
                    ...row,
                    isSelected: index.isSelected? false : true,
                }
            }
            else {
                return {...row}
            }
        }) as IDataRow[];
        setSearchValue(index.UID)
        setDataFormatted(swapSelected)
        setCheckInDisabled(!checkInDisabled)
    }

    const OverlayProps = {
        id: searchValue,
        isShown: showOverlay,
        canEdit: canEdit,
        setShowOverlay: (value: boolean) => {setShowOverlay(value)},
        dataFormatted: dataFormatted,
        setDataFormatted: (value: IDataRow[]) => {setDataFormatted(value)},
        setCheckInDisabled: (value: boolean) => {setCheckInDisabled(value)},
    }
    return (
        <div className="App">
            { showOverlay &&
            <div id="opaque"></div>
            }
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div>
                    JCC Krakow Check In
                </div>
            </header>
            <div className="Grid-Header">
                <div className="Buttons">
                    <button onClick={() => {exportData(dataFormatted)}}>
                        Export
                    </button>
                    <button disabled={checkInDisabled} onClick={() => checkIn(selected, dataFormatted as IDataRow[], setDataFormatted as (data: {}) => {}, setCheckInDisabled as (value: boolean) => {})}>
                        Check In
                    </button>
                    <button>
                        Add Family
                    </button>
                    <button disabled={checkInDisabled} onClick={() => {setShowOverlay(true); setCanEdit(true)}}>
                        Edit Family
                    </button>
                </div>
            </div>
            <div className="App-Body">
                <p>
                    <div className='search-bar'>
                        Enter Id:
                        <SearchField onChange={(value: string) => setSearchValue(value)}/>
                        <div className='submit'>
                            <button onClick={() => {setShowOverlay(true); setCanEdit(false)}}> Submit </button>
                        </div>
                    </div>
                    <ResultOverlay {...OverlayProps as IProps}/>

                    <div  className="data-table">
                        {dataFormatted ? (
                            <DataTable
                                data={dataFormatted}
                                isSelectable
                                onSelect={(index) => selectColumn(index)}
                                emptyCellText={"--"}
                                hasLightHeader={false}
                            >
                                {_.map(COLUMN_FIELD, (name) => {
                                    return <DataTable.Column field={`${name}`}> {name} </DataTable.Column>

                                })}
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
            </a>
        </div>
    );
}

export default Home;
