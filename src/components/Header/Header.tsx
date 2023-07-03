import logoImg from '@/assets/logo.svg';

import * as S from './styles';

export function Header() {
  return (
    <S.Wrapper>
      <img src={logoImg} alt="" />
    </S.Wrapper>
  );
}
