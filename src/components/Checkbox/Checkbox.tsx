import * as S from '@/components/Checkbox/styles';
import { CheckboxProps } from '@/components/Checkbox/types';

export function Checkbox({ ...props }: CheckboxProps) {
  return <S.Wrapper {...props} type="checkbox" />;
}
