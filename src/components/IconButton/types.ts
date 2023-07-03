import { ButtonProps } from '@/components/Button/types';

export type IconButtonProps = {
  icon: React.ReactNode;
} & Omit<ButtonProps, 'children' | 'leftIcon' | 'rightIcon'>;
