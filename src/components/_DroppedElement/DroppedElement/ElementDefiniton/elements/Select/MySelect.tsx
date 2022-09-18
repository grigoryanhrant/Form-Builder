import Select from "react-select";
import {selectOptions} from "./data";
import {customStyles} from "./customStyles/customStyles";

export interface ISelectOption {
    readonly value: string;
    readonly label: string;
    readonly color: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
}

interface IMySelect {
    multiselect?: boolean
}


export const MySelect = ({ multiselect }: IMySelect) => {
    return (
        <>
            <Select
                defaultValue={selectOptions[3]}
                name="colors"
                styles={customStyles}
                options={selectOptions}
                isMulti={multiselect}
                className="basic-multi-select"
                classNamePrefix="select"
            />
        </>
    );
};
