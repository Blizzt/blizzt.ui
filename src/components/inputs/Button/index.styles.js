// Dependencies
import styled from 'styled-components';

// Types
import { buttonVariantsId } from '@types/inputs';
import { isConditional } from '@utils/styled';

export const Caption = styled.span`
  font-family: Inter;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  font-weight: 500;
`;

export const Container = styled.div``;

export const Layout = styled.div`
  padding: 12px 18px;
  display: inline-flex;
  border-radius: 4px;
  user-select: none;
  cursor: pointer;
  font-size: 15px;
  
  transition: background-color 60ms linear;
  
  ${({ theme, isLoading }) => `
    &.v-${buttonVariantsId.CONTAINED} {
      background: ${theme.blue[2]};
      color: white;
      
      &:hover {
        background: ${theme.blue[1]};
      }
      
      &:active {
        background: ${theme.blue[3]};
      }
    }
    
    ${isConditional(isLoading, `
      background: ${theme.neutral[1]};
    `)}
  `}

  &[disabled] {
    opacity: 0.2;
  }
`;
