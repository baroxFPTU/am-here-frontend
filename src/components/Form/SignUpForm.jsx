import * as React from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import { Stack } from '@mui/material';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import StepContent from '@mui/material/StepContent';

import { ROLE_LISTENER_STRING, ROLE_MEMBER_STRING } from 'app/constant';
import SelectCategory from 'components/SelectField/SelectCategory';
import useAuth from 'features/auth/useAuth';
import InfoForm from './InfoForm';
import { useNavigate } from 'react-router-dom';
import { getAuth, updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { authActions } from 'features/auth/authSlice';

const steps = [
  {
    label: 'Thông tin cơ bản',
    description: ``,
  },
  {
    label: 'Create an ad group',
    description: 'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Create an ad',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

const SignUpForm = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const { user, signUpWithPassword, updateUserData } = useAuth();
  const [selectedRole, setSelectedRole] = React.useState(null);
  const registerData = React.useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const infoFormValues = {
    nickname: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthday: null,
    phone: '',
    gender: 'female',
  };

  const handleNext = (formValues) => {
    if (formValues) {
      registerData.current = {
        ...formValues,
      };
    }
    console.log({ registerData: registerData.current });
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleNextWithRole = (role) => {
    if (role) {
      registerData.current = {
        ...registerData.current,
        active_role: role,
      };
    }
    console.log({ registerData: registerData.current });
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleSubmitCategories = async (categories) => {
    console.log(categories);
    registerData.current = {
      ...registerData.current,
      categories,
    };

    signUpWithPassword({
      email: registerData.current.email,
      password: registerData.current.password,
      displayName: registerData.current.nickname,
      photoURL: 'https://source.unsplash.com/random',
    });
    dispatch(authActions.setActiveRole(registerData.current.active_role));
    const response = await axios.post('http://10.1.106.147:3000/api/user', {
      nickname: registerData.current.nickname,
      uid: user.uid,
      email: registerData.current.email,
      active_role: registerData.current.active_role,
    });
    navigate('/auth/login');
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const memberCategories = [
    {
      label: 'Áp lực',
      value: 'ap-luc',
    },
    {
      label: 'Học tập',
      value: 'hoc-tap',
    },
    {
      label: 'Cô đơn',
      value: 'co-don',
    },
  ];

  return (
    <Box sx={{ maxWidth: 500, width: '100%' }}>
      <Stepper activeStep={activeStep} orientation='vertical'>
        <Step>
          <StepLabel
            optional={
              activeStep === 2 ? <Typography variant='caption'>Last step</Typography> : null
            }
          >
            {'Thông tin cơ bản'}
          </StepLabel>
          <StepContent>
            <Typography>Chúng mình sẽ cần một số thông tin</Typography>
            <Box sx={{ mb: 2 }}>
              <InfoForm defaultValues={infoFormValues} handleNext={handleNext} />
            </Box>
          </StepContent>
        </Step>
        <Step>
          <StepLabel>{'Phân loại'}</StepLabel>
          <StepContent>
            <Typography>Bạn mong muốn trở thành?</Typography>
            <Box sx={{ mb: 2 }}>
              <div>
                <Stack spacing={2} sx={{ my: 2 }}>
                  <Button variant='outlined' onClick={() => setSelectedRole(ROLE_MEMBER_STRING)}>
                    Người nói
                  </Button>
                  <Button variant='outlined' onClick={() => setSelectedRole(ROLE_LISTENER_STRING)}>
                    Người nghe
                  </Button>
                </Stack>
                <Button
                  variant='contained'
                  onClick={() => {
                    if (selectedRole) {
                      handleNextWithRole(selectedRole);
                    }
                  }}
                  sx={{ mt: 1, mr: 1 }}
                  disabled={!selectedRole}
                >
                  Tiếp tục
                </Button>
                <Button disabled={activeStep === 0} onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                  Trở lại
                </Button>
              </div>
            </Box>
          </StepContent>
        </Step>
        <Step>
          <StepLabel
            optional={
              activeStep === 2 ? <Typography variant='caption'>Bước cuối</Typography> : null
            }
          >
            {selectedRole === ROLE_MEMBER_STRING ? 'Vấn đề tâm lý của bạn' : 'Lĩnh vực của bạn'}
          </StepLabel>
          <StepContent>
            <Box sx={{ mb: 2 }}>
              <div>
                <SelectCategory
                  defaultOptions={memberCategories}
                  onSubmit={handleSubmitCategories}
                  onBack={handleBack}
                />
              </div>
            </Box>
          </StepContent>
        </Step>
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>Tài khoản của bạn đã được tạo.</Typography>
        </Paper>
      )}
    </Box>
  );
};

export default SignUpForm;
