import * as React from 'react'
import {FunctionComponent} from "react";

export interface StaticControlPanelProps {

}

export const StaticControlPanel:FunctionComponent<StaticControlPanelProps>=()=>{
    return(
        <div>
            <p>Account</p>
            <p>message</p>
            <p>publics</p>
            <p>music</p>
            <p>videos</p>
        </div>
    )
}