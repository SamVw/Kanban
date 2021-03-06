import { KanbanStatus } from "./KanbanStatus";
import { User } from "./User";

export interface Ticket {
    id: number,
    description: string,
    estimate: number,
    status: KanbanStatus,
    assignee: User | null,
    creator: User
}