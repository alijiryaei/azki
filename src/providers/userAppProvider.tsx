import {createContext, useContext, useState, type ReactNode} from 'react';
const initialState = {
  userData: {
    phoneNumber: '',
    firstName: '',
    lastName: '',
  },
  insuranceType: '',
  vehicle: {
    vehicleType: '',
    vehicleUsage: '',
  },
  insuranceCompany: '',
  discount: {
    thirdPartyDiscount: 0,
    driverDiscount: 0,
  },
};

type AppData = typeof initialState;
type UpdateData = <T extends keyof AppData>(key: T, value: AppData[T]) => void;

const AppContext = createContext<
  | {
      data: typeof initialState;
      updateData: UpdateData;
    }
  | undefined
>(undefined);

export const AppProvider = ({children}: {children: ReactNode}) => {
  const [data, setData] = useState(initialState);

  const updateData: UpdateData = (key, value) => {
    setData(prev => ({...prev, [key]: value}));
  };

  return (
    <AppContext.Provider value={{data, updateData}}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context)
    throw new Error('useAppContext must be used within AppProvider');
  return context;
};
