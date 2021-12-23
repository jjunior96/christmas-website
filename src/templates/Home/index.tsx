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
          <S.InfoContainer>
            <Heading size="large">Happy Christmas</Heading>

            <S.Description>
              The best of all gifts around any Christmas tree: the presence of a
              happy family all wrapped up in each other.{' '}
              <span>-Burton Hillis</span>
            </S.Description>
          </S.InfoContainer>
        </S.Content>
      </S.Container>
    </>
  );
};

export default Home;
