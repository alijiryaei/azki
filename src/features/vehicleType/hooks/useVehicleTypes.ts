import {useQuery} from '@tanstack/react-query';
import {getVehicleTypes} from '../services/getVehiclesType';

export const useVehicleTypes = (selectedType: string) => {
  const {data} = useQuery({
    queryKey: ['vehicleTypes'],
    queryFn: getVehicleTypes,
  });

  const vehicleTypesData = data?.map(vehicle => vehicle.title);

  const vehicleUsages = data
    ?.find(vehicle => vehicle.title == selectedType)
    ?.usages.map(usage => usage.title);

  return {
    vehicleTypesData,
    vehicleUsages,
  };
};
