export interface Task {
  id?: number;
  title: string;
  endDate: string;
  status:string;
  priority: string;
  progress: string;
  description: string;
  select?: boolean;
  user: string
}

export interface TaskState {
  tasks: Task[];
}

export const initialState = {
  id: 0,
  title: "",
  endDate: new Date().toISOString().split("T")[0],
  status: "",
  priority: "",
  progress: "",
  description: "",
  select: false,
  user: ""
};
