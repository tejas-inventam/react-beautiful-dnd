import { Task } from "@/types";
import { Draggable } from "react-beautiful-dnd";

interface PropsI {
  task: Task;
  index: number;
}

const TaskCom = ({ task, index }: PropsI) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`border-2 border-gray-500 rounded p-2 mb-2 ${
            snapshot.isDragging ? "bg-green-400" : "bg-black"
          }`}
        >
          {task.content}
        </div>
      )}
    </Draggable>
  );
};

export default TaskCom;
