export interface IRow {
    id: number;
    householdMembers?: IClient[];
    lastVisit: string;
    visitedInLastWeek: string;
    address?: string;
    hometown?: string;
    isSelected?: boolean
}

export interface IClient {
    firstName?: string;
    lastName?: string;
    age?: number;
    gender?: string;
}

export interface IDataRow {
    UID: string;
    family_surname?: string;
    family_member_two?: string;
    family_member_three?: string;
    number_of_kids?: number;
    address_street?: string;
    border_crossing?: string;
    crossing_city?: string;
    last_visit?: string;
    visited_in_last_week?: string;
    comments?: string;
    deny?: string;
    previous_visits?: string[];
    isSelected?: boolean;
}
export enum COLUMN_FIELD {
    UID='UID',
    family_surname= 'family_surname',
    number_of_kids= 'number_of_kids',
    family_member_two= 'family_member_two',
    family_member_three= 'family_member_three',
    address_street= 'address_street',
    crossing_city='crossing_city',
    border_crossing= 'border_crossing',
    last_visit= 'last_visit',
    visited_in_last_week= 'visited_in_last_week',
    comments= 'comments',
    deny='deny',
}

export enum COLUMN_NAMES {
    UID= 'UID',
    family_surname= 'Family Surname',
    number_of_kids='Number of Kids/Кількість дітей',
    family_member_two='Family Member Two',
    family_member_three='Family Member Three',
    address_street= 'Address - Street/ Вулиця',
    border_crossing= 'Border Crossing Date/ Дата перетину кордону',
    crossing_city='City where came from/ Місто походження',
    last_visit= 'Last Visit',
    visited_in_last_week= 'Visited in Last Week',
    comments= 'Comments',
    deny='Deny',
    previous_visits='Previous Visits'
}
export enum COLUMN_INDEX {
    UID= 0,
    family_surname= 1,
    number_of_kids= 3,
    family_member_two=2,
    family_member_three=4,
    address_street= 6,
    crossing_city=9,
    border_crossing= 10,
    last_visit= 11,
    visited_in_last_week= 12,
    comments= 13,
    deny=14,
    previous_visits=15
}
export const COLUMN_ORDER: Record<number, COLUMN_NAMES> = {
    1: COLUMN_NAMES.UID,
    2: COLUMN_NAMES.family_surname,
    4: COLUMN_NAMES.number_of_kids,
    7: COLUMN_NAMES.address_street,
    10: COLUMN_NAMES.crossing_city,
    11: COLUMN_NAMES.border_crossing,
    12: COLUMN_NAMES.last_visit,
    13: COLUMN_NAMES.visited_in_last_week,
    14: COLUMN_NAMES.comments,
    15: COLUMN_NAMES.deny,
    16: COLUMN_NAMES.previous_visits,
    17: COLUMN_NAMES.family_member_two,
    18: COLUMN_NAMES.family_member_three
}