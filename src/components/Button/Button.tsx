import * as S from './styles';
import { ButtonProps } from './types';

export function Button({
  loading = false,
  leftIcon,
  rightIcon,
  children,
  ...props
}: ButtonProps) {
  return (
    <S.Wrapper {...props} loading={loading}>
      {loading ? (
        <S.Loading />
      ) : (
        <>
          {!!leftIcon && <S.LeftIcon>{leftIcon}</S.LeftIcon>}
          {children}
          {!!rightIcon && <S.RightIcon>{rightIcon}</S.RightIcon>}
        </>
      )}
    </S.Wrapper>
  );
}
