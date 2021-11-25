// Dependencies
import styled from 'styled-components';
import sizeTypesId from '@types/sizes';

export const sizes = {
  [sizeTypesId.S]: 32,
  [sizeTypesId.M]: 42,
  [sizeTypesId.L]: 64
};

export const Layout = styled.div`
  overflow: hidden;
  
  &.${sizeTypesId.S} {
    width: ${sizes[sizeTypesId.S]}px;
    height: ${sizes[sizeTypesId.S]}px;
    border-radius: ${sizes[sizeTypesId.S]}px;
  }

  &.${sizeTypesId.M} {
    width: ${sizes[sizeTypesId.M]}px;
    height: ${sizes[sizeTypesId.M]}px;
    border-radius: ${sizes[sizeTypesId.M]}px;
  }

  &.${sizeTypesId.L} {
    width: ${sizes[sizeTypesId.L]}px;
    height: ${sizes[sizeTypesId.L]}px;
    border-radius: ${sizes[sizeTypesId.L]}px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const JazzIcon = styled.div``;
