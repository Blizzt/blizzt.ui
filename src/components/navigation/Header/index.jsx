// Dependencies
import React from 'react';

// Assets
import logo from '@assets/images/blizzt.logo-circle.svg';

// Styles
import * as styled from './index.styles';

function Header() {
  return (
    <styled.Layout>
      <styled.Logo
        src={logo}
        width={'53px'}
        height={'53px'}
        alt={'Blizzt Logo'}
      />
    </styled.Layout>
  );
}

export default Header;
