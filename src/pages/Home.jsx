import { Container } from '@mui/material';
import Banner from 'components/Banner';
import Section from 'components/common/Section';
import FilterBar from 'components/FilterBar';
import FilterSideBar from 'components/FilterSideBar';
import ListenerList from 'components/ListenerList';
import { selectCurrentRole, selectUser } from 'features/auth/authSlice';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  CATEGORIES,
  REACT_APP_API_URL,
  ROLE_LISTENER_STRING,
  ROLE_MEMBER_STRING,
  SELECT_FIELD_LIST,
} from 'app/constant';
import axios from 'axios';

const Home = () => {
  const [listeners, setListeners] = useState([]);
  const navigate = useNavigate();
  const currentRole = useSelector(selectCurrentRole);
  const user = useSelector(selectUser);
  const haveListeners = listeners.length > 0;
  if (currentRole === ROLE_LISTENER_STRING) {
    navigate(`/listeners/${user.id}`);
  }

  useEffect(() => {
    (async () => {
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
      <Section noPadding>
        <FilterSideBar
          label='Danh mục'
          options={CATEGORIES}
          fallbackMessage='Không có bất kỳ sự lựa chọn nào.'
        />
        <Container>
          <FilterBar selectFieldList={SELECT_FIELD_LIST} invisible={haveListeners} />
          <ListenerList listeners={listeners} haveListeners={haveListeners} />
        </Container>
      </Section>
    </div>
  );
};

export default Home;
