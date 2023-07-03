import * as S from './styles';
import { IconButtonProps } from './types';

export function IconButton({ icon, ...props }: IconButtonProps) {
  return <S.Wrapper {...props}>{icon}</S.Wrapper>;
}
