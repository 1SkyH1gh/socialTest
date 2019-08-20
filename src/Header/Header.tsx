import * as React from 'react'
import {FunctionComponent} from "react";
import {Links} from "./Links";
import {MiniAvatar} from "./MiniAvatar";

export interface HeaderProps{

}

export const Header:FunctionComponent<HeaderProps>=()=>{
    return(
        <div>
            <Links/>
            <MiniAvatar/>
        </div>
    )
}