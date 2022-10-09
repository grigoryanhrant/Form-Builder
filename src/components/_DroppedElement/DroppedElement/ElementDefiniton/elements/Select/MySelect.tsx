import Select from "react-select";
import {selectOptions} from "./data";
import {customStyles} from "./customStyles/customStyles";
import {IElementDefinition} from "../../ElementDefintion";
import {useAppSelector} from "../../../../../../store/hooks";

interface IMySelect extends IElementDefinition {
    multiselect?: boolean
}

export const MySelect = ({ multiselect, id }: IMySelect) => {

    const { fields } = useAppSelector((state) => state.fieldsSlices)

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
