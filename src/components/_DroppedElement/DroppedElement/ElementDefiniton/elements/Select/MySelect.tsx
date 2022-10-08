import Select from "react-select";
import {selectOptions} from "./data";
import {customStyles} from "./customStyles/customStyles";
import {IElementDefinition} from "../../ElementDefintion";
import {useAppSelector} from "../../../../../../store/hooks";

export interface ISelectOption {
    readonly value: string;
    readonly label: string;
    readonly color: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
}

interface IMySelect extends IElementDefinition{
    multiselect?: boolean
}


export const MySelect = ({ multiselect, id }: IMySelect) => {

    const { selectFields } = useAppSelector((state) => state.fieldsSlices)

    console.log(selectFields);

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
