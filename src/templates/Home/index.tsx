import Container from 'components/Container';

import * as S from './styles';

const Home = () => {
  return (
    <>
      <S.ImageContainer>
        <img src="/img/bg.jpeg" alt="" />
      </S.ImageContainer>
      <Container>
        <S.Container></S.Container>
      </Container>
    </>
  );
};

export default Home;
