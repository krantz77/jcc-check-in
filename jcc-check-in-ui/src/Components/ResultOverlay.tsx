import {IDataRow} from "../Interfaces/interfaces";
import React, {useState} from "react";
import Overlay from "lucid-ui/dist/esm/components/Overlay/Overlay";
import _ from "lodash";
import {checkIn, submitUser} from "../Utils/DataTable.util";
import RowTable from "./RowTable";

export interface IProps {
    id: string,
    isShown: boolean,
    canEdit: boolean,
    setShowOverlay(value: boolean): any,
    dataFormatted: IDataRow[],
    setDataFormatted(value: IDataRow[]): any,
    setCheckInDisabled(value: boolean):any
}
const ResultOverlay: React.FC<IProps> = (props:IProps) => {
    const {id, isShown, canEdit, setShowOverlay, dataFormatted, setDataFormatted, setCheckInDisabled} = props
    const [editedUser, setEditedUser] = useState({})
    const user: IDataRow = _.find(dataFormatted, (row) => {
        if(row.UID) {
            if (row.UID === id) {
                return row as unknown as IDataRow
            }
        }
    }) as unknown as IDataRow
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
                        Id: {`${id}`}
                    </label>
                </form>
                <RowTable user={user} canEdit={canEdit as boolean} editedUser={editedUser} setEditedUser={setEditedUser as (value: {}) => {}}/>
                <div className='Controls'>
                    <button onClick={() =>
                    {
                        setShowOverlay(false);
                        canEdit?  submitUser(editedUser, user, dataFormatted, setDataFormatted as (data: {}) => {}):
                            checkIn(user.UID, dataFormatted as IDataRow[], setDataFormatted as (data: {}) => {}, setCheckInDisabled as (value: {}) => {})

                    }
                    }>
                        {canEdit? 'Submit': 'Check In'}
                    </button>
                    <button onClick={() => setShowOverlay(false)}>
                        Cancel
                    </button>
                </div>
                    </>
            </div>
        </Overlay>
    )
}
export default ResultOverlay