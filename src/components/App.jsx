import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { Layout } from './Layout';
import { Home } from 'pages/Home';
import { Contacts } from 'pages/Contacts';
import { Registration } from 'pages/Registration';
import { Login } from 'pages/Login';
import { refreshUser } from 'redux/auth/operations';
import { Loader } from './Loader/Loader';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="/contacts" element={<Contacts />} /> */}
        <Route
          path="/contacts"
          element={<PrivateRoute element={Contacts} redirectTo="/login" />}
        />
        {/* <Route path="/registration" element={<Registration />} /> */}
        <Route
          path="/registration"
          element={<RestrictedRoute element={Registration} redirectTo="/" />}
        />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route
          path="/login"
          element={<RestrictedRoute element={Login} redirectTo="/" />}
        />
      </Route>
    </Routes>
  );
};
