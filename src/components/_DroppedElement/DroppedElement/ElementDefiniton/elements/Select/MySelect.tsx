import Select from "react-select";
import {selectOptions} from "./data/data";
import {customStyles} from "./customStyles/customStyles";
import {IMySelect} from "./types/types";

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
