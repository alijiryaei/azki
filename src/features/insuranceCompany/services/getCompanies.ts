import request from '../../../services/axios';

type CompaniesModel = {
  available: boolean;
  title: string;
  id: number;
}[];

export const getCompanies = async () => {
  const {data}: {data: CompaniesModel} = await request.get(
    'third/companies',
  );
  return data;
};
