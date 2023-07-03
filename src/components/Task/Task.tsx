import { useState } from 'react';

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
  const [isDone, setIsDone] = useState(done);

  function handleTaskCheck() {
    setIsDone((prevState) => !prevState);

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
      <Checkbox checked={isDone} onChange={handleTaskCheck} />
      <S.Content done={isDone}>{content}</S.Content>
      <S.TrashIcon icon={<Trash />} onClick={handleTrashClick} />
    </S.Wrapper>
  );
}
