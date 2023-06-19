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

  const onSubmit = async (data: FormInputsType) => {
    console.log(data);
    const message = `Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}`;
    const response = await fetch(
      `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `chat_id=${process.env.NEXT_PUBLIC_GROUP_ID}&text=${encodeURIComponent(message)}`,
      }
    );

    const responseData = await response.json();
    console.log('responseData:', responseData);

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      // className="flex w-full max-w-[380px] flex-col px-5 pb-10 md:px-8 md:pb-[60px] md:pt-2"
      className="flex w-full max-w-[380px] grow flex-col "
    >
      <h2 className="mb-8 text-[24px] font-bold leading-[0.95]">Оставить заявку</h2>

      <div className="flex flex-col gap-3 mb-4">
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
