import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Step from '@mui/material/Step';
import StepContent from '@mui/material/StepContent';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import { ROLE_LISTENER_STRING, ROLE_MEMBER_STRING } from 'app/constant';
import SelectCategory from 'components/SelectField/SelectCategory';
import * as React from 'react';
import InfoForm from './InfoForm';

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
  const [selectedRole, setSelectedRole] = React.useState(null);
  const registerData = React.useRef(null);
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

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const memberCategories = [
    {
      label: 'Áp lực',
    },
    {
      label: 'Học tập',
    },
    {
      label: 'Cô đơn',
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
              activeStep === 2 ? <Typography variant='caption'>Last step</Typography> : null
            }
          >
            {selectedRole === ROLE_MEMBER_STRING ? 'Vấn đề tâm lý của bạn' : 'Lĩnh vực của bạn'}
          </StepLabel>
          <StepContent>
            <Box sx={{ mb: 2 }}>
              <div>
                <SelectCategory defaultOptions={memberCategories} />
                <Button variant='contained' onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
                  {'Hoàn thành'}
                </Button>
                <Button disabled={activeStep === 0} onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                  Trở lại
                </Button>
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
