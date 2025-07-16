import {useForm, type SubmitHandler} from 'react-hook-form';
import {useAppContext} from '@/providers/userAppProvider';
import {type NavigateFunction} from 'react-router';

export const useInsuranceCompanyForm = (navigate: NavigateFunction) => {
  const {updateData} = useAppContext();
  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm({
    defaultValues: {
      company: '',
    },
  });

  const onSubmit: SubmitHandler<{company: string}> = data => {
    updateData('insuranceCompany', data.company);
    navigate('/discount');
  };

  return {
    control,
    errors,
    handleSubmit,
    onSubmit,
  };
};
