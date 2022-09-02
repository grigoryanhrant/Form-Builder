export const inputTypeChecker = (_type: any) => {
    return _type === 'TEXT_INPUT' && 'text'
        || _type === 'EMAIL_INPUT' && 'email'
        || _type === 'PHONE_INPUT' && 'tel'
        || _type === 'SHORT_TEXT' && 'text'
        || ''
}

export const elementTypeChecker = (_type: any) => {

}