import { InitialData } from "@/types";

const initialData: InitialData = {
  tasks: {
    "task-1": { id: "task-1", content: "I Am Task 1" },
    "task-2": { id: "task-2", content: "I Am Task 2" },
    "task-3": { id: "task-3", content: "I Am Task 3" },
    "task-4": { id: "task-4", content: "I Am Task 4" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To Do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
    "column-2": {
      id: "column-2",
      title: "In Progress",
      taskIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "Completed",
      taskIds: [],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};

export default initialData;
