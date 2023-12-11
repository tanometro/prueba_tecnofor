export interface ButtonProps {
    children: React.ReactNode;
}

export interface Todo {
    id: string,
    name: string,
    done: boolean,
}

export interface AddProps {
    placeholder: string,
  }

export interface TodoListInterface {
    todo: {
        id: string;
        name: string;
        done: boolean;
      }[];
      setTodo: React.Dispatch<React.SetStateAction<Todo[]>>
}

export interface ListPropsInterface {
    todo: Todo[],
}

export interface TableListProps {
    todo: Todo[];
    setTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
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
    allTodos: Todo[];
    finishedTodos: Todo[];
    deletedTodos: Todo[];
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