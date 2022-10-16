import { Container } from '@mui/material';
import Banner from 'components/Banner';
import Section from 'components/common/Section';
import FilterBar from 'components/FilterBar';
import ListenerList from 'components/ListenerList';
import React, { useEffect, useState } from 'react';
import FilterSideBar from 'components/FilterSideBar';
import useAuth from 'features/auth/useAuth';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authActions, selectCurrentRole } from 'features/auth/authSlice';

import axios from 'axios';
import { REACT_APP_API_URL, ROLE_MEMBER_STRING } from 'app/constant';

const Home = () => {
  const [listeners, setListeners] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentRole = useSelector(selectCurrentRole);

  const updateUser = (user) => {
    if (!user) return;
    dispatchUserData(user);
    navigate('/');
  };

  const {} = useAuth(updateUser);

  const dispatchUserData = async (userData) => {
    try {
      if (!userData) return;
      const response = await axios.post(`${REACT_APP_API_URL}/user`, {
        nickname: userData.displayName,
        uid: userData.uid,
        email: userData.email,
        active_role: userData.active_role,
      });
      const result = await response.data;
      dispatch(
        authActions.login({
          id: result._id,
          uid: userData.uid,
          nickname: result.nickname,
          photoURL: result.photoURL,
          email: result.email,
          active_role: result.active_role,
        })
      );
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    (async () => {
      console.log(currentRole);
      if (currentRole === ROLE_MEMBER_STRING) {
        try {
          const response = await axios.get(`${REACT_APP_API_URL}/user/filter/role/listener`);

          setListeners(response.data);
        } catch (error) {
          console.log(error);
        }
      }
    })();
  }, [currentRole]);

  return (
    <div>
      <Banner />
      <Section>
        <FilterSideBar />
        <Container>
          <FilterBar />
          <ListenerList listeners={listeners} />
        </Container>
      </Section>
    </div>
  );
};

export default Home;
