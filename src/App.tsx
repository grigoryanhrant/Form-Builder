import React from "react";
import {Playground} from "./components/Playground/Playground";
import {useDrop} from "react-dnd";
import "./app.sass";

export const App = () => {

    const [, drop] = useDrop(() => ({accept: 'element',}));

    return (
        <div className={`app`} ref={drop}>
            <div className='container'>
                <Playground/>
            </div>
        </div>
    );
};
