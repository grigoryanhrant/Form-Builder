import {FormElements} from "../FormElements/FormElements";
import {PlaygroundArena} from "./PlaygroundArena/PlaygroundArena";
import "./Playground.sass";

export const Playground = () => {

    return (
        <div className='Playground'>
            <FormElements />
            <PlaygroundArena />
        </div>
    );
};
