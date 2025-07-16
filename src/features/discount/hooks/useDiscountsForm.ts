import {useForm, type SubmitHandler} from 'react-hook-form';
import {useAppContext} from '@/providers/userAppProvider';
import {useState} from 'react';

type DiscountsForm = {
  thirdParty: string;
  driver: string;
};

export const useDiscountsForm = () => {
  const {updateData} = useAppContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleShowModal = () => {
    setIsModalOpen(prev => !prev);
  };
  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm<DiscountsForm>({
    defaultValues: {
      thirdParty: '',
      driver: '',
    },
  });

  const onSubmit: SubmitHandler<DiscountsForm> = data => {
    updateData('discount', {
      driverDiscount: data.driver,
      thirdPartyDiscount: data.thirdParty,
    });
    handleShowModal();
  };
  return {
    control,
    errors,
    handleSubmit,
    onSubmit,
    handleShowModal,
    isModalOpen,
  };
};
