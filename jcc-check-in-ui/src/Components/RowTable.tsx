import React from "react";
import {TextField} from "lucid-ui";
import {COLUMN_FIELD, IDataRow} from "../Interfaces/interfaces";
import _ from "lodash";

interface IRowTableProps {
    user: any,
    canEdit: boolean,
    editedUser: {},
    setEditedUser: (value: {}) => {}
}

const RowTable = (props: IRowTableProps) => {
    const {user, editedUser, setEditedUser} = props;
    return (
        <div>
            {
            _.map(COLUMN_FIELD, (column) => {
                return (
                    <div>
                        <div>
                            {column}
                        </div>
                        <TextField value={_.get(user, column)} onChange={(value) => {setEditedUser(_.set(editedUser,column, value))}}/>
                    </div>
                )
            })
        }
        </div>
    )
}

export default React.memo(RowTable);