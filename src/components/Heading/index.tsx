import * as S from './styles';

export type HeadingProps = {
  size?: 'small' | 'medium' | 'large';
  color?: 'white' | 'black';
  children: React.ReactNode;
};

const Heading = ({
  size = 'large',
  color = 'white',
  children
}: HeadingProps) => {
  return (
    <S.Container size={size} color={color}>
      {children}
    </S.Container>
  );
};

export default Heading;
