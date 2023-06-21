import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import Input from '@/components/form/Input/Input';
import Button from '@/components/Button/Button';

import { fieldsParams } from './fieldsSample';
import { FormInputsType } from './Form.props';

const Form: FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputsType>();

  const sendMessage = async (data: FormInputsType) => {
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

    if (responseData.ok) {
      return responseData;
    } else {
      throw new Error('Не удалось отправить.');
    }
  };

  const onSubmit = async (data: FormInputsType) => {
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    const messagePromise = sendMessage(data);

    toast.promise(messagePromise, {
      loading: 'Отправка...',
      success: 'Данные успешно отправлены!',
      error: 'Не удалось отправить.',
    });

    try {
      await messagePromise;
      reset();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
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

      <Button
        content={isSubmitting ? 'Отправка...' : 'Отправить'}
        color="gradient"
        type="submit"
        className="w-full p-[14px] text-center text-lg font-bold text-whiteBg disabled:bg-gradient-to-r disabled:from-blackBg disabled:to-blackBg disabled:font-normal smOnly:min-w-[210px]"
        disabled={isSubmitting}
      />
    </form>
  );
};

export default Form;
