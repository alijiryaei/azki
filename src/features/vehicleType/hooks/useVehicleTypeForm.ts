import {useForm, type SubmitHandler} from 'react-hook-form';

type VehicleTypeForm = {
  vehicleType: string;
  vehicleUsage: string;
};

export const useVehicleTypeForm = () => {
  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm<VehicleTypeForm>({
    defaultValues: {
      vehicleType: '',
      vehicleUsage: '',
    },
  });

  const onSubmit: SubmitHandler<VehicleTypeForm> = data => {
    alert(data);
  };

  return {
    control,
    errors,
    handleSubmit,
    onSubmit,
  };
};
