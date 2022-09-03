import Select from "react-select";
import {selectOptions} from "./data/data";
import {customStyles} from "./customStyles/customStyles";

export const MySelect = () => {
    return (
        <>
            <Select
                defaultValue={selectOptions[3]}
                name="colors"
                styles={customStyles}
                options={selectOptions}
                className="basic-multi-select"
                classNamePrefix="select"
            />
        </>
    );
};
