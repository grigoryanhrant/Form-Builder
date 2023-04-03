import type { IElementDefinition } from '../../DroppedElement/ElementDefintion'
import type { FC, ReactElement } from 'react'
import Select from 'react-select'
import { customStyles } from './customStyles/customStyles'
import { useAppSelector } from '@store/hooks'
import { selectOptions } from '@mocks/mocks'

interface IMySelect extends IElementDefinition {
    multiselect?: boolean
}

export const SelectDefinition: FC<IMySelect> = ({ multiselect }): ReactElement => {
    const { fields } = useAppSelector((state) => state.fieldsSlices)

    return (
        <>
            <Select
                defaultValue={selectOptions[3]}
                name='colors'
                styles={customStyles}
                options={selectOptions}
                isMulti={multiselect}
                className='basic-multi-select'
                classNamePrefix='select'
            />
        </>
    )
}
