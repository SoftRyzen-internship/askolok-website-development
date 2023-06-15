import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Input from '@/components/form/input/Input';

export type FormInputsType = Record<string, object>;
import { fieldsParams } from './fieldsSample';

const Form: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormInputsType>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<FormInputsType> = data => {
    console.log(data);

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-slate-500 flex max-w-[444px] flex-col px-5 pb-10 md:px-8 md:pb-[60px]"
    >
      <Input
        register={register('name', { ...fieldsParams.name })}
        placeholder="Вашe Имя"
        errorMessage={errors.name?.message}
      />
      <Input
        register={register('phone', { ...fieldsParams.phone })}
        placeholder="Ваш Телефон"
        errorMessage={errors.phone?.message}
      />
      <Input
        register={register('name', { ...fieldsParams.email })}
        placeholder="Ваша Почта"
        errorMessage={errors.email?.message}
      />
      <button
        type="submit"
        className="border-5 bg-slate-200 text-white hover:bg-neutral-400 hover:shadow-slate-500  rounded-xl border-2 bg-opacity-40 p-2 transition-all  hover:scale-[1.1] hover:border-opacity-75 hover:bg-opacity-10 hover:shadow-lg"
      >
        Отправить
      </button>
    </form>
  );
};

export default Form;
