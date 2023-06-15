import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import Input from '@/components/form/Input/Input';

import { FormInputsType } from './Form.pors';
import { fieldsParams } from './fieldsSample';

const Form: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputsType>();

  const onSubmit: SubmitHandler<FormInputsType> = data => {
    console.log(data);

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex max-w-[444px] flex-col px-5 pb-10 md:px-8 md:pb-[60px] md:pt-2"
    >
      <h2 className="mb-8 text-[24px] font-bold leading-[0.95]">Оставить заявку</h2>

      <div className="mb-4 flex flex-col gap-3">
        <Input
          register={register('name', { ...fieldsParams.name })}
          placeholder="Вашe Имя"
          label="Имя"
          errorMessage={errors.name?.message}
        />
        <Input
          register={register('phone', { ...fieldsParams.phone })}
          label="Телефон"
          placeholder="Ваш Телефон"
          errorMessage={errors.phone?.message}
        />
        <Input
          register={register('email', { ...fieldsParams.email })}
          label="Email"
          placeholder="Ваша Почта"
          errorMessage={errors.email?.message}
        />
      </div>

      <button
        type="submit"
        className="w-full rounded bg-blueBgGradient p-[14px] text-center text-lg font-bold text-whiteBg"
      >
        Отправить
      </button>
    </form>
  );
};

export default Form;
