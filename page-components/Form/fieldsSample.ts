import { IFieldsParams } from './Form.pors';

export const fieldsParams: IFieldsParams = {
  name: {
    required: 'обязательное поле',
    pattern: {
      value: /^[\sа-яА-Яa-zA-ZёЁЇїІіЄєҐґ'\-]{2,70}$/,
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
      value: /^\+\d{11}$/,
      message: 'Проверьте правильность ввода',
    },
    minLength: {
      value: 5,
      message: 'минимальное кол-во цифр 5',
    },
    maxLength: {
      value: 14,
      message: 'максимальное кол-во цифр 14',
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
