import { renderWithTheme } from '../../utils/tests/helpers';

import Container from '.';

describe('<Container />', () => {
  it('should render the component', () => {
    const { container } = renderWithTheme(
      <Container>
        <h1>Next Example</h1>
      </Container>
    );

    expect(container).toMatchSnapshot();
  });
});
