import * as React from 'react'
import {FunctionComponent} from "react";

export interface AccountStatusProps {

}

export const AccountStatus:FunctionComponent<AccountStatusProps>=()=>{
    return(
        <div>
            <h5>IlyaTormanov</h5>
            <h3>web-designer</h3>
            <p>Status</p>
        </div>
    )
}