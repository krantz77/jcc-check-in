export interface IRow {
    id: number;
    householdMembers?: IClient[];
    lastVisit: string;
    visitedInLastWeek: string;
    address?: string;
    hometown?: string;
}

export interface IClient {
    firstName?: string;
    lastName?: string;
    age?: number;
    gender?: string;
}