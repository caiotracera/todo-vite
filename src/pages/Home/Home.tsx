import { PlusCircle } from '@phosphor-icons/react';

import { Button } from '@/components/Button';
import { Header } from '@/components/Header';
import { Input } from '@/components/Input';
import { Task } from '@/components/Task';

import * as S from './styles';

export function Home() {
  return (
    <S.Wrapper>
      <Header />
      <S.Content>
        <S.NewTask>
          <Input placeholder="Add a new task" />
          <Button rightIcon={<PlusCircle />}>Criar</Button>
        </S.NewTask>

        <S.Tasks>
          <S.TasksHeader>
            <S.TasksCreated>
              Tarefas criadas <S.Counter>5</S.Counter>
            </S.TasksCreated>
            <S.TasksCompleted>
              Tarefas concluídas <S.Counter>2 de 5</S.Counter>
            </S.TasksCompleted>
          </S.TasksHeader>

          <S.TasksList>
            <Task content="Mussum Ipsum, cacilds vidis litro abertis. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.Cevadis im ampola pa arma uma pindureta.Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.Suco de cevadiss deixa as pessoas mais interessantis." />

            <Task content="Mussum Ipsum, cacilds vidis litro abertis. Quem manda na minha terra sou euzis!Viva Forevis aptent taciti sociosqu ad litora torquent.In elementis mé pra quem é amistosis quis leo.Casamentiss faiz malandris se pirulitá." />

            <Task content="Mussum Ipsum, cacilds vidis litro abertis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.Per aumento de cachacis, eu reclamis.Delegadis gente finis, bibendum egestas augue arcu ut est.Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio." />

            <Task content="Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss deixa as pessoas mais interessantis.Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!Viva Forevis aptent taciti sociosqu ad litora torquent.Não sou faixa preta cumpadi, sou preto inteiris, inteiris." />

            <Task
              done
              content="Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis, bibendum egestas augue arcu ut est.Mé faiz elementum girarzis, nisi eros vermeio.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.A ordem dos tratores não altera o pão duris."
            />

            <Task
              done
              content="Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.Interagi no mé, cursus quis, vehicula ac nisi.Detraxit consequat et quo num tendi nada.Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi."
            />
          </S.TasksList>
        </S.Tasks>
      </S.Content>
    </S.Wrapper>
  );
}
