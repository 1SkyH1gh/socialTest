import * as React from "react";
import {FunctionComponent} from "react";

export interface MessageProps{


}

export const Message:FunctionComponent<MessageProps>=()=>{
    return(
        <div>
            <form>
                <input placeholder="new post"/>
            </form>
            <div>send</div>
        </div>
    )
}