import React, {useEffect, useMemo, useState} from 'react';
import logo from './logo.png';
import './App.css';
import _ from "lodash"
import {checkIn, exportData, formatData, getSearchResults} from "./Utils/DataTable.util";
import {COLUMN_FIELD, IDataRow} from "./Interfaces/interfaces";
import DataTable from "lucid-ui/dist/esm/components/DataTable/DataTable";
import ResultOverlay, {IProps} from "./Components/ResultOverlay";
import {CloseIcon, SearchField} from "lucid-ui";
import {getData} from "./api/bestSheetApi";

const Home = () => {
        const [data, setData] = useState({rows: [] as [], cols: []} as any);
        const [dataFormatted, setDataFormatted] = useState( [] as unknown as IDataRow[]);
        const [selected, setSelected] = useState('-1');
        const [checkInDisabled, setCheckInDisabled] = useState(true);
        const [editDisabled, setEditDisabled] = useState(true);
        const [showOverlay, setShowOverlay] = useState(false as boolean);
        const [searchValue, setSearchValue] = useState('' as string)
        const [canEdit, setCanEdit] = useState(false as boolean);
        const [searchResult, setSearchResult] = useState([] as IDataRow[])
        let tempvar = 0;
        useEffect(() => {
            console.log('useEffect')
            if (tempvar === 0) {
                getData().then((res: any) => {
                    const data = _.flatten(res.data) as unknown as IDataRow
                    const formatRetrievedData = formatData(data);
                    setDataFormatted(formatRetrievedData)
                })
                tempvar = 1;
            }

        }, [data])

        const selectColumn = (index: IDataRow) => {
            setEditDisabled(selected === index.UID);
            setCheckInDisabled(selected === index.UID || index.visited_in_last_week === "Yes")
            const swapSelected = _.map(_.isEmpty(searchResult) ? dataFormatted : searchResult, (row) => {
                if (index.UID === row.UID) {
                    return {
                        ...row,
                        isSelected: index.isSelected ? false : true,
                    }
                } else {
                    return {
                        ...row,
                        isSelected: false
                    }
                }
            }) as IDataRow[];
            setSearchValue(index.UID)
            _.isEmpty(searchResult) ? setDataFormatted(swapSelected) : setSearchResult(swapSelected)

        }

        const OverlayProps = {
            searchValue: searchValue,
            isShown: showOverlay,
            canEdit: canEdit,
            setShowOverlay: (value: boolean) => {
                setShowOverlay(value)
            },
            dataFormatted: dataFormatted,
            setDataFormatted: (value: IDataRow[]) => {
                setDataFormatted(value)
            },
            setCheckInDisabled: (value: boolean) => {
                setCheckInDisabled(value)
            },
            setSearchValue: (value: any) => {
                setSearchValue(value)
            },
            searchResult,
            setSearchResult
        }
        return (
            <div className="App">
                {showOverlay &&
                <div id="opaque"></div>
                }
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <div>
                        JCC Krakow Check In
                    </div>
                </header>
                <div className="Grid-Header">
                    <div className="Buttons">
                        <button onClick={() => {
                            exportData(dataFormatted)
                        }}>
                            Export
                        </button>
                        <button disabled={checkInDisabled}
                                onClick={() => checkIn(selected, dataFormatted as IDataRow[], setDataFormatted as (data: {}) => {}, setCheckInDisabled as (value: boolean) => {}, searchResult, setSearchResult as (data: {}) => {})}>
                            Check In
                        </button>
                        <button onClick={() => {
                            setShowOverlay(true);
                            setCanEdit(true)
                        }}>
                            Add Family
                        </button>
                        <button disabled={editDisabled} onClick={() => {
                            setShowOverlay(true);
                            setCanEdit(true)
                        }}>
                            Edit Family
                        </button>
                    </div>
                </div>
                <div className="App-Body">
                    <p>
                        <div className='search-bar'>
                            Search by surname or UID:
                            <SearchField onChangeDebounced={(value: string) => setSearchValue(value)}
                                         onSubmit={() => setSearchResult(getSearchResults(searchValue, dataFormatted))}/>
                            <div className='submit'>
                                <button
                                    onClick={() => setSearchResult(getSearchResults(searchValue, dataFormatted))}> Submit
                                </button>
                            </div>
                        </div>
                        <ResultOverlay {...OverlayProps as IProps}/>

                        <div className="data-table">
                            {dataFormatted ? (
                                <DataTable
                                    data={_.isEmpty(searchResult) ? dataFormatted : searchResult}
                                    isSelectable
                                    onSelect={(index) => {
                                        setSelected(index.UID);
                                        selectColumn(index)
                                    }}
                                    emptyCellText={"--"}
                                    hasLightHeader={false}
                                >
                                    {_.map(COLUMN_FIELD, (name) => {
                                        return (
                                            <DataTable.Column field={`${name}`}> {name} </DataTable.Column>)

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
