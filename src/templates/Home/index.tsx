import Header from 'components/Header';
import Heading from 'components/Heading';

import * as S from './styles';

const Home = () => {
  return (
    <>
      <S.ImageContainer>
        <img src="/img/bg.jpeg" alt="" />
      </S.ImageContainer>
      <S.Container>
        <Header />
        <S.Content>
          <Heading size="large">Happy Christmas</Heading>
        </S.Content>
      </S.Container>
    </>
  );
};

export default Home;
