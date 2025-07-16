import {useForm, type SubmitHandler} from 'react-hook-form';
import type {NavigateFunction} from 'react-router';
import {useAppContext} from '../../../providers/userAppProvider';

type VehicleTypeForm = {
  vehicleType: string;
  vehicleUsage: string;
};

export const useVehicleTypeForm = (navigate: NavigateFunction) => {
  const {updateData} = useAppContext();
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

  const onSubmit: SubmitHandler<VehicleTypeForm> = data => {
    updateData('vehicle', {
      vehicleType: data.vehicleType,
      vehicleUsage: data.vehicleUsage,
    });
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
