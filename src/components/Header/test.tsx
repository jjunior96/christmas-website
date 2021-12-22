import { screen } from '@testing-library/react';

import { renderWithTheme } from '../../utils/tests/helpers';

import Header from '.';

describe('<Header />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Header />);

    expect(screen.getByRole('menubar')).toBeInTheDocument();
    expect(screen.getByRole('menubar')).toHaveStyle({
      position: 'fixed'
    });

    expect(container.firstChild).toMatchSnapshot();
  });
});
