export const customStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    borderBottom: '',
    color: state.isSelected ? '' : '',
    backgroundColor: state.isSelected ? '#DDDDDD' : '#fff',
    fontSize: '14px',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '#aad7ff',
    },
  }),
  control: () => ({
    display: 'flex',
    height: '36px',
    border: '1px solid #d4d4d4',
    borderRadius: '2px',
    fontSize: '14px',
  }),
  singleValue: (provided: any) => {
    const transition = 'opacity 300ms'

    return { ...provided, transition }
  },
}
