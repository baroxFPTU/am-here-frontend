import { Box, Container } from '@mui/material';
import { userApi } from 'api/userApi';
import Button from 'components/common/Button';
import ProfileForm from 'components/profiles/form/ProfileForm';
import InfoSection from 'components/profiles/InfoSection';
import StyledTabs from 'components/Tabs/StyledTabs';
import TabPanel from 'components/Tabs/TabPanel';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const defaultTabs = [
  {
    id: 0,
    value: 0,
    label: 'Thông tin cá nhân',
  },
  { id: 1, value: 1, label: 'Thiết lập bảo mật' },
];

const defaultTabPanels = [
  {
    id: 0,
    value: 0,
    component: <ProfileForm />,
  },
];

const ProfilePage = () => {
  const params = useParams();
  const [user, setUser] = useState(null);
  const [tabIndex, setTabIndex] = useState(0);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    const userId = params.uid;
    if (userId) {
      userApi
        .getById(userId)
        .then((res) => {
          setUser(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [params.uid]);

  const handleChangeIndex = (e, newValue) => {
    setTabIndex(newValue);
  };

  const handleChangeFormMode = () => {
    setIsEditMode(!isEditMode);
  };

  const editButtonLabel = isEditMode ? 'Hoàn tất chỉnh sửa' : 'Chỉnh sửa';

  return (
    <Container sx={{ py: 9 }}>
      {user && <InfoSection user={user} />}
      <StyledTabs tabs={defaultTabs} currentIndex={tabIndex} onChange={handleChangeIndex} />
      <Box sx={{ maxWidth: 600, margin: '0 auto' }}>
        <TabPanel currentIndex={tabIndex} index={0}>
          <Box sx={{ py: 2 }}>
            <Button variant='outlined' onClick={handleChangeFormMode}>
              {editButtonLabel}
            </Button>
          </Box>
          <ProfileForm defaultValues={user} isEditing={!isEditMode} />
        </TabPanel>
      </Box>
    </Container>
  );
};

export default ProfilePage;
