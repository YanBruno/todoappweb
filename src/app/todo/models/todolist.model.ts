import { Description } from "./description.model";
import { Title } from "./title.model";
import { TodoItem } from "./todoitem.model"

export interface TodoList {
    id: string;
    title: Title;
    description: Description;
    todos: TodoItem[];
    createdAt: Date;
}
