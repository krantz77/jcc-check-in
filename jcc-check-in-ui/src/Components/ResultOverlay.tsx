import {IDataRow} from "../Interfaces/interfaces";
import React, {useState} from "react";
import Overlay from "lucid-ui/dist/esm/components/Overlay/Overlay";
import _ from "lodash";
import {checkIn, submitUser} from "../Utils/DataTable.util";
import RowTable from "./RowTable";

export interface IProps {
    searchValue?: string,
    isShown: boolean,
    canEdit: boolean,
    tally: number
    setShowOverlay(value: boolean): any,
    dataFormatted: IDataRow[],
    setDataFormatted(value: IDataRow[]): any,
    setCheckInDisabled(value: boolean):any,
    setCheckOutDisabled(value: boolean):any,
    setSearchValue(value: any):any,
    searchResult: IDataRow[],
    setSearchResult(value: IDataRow[]):any,
    setTally(tally: number):any,
}
const ResultOverlay: React.FC<IProps> = (props:IProps) => {
    const {searchValue = null, isShown, canEdit, setShowOverlay, dataFormatted, setDataFormatted, setCheckInDisabled, setCheckOutDisabled, setSearchValue, searchResult, setSearchResult, setTally, tally} = props
    const [editedUser, setEditedUser] = useState({})
    const user: IDataRow | null = searchValue ?_.find(dataFormatted, (row) => {
        if(row.Number || row.surname) {
            if (row.Number == searchValue || row.surname == searchValue) {
                return row as unknown as IDataRow
            }
        }
    }) as unknown as IDataRow : null;
    return (
        <Overlay
            isShown={isShown}
            isModal={true}
            onEscape={() => props.setShowOverlay(false)}
            onBackgroundClick={() => setShowOverlay(false)} >
            <div className='main-content'>
                <>
                <form className='Add-Point-Form' method="get">
                    <label>
                        {`${searchValue}`}
                    </label>
                </form>
                <RowTable user={user} canEdit={canEdit as boolean} editedUser={editedUser} setEditedUser={setEditedUser as (value: {}) => {}}/>
                <div className='Controls'>
                    <button onClick={() =>
                    {
                        setShowOverlay(false);
                        canEdit?  submitUser(editedUser, user, dataFormatted, setDataFormatted as (data: {}) => {}, setEditedUser as (() => {}), setTally):
                            checkIn(user, dataFormatted as IDataRow[], tally, setDataFormatted as (data: {}) => {}, setCheckInDisabled as (value: {}) => {}, setCheckOutDisabled as (value: {}) => {}, searchResult as IDataRow[], setSearchResult as (data: {}) => {}, setTally);
                        setSearchValue(null)

                    }
                    }>
                        {canEdit? 'Submit': 'Check In'}
                    </button>
                    <button onClick={() => {setShowOverlay(false); setSearchValue(null)}}>
                        Cancel
                    </button>
                </div>
                    </>
            </div>
        </Overlay>
    )
}
export default React.memo(ResultOverlay);