// Dependencies
import styled from 'styled-components';

export const Layout = styled.div`
  padding: 6px 20px;
  user-select: none;
  box-shadow: 0 2px 6px rgb(0 0 0 / 10%);

  ${({ theme }) => `
    background-color: ${theme.base[0]};
  `}
`;

export const Logo = styled.img`
  overflow: hidden;
  vertical-align: bottom;
`;
