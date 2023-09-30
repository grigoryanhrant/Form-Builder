import {
  BiText,
  SiGmail,
  HiUser,
  BsPhone,
  GrTextAlignLeft,
  MdLocationCity,
  BiCheckbox,
  RiCheckboxMultipleBlankLine,
  AiOutlineCheckSquare,
  MdDateRange,
  RiFileUploadLine,
} from '@static/icons'
import {
  CHECKBOX,
  DATEPICKER,
  EMAIL_INPUT,
  LONG_TEXT,
  MULTISELECT,
  PHONE_INPUT,
  SELECT,
  SHORT_TEXT,
  TEXT_INPUT,
  UPLOAD,
} from '@common/constants'

export const SidebarFormFields = {
  contactInfo: [
    {
      type: TEXT_INPUT,
      name: 'Address',
      description: 'Im a text  field, type in any text you want',
      placeholder: 'hi',
      icon: <MdLocationCity />,
      required: false,
      id: 1,
    },

    {
      type: EMAIL_INPUT,
      name: 'Email',
      description: 'Your Email',
      placeholder: '',
      icon: <SiGmail />,
      required: false,
      id: 2,
    },

    {
      type: TEXT_INPUT,
      name: 'Name',
      description: 'Whats your name?',
      placeholder: '',
      icon: <HiUser />,
      required: false,
      id: 3,
    },

    {
      type: PHONE_INPUT,
      name: 'Phone',
      description: 'Your Phone Number',
      placeholder: '',
      icon: <BsPhone />,
      required: false,
      id: 4,
    },
  ],

  special: [
    {
      type: SHORT_TEXT,
      name: 'Short text',
      description: 'Ask for an extended question here. What do you want to ask?',
      placeholder: 'My answer is...',
      icon: <BiText />,
      required: false,
      id: 5,
    },

    {
      type: LONG_TEXT,
      name: 'Long text',
      description: 'Ask for an extended question here. What do you want to ask?',
      placeholder: 'Let me tell you about this',
      icon: <GrTextAlignLeft />,
      required: false,
      id: 6,
    },

    {
      type: SELECT,
      name: 'SelectEditor',
      description: 'Whats your least favorite chore',
      icon: <BiCheckbox />,
      id: 7,
    },

    {
      type: MULTISELECT,
      name: 'Multi SelectEditor',
      description: 'SelectEditor a set of ',
      icon: <RiCheckboxMultipleBlankLine />,
      id: 8,
    },

    {
      type: CHECKBOX,
      name: 'Checkbox',
      description: '',
      descriptionForInput: 'I have read and agreed to Terms and Conditions',
      icon: <AiOutlineCheckSquare />,
      required: false,
      id: 9,
    },

    {
      type: DATEPICKER,
      name: 'Date',
      description: 'Date',
      icon: <MdDateRange />,
      id: 10,
    },

    {
      type: UPLOAD,
      name: 'File Upload',
      description: 'Describe the files to upload',
      icon: <RiFileUploadLine />,
      id: 11,
    },
  ],
}
