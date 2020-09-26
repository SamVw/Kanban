import { KanbanStatus } from "./KanbanStatus";

export interface Column {
    id: number,
    name: string,
    position: number,
    status: KanbanStatus
}