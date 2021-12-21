import styled, { css } from 'styled-components';

import { LogoProps } from '.';

type ContainerProps = Pick<LogoProps, 'color'>;

export const Container = styled.h2<ContainerProps>`
  ${({ theme, color }) => css`
    color: ${theme.colors[color!]};

    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    font-family: 'Pacifico';
  `}
`;
