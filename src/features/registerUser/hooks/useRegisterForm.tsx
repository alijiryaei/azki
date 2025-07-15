import {useForm, type SubmitHandler} from 'react-hook-form';
import {useNavigate} from 'react-router';

type RegisterUserForm = {
  firstName: string;
  lastName: string;
  password: string;
  phoneNumber: string;
};

export const useRegisterForm = () => {
  const navigate = useNavigate();
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

  const onSubmit: SubmitHandler<RegisterUserForm> = () => {
    navigate('/insurance');
  };

  return {
    control,
    errors,
    handleSubmit,
    onSubmit,
  };
};
