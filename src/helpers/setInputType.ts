export const setInputType = ($type: string) => {
    return (
        ($type === 'TEXT_INPUT' && 'text') ||
        ($type === 'EMAIL_INPUT' && 'email') ||
        ($type === 'PHONE_INPUT' && 'tel') ||
        ($type === 'SHORT_TEXT' && 'text') ||
        ($type === 'CHECKBOX' && 'checkbox') ||
        ($type === 'DATEPICKER' && 'date') ||
        ''
    )
}
