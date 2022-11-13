import React from 'react';
import { Container } from '@mui/material';
import Banner from 'components/Banner';
import Section from 'components/common/Section';
import FilterBar from 'components/FilterBar';
import FilterSideBar from 'components/FilterSideBar';
import ListenerList from 'components/ListenerList';
import { selectCurrentRole, selectUser } from 'features/auth/authSlice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  CATEGORIES,
  REACT_APP_API_URL,
  ROLE_LISTENER_STRING,
  ROLE_MEMBER_STRING,
  SELECT_FIELD_LIST,
} from 'app/constant';
import axios from 'axios';
import { axiosClient } from 'app/axiosClient';
import { commonActions } from 'features/common/commonSlice';

const Home = () => {
  const [listeners, setListeners] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentRole = useSelector(selectCurrentRole);
  const user = useSelector(selectUser);
  const haveListeners = listeners.length > 0;
  const currentRoleSlug = currentRole?.slug;
  if (currentRoleSlug === ROLE_LISTENER_STRING) {
    navigate(`/listeners/${user.id}`);
  }

  useEffect(() => {
    (async () => {
      dispatch(commonActions.setIsLoading(true));
      if (currentRoleSlug === ROLE_MEMBER_STRING && !haveListeners) {
        try {
          const response = await axiosClient.get(`/users?role=${ROLE_LISTENER_STRING}`);

          setListeners(response.data.data);
        } catch (error) {
          console.log(error);
        }
      }
      dispatch(commonActions.setIsLoading(false));
    })();
  }, [currentRoleSlug, dispatch]);

  return (
    <div>
      <Banner />
      <Section noPadding>
        <FilterSideBar
          label='Danh mục'
          options={CATEGORIES}
          fallbackMessage='Không có bất kỳ sự lựa chọn nào.'
        />
        <Container sx={{ minHeight: '80vh' }}>
          <FilterBar selectFieldList={SELECT_FIELD_LIST} invisible={haveListeners} />
          <ListenerList listeners={listeners} haveListeners={haveListeners} />
        </Container>
      </Section>
    </div>
  );
};

export default Home;
