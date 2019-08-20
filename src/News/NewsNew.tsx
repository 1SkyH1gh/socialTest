import * as React from 'react'
import {FunctionComponent} from "react";
import {Stream} from "./Stream";
import {StreamBar} from "./StreamBar";

export interface NewsNewProps {

}

export const NewsNew:FunctionComponent<NewsNewProps>=()=>{
    return(
        <div>
            <Stream/>
            <NewsNew/>
            <StreamBar/>
        </div>
    )
}