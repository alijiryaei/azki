import {useForm} from 'react-hook-form';

export const useInsuranceCompanyForm = () => {
  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm({
    defaultValues: {
      company: '',
    },
  });

  return {
    control,
    errors,
    handleSubmit,
  };
};
