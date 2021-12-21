import * as S from './styles';

export type LogoProps = {
  color?: 'white' | 'black';
};

const Logo = ({ color = 'white' }: LogoProps) => {
  return <S.Container color={color}>JR</S.Container>;
};

export default Logo;
