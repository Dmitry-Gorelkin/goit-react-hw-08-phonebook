import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix';
import { useAuth } from 'hooks';
import { Layout } from './Layout';
import { Home } from 'pages/Home';
import { Contacts } from 'pages/Contacts';
import { Registration } from 'pages/Registration';
import { Login } from 'pages/Login';
import { refreshUser } from 'redux/auth/operations';
import { Loader } from './UI/Loader/Loader';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { AddContact } from 'pages/AddContacts';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser())
      .unwrap()
      .catch(e => {
        Notify.failure(`${e}`);
      });
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/contacts"
          element={<PrivateRoute element={Contacts} redirectTo="/login" />}
        />

        <Route
          path="/contacts/add"
          element={<PrivateRoute element={AddContact} redirectTo="/login" />}
        />

        <Route
          path="/registration"
          element={
            <RestrictedRoute element={Registration} redirectTo="/contacts" />
          }
        />
        <Route
          path="/login"
          element={<RestrictedRoute element={Login} redirectTo="/contacts" />}
        />
      </Route>
    </Routes>
  );
};
