import { Box, Stack } from '@mui/material';
import SelectField from 'components/SelectField';

const FilterBar = ({ label, selectFieldList = [], invisible }) => {
  return (
    <Box>
      <Stack direction='row' justifyContent='end'>
        <Box className='FilterFields'>
          {selectFieldList.length > 0 &&
            invisible &&
            selectFieldList.map((selectField, index) => (
              <SelectField
                key={index}
                id={selectField.id}
                label={selectField.label}
                options={selectField.options}
              />
            ))}
        </Box>
      </Stack>
    </Box>
  );
};

export default FilterBar;
