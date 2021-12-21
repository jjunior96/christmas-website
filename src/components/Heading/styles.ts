import styled, { css, DefaultTheme } from 'styled-components';

import { HeadingProps } from '.';

type ContainerProps = Omit<HeadingProps, 'children'>;

const containerModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
  `
};

export const Container = styled.h1<ContainerProps>`
  ${({ theme, size, color }) => css`
    color: ${theme.colors[color!]};

    font-weight: ${theme.font.bold};

    ${!!size && containerModifiers[size](theme)}
  `}
`;
