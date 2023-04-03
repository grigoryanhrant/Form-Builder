import styled, { css } from 'styled-components'

export const Main = styled.div`
    input[type='checkbox'] {
        width: max-content;
    }
`

interface IDefInput {
    descriptionForInput?: boolean
}

export const DefInput = styled.input<IDefInput>`
    ${({ descriptionForInput }) =>
        descriptionForInput &&
        css`
            position: absolute;
            z-index: -1;
            opacity: 0;

            + label {
                display: inline-flex;
                align-items: center;
                user-select: none;
            }

            &::before {
                content: '';
                display: inline-block;
                width: 1em;
                height: 1em;
                flex-shrink: 0;
                flex-grow: 0;
                border: 1px solid #ccd6dd;
                border-radius: 2px;
                margin-right: 10px;
                background-repeat: no-repeat;
                background-position: center center;
                background-size: 50% 50%;
            }

            &:not(:disabled) {
                &:active + label::before {
                    border-color: #989fa7;
                }
            }

            &:checked + label::before {
                border-color: #989fa7;
                background-color: #ccd6dd;
                background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
            }
        `}
`

export const Label = styled.label`
    cursor: pointer;
`
