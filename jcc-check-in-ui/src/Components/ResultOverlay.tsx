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
    setShowOverlay(value: boolean): any,
    dataFormatted: IDataRow[],
    setDataFormatted(value: IDataRow[]): any,
    setCheckInDisabled(value: boolean):any,
    setSearchValue(value: any):any,
    searchResult: IDataRow[],
    setSearchResult(value: IDataRow[]):any,
}
const ResultOverlay: React.FC<IProps> = (props:IProps) => {
    const {searchValue = null, isShown, canEdit, setShowOverlay, dataFormatted, setDataFormatted, setCheckInDisabled, setSearchValue, searchResult, setSearchResult} = props
    const [editedUser, setEditedUser] = useState({})
    const user: IDataRow | null = searchValue ?_.find(dataFormatted, (row) => {
        if(row.UID || row.family_surname) {
            if (row.UID == searchValue || row.family_surname == searchValue) {
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
                        canEdit?  submitUser(editedUser, user, dataFormatted, setDataFormatted as (data: {}) => {}, setEditedUser as (() => {})):
                            checkIn(user, dataFormatted as IDataRow[], setDataFormatted as (data: {}) => {}, setCheckInDisabled as (value: {}) => {}, searchResult as IDataRow[], setSearchResult as (data: {}) => {});
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
export default ResultOverlay