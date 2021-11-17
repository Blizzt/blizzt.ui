// Dependencies
import React, {useEffect, useRef} from 'react';
import Jazzicon from '@metamask/jazzicon';

// Assets
import logo from '@assets/images/blizzt.logo.svg';

// Styles
import * as styled from './styles';

function Header() {
  return (
    <styled.Layout>
      <styled.Logo
        src={logo}
        width={'38px'}
        height={'38px'}
        alt={'Blizzt Logo'}
      />
    </styled.Layout>
  );
}

export default Header;
