import React from "react";
import {Playground} from "./components/Playground/Playground";
import {useDrop} from "react-dnd";
import "./app.sass";

export const App = () => {

    const [, drop] = useDrop(() => ({accept: 'element',}));
    const [, drop2] = useDrop(() => ({accept: 'dropped_element',}));

    return (
        <div className={`app`} ref={drop}>
            <div ref={drop2} style={{width: '100%'}}>
                <div className='container'>
                    <Playground/>
                </div>
            </div>
        </div>
    );
};
