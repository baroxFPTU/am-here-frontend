import { Checkbox, FormControlLabel, ListItem } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const CategoryWithCheckboxStyled = styled(ListItem)`
  padding: 6px 12px;
  border-radius: 8px;
  &:hover {
    background: #dfe8f1;
  }
`;

const CategoryWithCheckbox = ({ label, value }) => {
  return (
    <CategoryWithCheckboxStyled key={value} disablePadding>
      <FormControlLabel
        label={label}
        control={<Checkbox value={value} />}
        labelPlacement='start'
        sx={{ width: '100%', justifyContent: 'space-between', marginLeft: 0 }}
        disableMargin
      />
    </CategoryWithCheckboxStyled>
  );
};

export default CategoryWithCheckbox;
