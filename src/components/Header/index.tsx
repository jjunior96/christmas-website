import Link from 'next/link';

import Logo from 'components/Logo';

import { HeaderMock } from './mock';
import * as S from './styles';

const Header = () => {
  return (
    <S.Container role="menubar">
      <S.Content>
        <Logo color="white" />

        <S.MenuContainer>
          {HeaderMock.map((menu) => (
            <S.MenuItem key={menu.id}>
              <Link href={menu.href}>
                <a>{menu.name}</a>
              </Link>
            </S.MenuItem>
          ))}
        </S.MenuContainer>
      </S.Content>
    </S.Container>
  );
};

export default Header;
