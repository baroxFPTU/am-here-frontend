import { List, Typography } from '@mui/material';
import { Box } from '@mui/system';
import CategoryWithCheckbox from './CategoryWithCheckbox';
import { FilterSidebarBoxStyle, FilterSidebarLabelStyle } from './styles';

const FilterSideBar = ({ label = 'Filter sidebar', options, fallbackMessage }) => {
  return (
    <Box sx={FilterSidebarBoxStyle}>
      <Typography variant='h5' sx={FilterSidebarLabelStyle}>
        {label}
      </Typography>
      <List>
        {options &&
          options.map((item) => (
            <CategoryWithCheckbox key={item.value} label={item.label} value={item.value} />
          ))}
        {!options && <Typography>{fallbackMessage}</Typography>}
      </List>
    </Box>
  );
};

export default FilterSideBar;
