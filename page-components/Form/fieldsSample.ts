export const fieldsParams = {
  name: {
    required: "обязательное поле",
    minLength: {
      value: 2,
      message: "минимальное кол-во букв 2",
    },
    maxLength: {
      value: 20,
      message: "максимальное кол-во букв 20",
    },
  },

  phone: {
    required: "обязательное поле",
    pattern: {
      value: /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/,
      message: "Проверьте правильность ввода",
    },
    minLength: {
      value: 5,
      message: "минимальное кол-во цифр 5",
    },
    maxLength: {
      value: 10,
      message: "максимальное кол-во цифр 10",
    },
  },

  email: {
    required: "обязательное поле",
    pattern: {
      value:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: "Проверьте правильность ввода",
    },
    minLength: {
      value: 6,
      message: "минимальное длина 6",
    },
    maxLength: {
      value: 20,
      message: "максимальное длина 20",
    },
  },
  agreement: {
    required: "Подтевердите ваше соглашение",
  },
};
