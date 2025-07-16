import {useNavigate} from 'react-router';
import {useAppContext} from '../../../providers/userAppProvider';

export const useInsurances = () => {
  const {updateData} = useAppContext();
  const navigate = useNavigate();

  const handleInsuranceClick = (insurance: string) => {
    updateData('insuranceType', insurance);
    navigate('/vehicleType');
  };

  return {
    handleInsuranceClick,
  };
};
