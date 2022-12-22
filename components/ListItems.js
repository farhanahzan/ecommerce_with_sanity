import React from 'react';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
} from '@mui/material';
function ListItems({ contactDetails }) {
  return (
    <List
      sx={{
        display: 'flex',
        color: 'primary.contrastText',
        py: 0,
        paddingBottom: '8px',
        paddingTop: '5px',
      }}
    >
      <ListItem
        component="a"
        href={`tel:${contactDetails.phoneNo}`}
        alignItems="flex-start"
      >
        <ListItemIcon
          sx={{
            width: '1em',
            height: '1em',
            marginTop: { xs: 0, sm: '2px' },
            minWidth: '25px',
            color: 'secondary.main',
          }}
        >
          <CallOutlinedIcon sx={{ fontSize: '20px', lineHeight: '30px' }} />
        </ListItemIcon>
        <ListItemText
          primaryTypographyProps={{
            fontSize: '13px',
            lineHeight: '18px',
            fontWeight: '400',
            display: { xs: 'none', sm: 'block' },
          }}
          primary={contactDetails.phoneNo}
          secondary={null}
        />
      </ListItem>
      <ListItem
        component="a"
        href={`mailto:${contactDetails.email}`}
        alignItems="flex-start"
      >
        <ListItemIcon
          sx={{
            width: '1em',
            height: '1em',
            marginTop: { xs: 0, sm: '2px' },

            minWidth: '28px',
            color: 'secondary.main',
          }}
        >
          <EmailOutlinedIcon sx={{ fontSize: '20px', lineHeight: '30px' }} />
        </ListItemIcon>
        <ListItemText
          primaryTypographyProps={{
            fontSize: '13px',
            lineHeight: '18px',
            fontWeight: '400',
            display: { xs: 'none', sm: 'block' },
          }}
          primary={contactDetails.email}
          secondary={null}
        />
      </ListItem>
    </List>
  );
}

export default ListItems;
