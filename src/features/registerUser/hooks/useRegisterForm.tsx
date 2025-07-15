import {useForm, type SubmitHandler} from 'react-hook-form';

type RegisterUserForm = {
  firstName: string;
  lastName: string;
  password: string;
  phoneNumber: string;
};

export const useRegisterForm = () => {
  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm<RegisterUserForm>({
    defaultValues: {
      firstName: '',
      lastName: '',
      password: '',
      phoneNumber: '',
    },
  });

  const onSubmit: SubmitHandler<RegisterUserForm> = data => {
    alert(data);
  };

  return {
    control,
    errors,
    handleSubmit,
    onSubmit,
  };
};
