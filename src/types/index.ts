export interface Task {
  id: string;
  content: string;
}

export interface Column {
  id: string;
  title: string;
  taskIds: string[];
}

export interface InitialData {
  tasks: Record<string, Task>;
  columns: Record<string, Column>;
  columnOrder: string[];
}
