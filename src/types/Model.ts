export interface Task {
    id: number;
    rowId: string;
    title: string;
    star: boolean;
    description: string;
    image?: string;
}

export interface DataState {
    tasks: Task[];
    rows: string[];
    loading: boolean;
    error: string | null;
}


