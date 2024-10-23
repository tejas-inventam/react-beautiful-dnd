"use client";
import ColumnCom from "@/components/column";
import initialData from "@/utils/initial-data";
import { useState } from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

const Home = () => {
  const [data, setData] = useState(initialData);

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId, type } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = data.columns[source.droppableId];
    const end = data.columns[destination.droppableId];

    if (type === "column") {
      console.log(destination, source, draggableId);
      const newOrder = [...data.columnOrder];
      newOrder.splice(source.index, 1);
      newOrder.splice(destination.index, 0, draggableId);

      setData({
        ...data,
        columnOrder: newOrder,
      });
      return;
    }

    if (start === end) {
      const column = data.columns[source.droppableId];
      const taskIds = [...column.taskIds];
      taskIds.splice(source.index, 1);
      taskIds.splice(destination.index, 0, draggableId);
      const newColumn = {
        ...column,
        taskIds,
      };
      setData({
        ...data,
        columns: {
          ...data.columns,
          [column.id]: newColumn,
        },
      });
      return;
    }

    const startTaskIds = [...start.taskIds];
    const endTaskIds = [...end.taskIds];

    startTaskIds.splice(source.index, 1);
    endTaskIds.splice(destination.index, 0, draggableId);

    const newStartColumn = {
      ...start,
      taskIds: startTaskIds,
    };

    const endTaskColumn = {
      ...end,
      taskIds: endTaskIds,
    };

    setData({
      ...data,
      columns: {
        ...data.columns,
        [start.id]: newStartColumn,
        [end.id]: endTaskColumn,
      },
    });

    console.log("new data", data);

    console.log(destination, source, draggableId);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="all-column" type="column" direction="horizontal">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{
              display: "flex",
              backgroundColor: snapshot.isDraggingOver ? "#639ee2" : "inherit",
              minHeight: "100px",
            }}
          >
            {data.columnOrder.map((columnId, index) => {
              const column = data.columns[columnId];

              const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

              return (
                <ColumnCom
                  key={column.id}
                  column={column}
                  tasks={tasks}
                  index={index}
                />
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Home;
