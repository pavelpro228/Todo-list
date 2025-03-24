import { ITask } from "../models/TaskModel";

const date = new Date()

export const tasks: ITask[] = [
    {
        id: +date + 1,
        title: "Вивчити TypeScript"
    },
    {
        id: +date + 2,
        title: "Винести сміття"
    },
    {
        id: +date + 3,
        title: "Зробити прибирання"
    },
    {
        id: +date + 4,
        title: "Зробити Todo List"
    }
]