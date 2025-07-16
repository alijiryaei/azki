import request from '../../../services/axios';

type VehicleTypeUsage = {
  id: number;
  title: string;
};

type VehicleTypeModel = {
  id: number;
  title: string;
  usages: VehicleTypeUsage[];
}[];

export const getVehicleTypes = async () => {
  const {data}: {data: VehicleTypeModel} = await request.get(
    'vehicle/types',
  );

  return data;
};
