import {Navigate, Outlet} from 'react-router';
import {useAppContext} from '@/providers/userAppProvider';

export const PrivateRoutes = () => {
  const {
    data: {
      userData: {firstName},
    },
  } = useAppContext();

  return firstName.length > 0 ? (
    <Outlet />
  ) : (
    <Navigate to="/register" replace />
  );
};
