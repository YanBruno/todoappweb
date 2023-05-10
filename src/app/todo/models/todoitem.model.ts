import { Description } from "./description.model";
import { Title } from "./title.model";

export interface TodoItem {
    id: string;
    done: boolean;
    createdAt: Date;
    title: Title;
    description: Description;
}