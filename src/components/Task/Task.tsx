import { Trash } from '@phosphor-icons/react';

import { Checkbox } from '@/components/Checkbox';

import * as S from './styles';
import { TaskProps } from './types';

export function Task({
  content,
  done = false,
  onCheck,
  onTrashClick,
}: TaskProps) {
  function handleTaskCheck() {
    if (onCheck) {
      onCheck();
    }
  }

  function handleTrashClick() {
    if (onTrashClick) {
      onTrashClick();
    }
  }

  return (
    <S.Wrapper>
      <Checkbox checked={done} onChange={handleTaskCheck} />
      <S.Content done={done}>{content}</S.Content>
      <S.TrashIcon icon={<Trash />} onClick={handleTrashClick} />
    </S.Wrapper>
  );
}
