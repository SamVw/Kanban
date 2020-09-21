import { KanbanStatus } from "./KanbanStatus";

export interface Column {
    id: number,
    name: string,
    order: number,
    status: KanbanStatus
}