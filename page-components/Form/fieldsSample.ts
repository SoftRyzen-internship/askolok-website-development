import { IFieldsParams } from './Form.props';

export const fieldsParams: IFieldsParams = {
  name: {
    required: 'обязательное поле',
    pattern: {
      value: /^[\sа-яА-Яa-zA-ZёЁІіЎў'-]{2,70}$/,
      message: 'Проверьте правильность ввода',
    },
    minLength: {
      value: 2,
      message: 'минимальное кол-во букв 2',
    },
    maxLength: {
      value: 70,
      message: 'максимальное кол-во букв 70',
    },
  },

  phone: {
    required: 'обязательное поле',
    pattern: {
      value: /^\+\d{9,12}$/,
      message: 'Проверьте правильность ввода',
    },
    minLength: {
      value: 10,
      message: 'минимальное кол-во цифр 9',
    },
    maxLength: {
      value: 13,
      message: 'максимальное кол-во цифр 12',
    },
  },

  email: {
    required: 'обязательное поле',
    pattern: {
      value:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Проверьте правильность ввода',
    },
    minLength: {
      value: 6,
      message: 'минимальное длина 6',
    },
    maxLength: {
      value: 63,
      message: 'максимальное длина 63',
    },
  },
};
