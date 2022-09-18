import "./Toggler.sass";

interface IToggler {
    checked: boolean,
    disabled: boolean,
    onChange: any,
    inactive: string,
    active: string,
}

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
