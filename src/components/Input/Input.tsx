import * as S from '@/components/Input/styles';
import { InputProps } from '@/components/Input/types';

export function Input({ ...props }: InputProps) {
  return <S.Wrapper {...props} />;
}
