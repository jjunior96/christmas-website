import { screen } from '@testing-library/react';

import { renderWithTheme } from '../../utils/tests/helpers';

import theme from 'styles/theme';

import Logo from '.';

describe('<Logo />', () => {
  it('should render component default', () => {
    const { container } = renderWithTheme(<Logo />);

    expect(screen.getByRole('heading', { name: /jr/i })).toBeInTheDocument();
    expect(screen.getByText(/jr/i)).toHaveStyle({
      color: theme.colors.white
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with color dark', () => {
    renderWithTheme(<Logo color="black" />);

    expect(screen.getByText(/jr/i)).toHaveStyle({
      color: theme.colors.black
    });
  });
});
