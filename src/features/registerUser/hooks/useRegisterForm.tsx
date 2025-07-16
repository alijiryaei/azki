import {useForm, type SubmitHandler} from 'react-hook-form';
import {useNavigate} from 'react-router';
import {useAppContext} from '@/providers/userAppProvider';

type RegisterUserForm = {
  firstName: string;
  lastName: string;
  password: string;
  phoneNumber: string;
};

export const useRegisterForm = () => {
  const {updateData} = useAppContext();
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

  const onSubmit: SubmitHandler<RegisterUserForm> = ({
    lastName,
    firstName,
    phoneNumber,
  }) => {
    const user = {
      lastName,
      firstName,
      phoneNumber,
    };
    updateData('userData', user);
    sessionStorage.setItem('userData', JSON.stringify(user));
    navigate('/insurances');
  };

  return {
    control,
    errors,
    handleSubmit,
    onSubmit,
  };
};
