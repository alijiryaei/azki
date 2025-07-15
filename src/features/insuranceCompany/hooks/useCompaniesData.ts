import {useQuery} from '@tanstack/react-query';
import {getCompanies} from '../services/getCompanies';

export const useCompaniesData = () => {
  const {data} = useQuery({
    queryKey: ['insuranceCompanies'],
    queryFn: getCompanies,
    select: companies => {
      return companies.filter(company => company.available == true);
    },
  });

  const insuranceCompaniesData = data?.map(company => company.title);

  return {insuranceCompaniesData};
};
