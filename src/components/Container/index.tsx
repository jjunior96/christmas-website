import * as S from './styles';

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => (
  <S.Container>
    <S.Content>{children}</S.Content>
  </S.Container>
);

export default Container;
