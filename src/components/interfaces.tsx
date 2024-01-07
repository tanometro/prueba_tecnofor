export interface ButtonProps {
    children: React.ReactNode;
}

export interface TodoInterface {
    id: string,
    name: string,
    done: boolean,
}

export interface AddProps {
    placeholder: string,
  }

export interface TodoProps {
    task: TodoInterface,
    
}

export interface TodoListInterface {
    todo: {
        id: string;
        name: string;
        done: boolean;
      }[];
      setTodo: React.Dispatch<React.SetStateAction<TodoInterface[]>>
}

export interface ListPropsInterface {
    todo: TodoInterface[],
    setTodos: React.Dispatch<React.SetStateAction<TodoInterface[]>>;
}

export interface TableListProps {
    todo: TodoInterface[];
    setTodo: React.Dispatch<React.SetStateAction<TodoInterface[]>>;
  }

export interface TitleProps {
    title: string,
    img: string,
    alt: string
}

export interface SubProps {
    text: string,
}

export interface ItemProps {
    name: string,
}

export interface TodosState {
    allTodos: TodoInterface[];
    finishedTodos: TodoInterface[];
    deletedTodos: TodoInterface[];
  }

export interface ModalProps {
    taskId: string,
    closeModal: () => void;
}

export interface NoTodoProps {
    text: string,
}

export interface HideProps {
    view: boolean,
    setView: React.Dispatch<React.SetStateAction<boolean>>;
    title: string
}

export interface DragEndEvent {
    active: {
      id: string; 
    };
    over?: {
      id: string; 
    };
  }