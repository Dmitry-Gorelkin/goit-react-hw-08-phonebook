import { useSelector } from 'react-redux';

export const useAuth = () => {
  const user = useSelector(state => state.auth.user);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const isRefreshing = useSelector(state => state.auth.isRefreshing);
  const isLoading = useSelector(state => state.auth.isLoading);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    isLoading,
  };
};
