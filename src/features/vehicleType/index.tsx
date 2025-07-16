import {Controller} from 'react-hook-form';
import {Select} from '@/components/ui/select';
import {useVehicleTypeForm} from './hooks/useVehicleTypeForm';
import {Button} from '@/components/ui/button';
import {useVehicleTypes} from './hooks/useVehicleTypes';
import {useNavigate} from 'react-router';

export const VehicleType = () => {
  const navigate = useNavigate();
  const {control, handleSubmit, errors, onSubmit, selectedType} =
    useVehicleTypeForm(navigate);
  const {vehicleTypesData, vehicleUsages} = useVehicleTypes(selectedType);
  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4 flex flex-col gap-4 md:flex-row-reverse">
        <Controller
          name="vehicleType"
          control={control}
          rules={{
            required: 'انتخاب نوع خودرو الزامی است',
          }}
          render={({field}) => {
            return (
              <Select
                label="نوع خودرو"
                error={!!errors.vehicleType}
                errorText={errors.vehicleType?.message}
                options={vehicleTypesData!}
                {...field}
              />
            );
          }}
        />
        <Controller
          control={control}
          name="vehicleUsage"
          disabled={selectedType == ''}
          rules={{
            required: 'انتخاب مدل خودرو الزامی است',
          }}
          render={({field}) => (
            <Select
              label="مدل خودرو"
              error={!!errors.vehicleUsage}
              errorText={errors.vehicleUsage?.message}
              options={vehicleUsages!}
              {...field}
            />
          )}
        />
      </div>
      <div className="flex w-full justify-between">
        <Button type="submit" variant="outlined">
          مرحله بعد
        </Button>
        <Button onClick={() => navigate(-1)} variant="outlined">
          مرحله قبل
        </Button>
      </div>
    </form>
  );
};
