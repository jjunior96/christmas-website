import styled, { css } from 'styled-components';

export const Container = styled.header`
  width: 100%;

  position: fixed;
  top: 0;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0 auto;

    padding: ${theme.spacings.medium} 0;
  `}
`;

export const MenuContainer = styled.ul`
  display: flex;
  align-items: center;
`;

export const MenuItem = styled.li`
  ${({ theme }) => css`
    list-style: none;

    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.white};

    transition: color ${theme.transition.fast};

    & + li {
      margin-left: ${theme.spacings.medium};
    }

    &:hover {
      color: ${theme.colors.purple_300};
    }
  `}
`;
