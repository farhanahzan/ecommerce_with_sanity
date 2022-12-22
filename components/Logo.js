import React from 'react';
import { Avatar } from '@mui/material';
import Image from 'next/image';

function Logo() {
  return (
    <Image src="/images/chetty.png" width="150px" height="40px" alt="logo" />
  );
}

export default Logo;
