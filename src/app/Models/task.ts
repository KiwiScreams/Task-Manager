export type Status = "ToDo" | "In Progress" | "Done";
export type Complexity = "Easy" | "Medium" | "Hard";
export type Type = "Task" | "Bug" | "Test" | "Spike";
export class TaskItem
{
    constructor(
        public name: string,
        public abbr: string,
        public desc: string,
        public status: Status,
        public complexity: Complexity, 
        public type: Type
    ){}
}