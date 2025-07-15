import {useForm, type SubmitHandler} from 'react-hook-form';
import type {NavigateFunction} from 'react-router';

type VehicleTypeForm = {
  vehicleType: string;
  vehicleUsage: string;
};

export const useVehicleTypeForm = (navigate: NavigateFunction) => {
  const {
    control,
    formState: {errors},
    handleSubmit,
    watch,
  } = useForm<VehicleTypeForm>({
    defaultValues: {
      vehicleType: '',
      vehicleUsage: '',
    },
  });

  const onSubmit: SubmitHandler<VehicleTypeForm> = () => {
    navigate('/insuranceCompany');
  };

  const selectedType = watch('vehicleType');

  return {
    control,
    errors,
    handleSubmit,
    onSubmit,
    selectedType,
  };
};
