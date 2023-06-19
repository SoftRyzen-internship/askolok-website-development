import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import Input from '@/components/form/Input/Input';
import Button from '@/components/Button/Button';

import { fieldsParams } from './fieldsSample';
import { FormInputsType } from './Form.pors';

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
    <form onSubmit={handleSubmit(onSubmit)} className="flex w-full max-w-[380px] grow flex-col ">
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

      <Button type="submit" color="gradient" content="Отправить" className="smOnly:min-w-[210px]" />
    </form>
  );
};

export default Form;
