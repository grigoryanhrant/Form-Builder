import {FormElements} from "../../components/FormElements/FormElements";
import {PlaygroundArena} from "../../components/PlaygroundArena/PlaygroundArena";
import {FormDesigner} from "../../components/FormDesigner/FormDesigner";
import "./Playground.sass";

export const Playground = () => {
    return (
        <div className='Playground'>
            <FormElements />
            <PlaygroundArena />
            <FormDesigner />
        </div>
    );
};
