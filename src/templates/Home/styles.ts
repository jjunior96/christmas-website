import styled, { css } from 'styled-components';

import * as HeadingStyles from 'components/Heading/styles';

export const Container = styled.div`
  width: 100%;

  position: absolute;

  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100vh;

  position: relative;

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};

    margin: 0 auto;

    height: 100vh;

    display: flex;
    align-items: center;

    ${HeadingStyles.Container} {
      max-width: 20rem;
    }
  `}
`;

export const InfoContainer = styled.div``;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};

    color: ${theme.colors.white};

    max-width: 50rem;

    line-height: 1.5;

    margin-top: ${theme.spacings.xsmall};

    span {
      font-weight: ${theme.font.bold};
    }
  `}
`;
