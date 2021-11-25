// Dependencies
import styled from 'styled-components';
import { animated } from 'react-spring'
import {isConditional} from "@utils/styled";


export const Text = styled.span`
  text-align: center;
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-size: 10px;
`;

export const Badge = styled(animated.div)`
  position: absolute;
  z-index: 2;

  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  right: -2px;
  bottom: -2px;
  
  padding: 4px 8px;
  
  user-select: none;
`;

export const Children = styled.div`
  z-index: 1;
`;

export const Layout = styled.div`
  position: relative;
  display: inline-flex;

  ${props => `
  
      ${isConditional(props.min, `
        ${Badge} {
          padding: 0;
          right: 0;
          bottom 0;
          width: 10px;
          height: 10px;
        }
      `)}
  
      ${Badge} {
        background: ${props.backgroundColor};
      }
      
      ${Text} {
        color: ${props.textColor};
      }
  `}
`;
