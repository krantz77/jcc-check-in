import React, {useEffect, useMemo, useState} from 'react';
import logo from './logo.png';
import './App.css';
import _ from "lodash"
import {checkIn, checkOut, exportData, formatData, getSearchResults, getTally} from "./Utils/DataTable.util";
import {COLUMN_FIELD, IDataRow} from "./Interfaces/interfaces";
import DataTable from "lucid-ui/dist/esm/components/DataTable/DataTable";
import ResultOverlay, {IProps} from "./Components/ResultOverlay";
import {Paginator, SearchField} from "lucid-ui";
import {getData} from "./api/bestSheetApi";

const Home = () => {
        const [data, setData] = useState({rows: [] as [], cols: []} as any);
        const [dataFormatted, setDataFormatted] = useState( [] as unknown as IDataRow[]);
        const [selected, setSelected] = useState('-1');
        const [checkInDisabled, setCheckInDisabled] = useState(true);
        const [checkOutDisabled, setCheckOutDisabled] = useState(true);
        const [editDisabled, setEditDisabled] = useState(true);
        const [showOverlay, setShowOverlay] = useState(false as boolean);
        const [searchValue, setSearchValue] = useState('' as string)
        const [canEdit, setCanEdit] = useState(false as boolean);
        const [searchResult, setSearchResult] = useState([] as IDataRow[]);
        const [tally, setTally] = useState(0);
        const [index, setIndex] = useState(0);
        let tempvar = 0;
        useEffect(() => {
            if (tempvar === 0) {
                getData().then((res: any) => {
                    const data = _.flatten(res.data) as unknown as IDataRow
                    const formatRetrievedData = formatData(data, tally, setTally as ()=> {});
                    setDataFormatted(formatRetrievedData)
                    setTally(getTally(formatRetrievedData))

                })
                tempvar = 1;
            }
        }, [data])

        const selectColumn = (index: IDataRow) => {
            setEditDisabled(selected === index.UID);
            setCheckInDisabled(selected === index.UID || index.visited_in_last_week === "Yes")
            setCheckOutDisabled(selected === index.UID )
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
            setCheckOutDisabled: (value: boolean) => {
                setCheckOutDisabled(value)
            },
            setSearchValue: (value: any) => {
                setSearchValue(value)
            },
            searchResult,
            setSearchResult,
            setTally,
            tally
        }
        const lengthOfData = dataFormatted.length? dataFormatted.length : 0;
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
                    <div>
                        This Week's Tally: {tally}
                    </div>
                    <div className="Buttons">
                        <button disabled={checkInDisabled}
                                onClick={() => checkIn(selected, dataFormatted as IDataRow[], tally, setDataFormatted as (data: {}) => {}, setCheckInDisabled as (value: boolean) => {}, setCheckOutDisabled as (value: boolean) => {},searchResult, setSearchResult as (data: {}) => {},setTally as (tally: {}) => {})}>
                            Check In
                        </button>
                        <button disabled={checkOutDisabled}
                                onClick={() => checkOut(selected, dataFormatted as IDataRow[], tally, setDataFormatted as (data: {}) => {}, setCheckInDisabled as (value: boolean) => {}, setCheckOutDisabled as (value: boolean) => {},searchResult, setSearchResult as (data: {}) => {},setTally as (tally: {}) => {})}>
                            Check Out
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
                        <button onClick={() => {
                            exportData(dataFormatted)
                        }}>
                            Export
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
                            <div className='clear'>
                                <button
                                    onClick={() => setSearchResult(getSearchResults('', dataFormatted))}> Clear
                                </button>
                            </div>
                        </div>
                        <ResultOverlay {...OverlayProps as IProps}/>
                        <div className="data-table">
                            {dataFormatted ? (
                                <DataTable
                                    data={_.isEmpty(searchResult) ? index == 0 ? dataFormatted.slice(0,9) : dataFormatted.slice(index*10, index*10+9) : searchResult}
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
                            <Paginator onPageSelect={(index:number) => {setIndex(index)}}
                                       selectedPageIndex={index}
                                       totalCount={lengthOfData}
                            />
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

export default React.memo(Home);
