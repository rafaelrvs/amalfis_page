import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { Chamados } from '@/app/components/Chamados';
import ChamadosColuna from '@/app/components/Chamados/Chamados.Coluna';

interface Task {
  id: string;
  content: string;
}

interface Column {
  id: string;
  title: string;
  taskIds: string[];
}

interface KanbanData {
  tasks: { [key: string]: Task };
  columns: { [key: string]: Column };
  columnOrder: string[];
}

const initialData: KanbanData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Tarefa 1' },
    'task-2': { id: 'task-2', content: 'Tarefa 2' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Fazendo',
      taskIds: ['task-1', 'task-2'],
    },
    // Você pode adicionar mais colunas conforme necessário
  },
  columnOrder: ['column-1'],
};

export default function NavigationChamados() {
  const [data, setData] = useState(initialData);

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const startColumn = data.columns[source.droppableId];
    const endColumn = data.columns[destination.droppableId];

    if (startColumn === endColumn) {
      const newTaskIds = Array.from(startColumn.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...startColumn,
        taskIds: newTaskIds,
      };

      setData({
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      });
      return;
    }

    // Movendo para outra coluna
    const startTaskIds = Array.from(startColumn.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...startColumn,
      taskIds: startTaskIds,
    };

    const endTaskIds = Array.from(endColumn.taskIds);
    endTaskIds.splice(destination.index, 0, draggableId);
    const newEnd = {
      ...endColumn,
      taskIds: endTaskIds,
    };

    setData({
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newEnd.id]: newEnd,
      },
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Chamados.Root className="overflow-hidden w-[95vw] bg-primary-grey-900 p-5 bg-linear-to-r/srgb from-primary-gradient-900 to-primary-gradient-800">
        {data.columnOrder.map((columnId) => {
          const column = data.columns[columnId];
          const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

          return (
            <Droppable droppableId={column.id} key={column.id}>
              {(provided) => (
                <ChamadosColuna
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="w-[300px] flex flex-col p-[15px] bg-primary-gradient-900 gap-1.5 drop-shadow-2xl rounded-[15px]"
                >
                  <h1 className="p-3 text-[1.5rem]">{column.title}</h1>
                  {tasks.map((task, index) => (
                    <Draggable draggableId={task.id} index={index} key={task.id}>
                      {(provided, snapshot) => (
                        <Chamados.Card
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`bg-white text-primary-gradient-900 rounded-[5px] flex flex-col gap-1 p-2 ${
                            snapshot.isDragging ? 'opacity-70' : ''
                          }`}
                        >
                          <img src="/image/logo.svg" alt="imagem" />
                          <h1>{task.content}</h1>
                          {/* Outros conteúdos do cartão */}
                        </Chamados.Card>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ChamadosColuna>
              )}
            </Droppable>
          );
        })}
      </Chamados.Root>
    </DragDropContext>
  );
}
