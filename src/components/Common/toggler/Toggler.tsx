import {IToggler} from "./types/types";
import "./Toggler.sass";

export const Toggler = (
    {
        checked,
        disabled,
        onChange,
        inactive = 'switchOff',
        active = 'switchOn'
    }: Partial<IToggler>) => {


    let togglerStatus = checked ? active : inactive;

    return (
        <>
            <label>
                <span className={`switchWrapper ${togglerStatus}`}>
                    <input
                        type='checkbox'
                        checked={checked}
                        disabled={disabled}
                        onChange={e => onChange(e)}/>

                    <span className='switchWrapper__Switch'>
                        <span className='switchWrapper__Switch__Handler'/></span>
                </span>
            </label>
        </>
    );
}
