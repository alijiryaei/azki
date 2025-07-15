import {Controller} from 'react-hook-form';
import {Select} from '../../components/ui/select';
import {useVehicleTypeForm} from './hooks/useVehicleTypeForm';
import {Button} from '../../components/ui/button';

export const VehicleType = () => {
  const {control, handleSubmit, errors, onSubmit} = useVehicleTypeForm();
  return (
    <div className="w-full">
      <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">
        بیمه شخص ثالث
      </h1>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4 md:flex-row">
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
                  options={['hello', 'ali']}
                  {...field}
                />
              );
            }}
          />
          <Controller
            control={control}
            name="vehicleUsage"
            rules={{
              required: 'انتخاب مدل خودرو الزامی است',
            }}
            render={({field}) => (
              <Select
                label="مدل خودرو"
                error={!!errors.vehicleUsage}
                errorText={errors.vehicleUsage?.message}
                options={['hello', 'ali']}
                {...field}
              />
            )}
          />
        </div>
        <Button type="submit" variant="outlined">
          بعدی
        </Button>
      </form>
    </div>
  );
};
