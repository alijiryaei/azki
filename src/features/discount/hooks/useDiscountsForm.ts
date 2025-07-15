import {useForm} from 'react-hook-form';

export const useDiscountsForm = () => {
  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm({
    defaultValues: {
      thirdParty: '',
      driver: '',
    },
  });
  return {
    control,
    errors,
    handleSubmit,
  };
};
