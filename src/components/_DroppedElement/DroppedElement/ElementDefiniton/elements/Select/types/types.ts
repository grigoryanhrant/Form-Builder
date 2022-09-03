export interface ISelectOption {
    readonly value: string;
    readonly label: string;
    readonly color: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
}

export interface IMySelect {
    multiselect?: boolean
}
