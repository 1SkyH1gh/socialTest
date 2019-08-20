import * as React from 'react'
import {FunctionComponent} from "react";

export interface PostProps {

}

export const Post:FunctionComponent<PostProps>=()=>{
    return(
        <div>
            <title>title</title>
            <div>body</div>
            <p>date</p>
            <div>
                <p>comment</p>
                <p>like</p>
            </div>
        </div>
    )
}