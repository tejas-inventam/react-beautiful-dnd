import type { Column, Task } from "@/types";
import TaskCom from "./task";
import { Draggable, Droppable } from "react-beautiful-dnd";

interface PropsI {
  column: Column;
  tasks: Task[];
  index: number;
}

const ColumnCom = ({ column, tasks = [], index }: PropsI) => {
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="m-2 border-2 border-gray-500 rounded flex flex-col w-[230px] bg-black"
        >
          <h3 className="p-2">{column.title}</h3>
          <Droppable droppableId={column.id}>
            {(provided, snapshot) => (
              <div
                className="p-2 min-h-[100px] transition-all duration-200"
                style={{
                  flexGrow: 1,
                  background: snapshot.isDraggingOver
                    ? "palevioletred"
                    : "black",
                }}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {tasks.map((task, index) => (
                  <TaskCom key={task.id} task={task} index={index} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default ColumnCom;
