import {useNavigate} from 'react-router';

export const useInsurances = () => {
  const navigate = useNavigate();

  const handleInsuranceClick = () => {
    navigate('/vehicleType');
  };

  return {
    handleInsuranceClick,
  };
};
