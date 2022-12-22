import {
  Link,
  Stack,
  Button,
  Menu,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from '@mui/material';
import React from 'react';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

export default function TopBarMenu() {
  const [language, setLanguage] = React.useState('EN');
  const [currency, setCurrency] = React.useState('LKR');

  const handleLanguage = (event) => {
    setLanguage(event.target.value);
  };
  const handleCurrency = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <Stack flexDirection="row" gap="30px" alignItems="center">
      <Link
        href="#"
        underline="none"
        variant="body2"
        sx={{
          fontSize: '12px',
          lineHeight: '18px',
          color: 'primary.contrastText',
          fontWeight: 600,
        }}
      >
        FAQ's
      </Link>
      <Link
        href="#"
        underline="none"
        variant="body2"
        sx={{
          fontSize: '12px',
          lineHeight: '18px',
          color: 'primary.contrastText',
          fontWeight: 600,
        }}
      >
        Need Help?
      </Link>

      <Select
        variant="standard"
        labelId="language-select-label"
        id="language-select"
        value={language}
        label="EN"
        onChange={handleLanguage}
        disableUnderline
        sx={{
          fontSize: '12px',
          lineHeight: '18px',
          color: 'primary.contrastText',
          fontWeight: 600,
          '& .MuiSelect-icon': {
            color: 'primary.contrastText',
          },
        }}
      >
        <MenuItem
          sx={{ fontSize: '14px', lineHeight: '18px', fontWeight: 400 }}
          value={'EN'}
        >
          EN
        </MenuItem>
        <MenuItem
          sx={{ fontSize: '14px', lineHeight: '18px', fontWeight: 400 }}
          value={'SN'}
        >
          SN
        </MenuItem>
        <MenuItem
          sx={{ fontSize: '14px', lineHeight: '18px', fontWeight: 400 }}
          value={'BN'}
        >
          BN
        </MenuItem>
      </Select>
      <Select
        variant="standard"
        labelId="currency-select-label"
        id="currency-select"
        value={currency}
        label="EN"
        onChange={handleCurrency}
        disableUnderline
        sx={{
          fontSize: '12px',
          lineHeight: '18px',
          color: 'primary.contrastText',
          fontWeight: 600,
          '& .MuiSelect-icon': {
            color: 'primary.contrastText',
          },
        }}
      >
        <MenuItem
          sx={{ fontSize: '14px', lineHeight: '18px', fontWeight: 400 }}
          value={'LKR'}
        >
          LKR
        </MenuItem>
        <MenuItem
          sx={{ fontSize: '14px', lineHeight: '18px', fontWeight: 400 }}
          value={'INR'}
        >
          INR
        </MenuItem>
        <MenuItem
          sx={{ fontSize: '14px', lineHeight: '18px', fontWeight: 400 }}
          value={'USD'}
        >
          USD
        </MenuItem>
      </Select>
    </Stack>
  );
}
