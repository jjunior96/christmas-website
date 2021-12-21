import { screen } from '@testing-library/react';

import { renderWithTheme } from '../../utils/tests/helpers';

import theme from 'styles/theme';

import Heading from '.';

describe('<Heading />', () => {
  it('should render the heading default', () => {
    const { container } = renderWithTheme(<Heading>test</Heading>);

    expect(screen.getByRole('heading', { name: /test/i })).toBeInTheDocument();
    expect(screen.getByText(/test/i)).toHaveStyle({
      color: theme.colors.white,
      'font-size': theme.font.sizes.huge
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with color dark', () => {
    renderWithTheme(<Heading color="black">test</Heading>);

    expect(screen.getByText(/test/i)).toHaveStyle({
      color: theme.colors.black
    });
  });

  it('should render with small size', () => {
    renderWithTheme(<Heading size="small">test</Heading>);

    expect(screen.getByText(/test/i)).toHaveStyle({
      'font-size': theme.font.sizes.medium
    });
  });

  it('should render with medium size', () => {
    renderWithTheme(<Heading size="medium">test</Heading>);

    expect(screen.getByText(/test/i)).toHaveStyle({
      'font-size': theme.font.sizes.large
    });
  });
});
