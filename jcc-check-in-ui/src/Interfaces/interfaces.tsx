export interface IDataRow {
    Number: string;
    surname?: string;
    name?: string;
    second_member?: string;
    number_of_kids?: number;
    address?: string;
    border_crossing?: string;
    city?: string;
    year_of_birth?: string;
    last_visit?: string;
    visited_in_last_week?: string;
    comments?: string;
    deny?: string;
    previous_visits?: string[];
    isSelected?: boolean;
}
export enum COLUMN_FIELD {
    Number='Number',
    surname= 'surname',
    name= 'name',
    second_member= 'second_member',
    number_of_kids= 'number_of_kids',
    address= 'address',
    city='city',
    border_crossing= 'border_crossing',
    year_of_birth='year_of_birth',
    last_visit= 'last_visit',
    visited_in_last_week= 'visited_in_last_week',
    comments= 'comments',
    deny='deny',
}

export enum COLUMN_NAMES {
    Number= 'Number',
    surname= 'Family Surname',
    name= 'Name',
    second_member='Second Member',
    number_of_kids='Number of Kids',
    address= 'Address',
    border_crossing= 'Border Crossing',
    city='City',
    year_of_birth='Year of Birth',
    last_visit= 'Last Visit',
    visited_in_last_week= 'Visited in Last Week',
    comments= 'Comments',
    deny='Deny',
    previous_visits='Previous Visits'
}
export enum COLUMN_INDEX {
    Number= 8,
    surname= 9,
    name= 10,
    second_member=11,
    number_of_kids= 12,
    address= 14,
    city=17,
    year_of_birth=15,
    border_crossing= 19,
    last_visit= 20,
    visited_in_last_week= 21,
    comments= 22,
    previous_visits=23,
    deny=24
}
export const COLUMN_ORDER: Record<number, COLUMN_NAMES> = {
    1: COLUMN_NAMES.Number,
    2: COLUMN_NAMES.surname,
    3: COLUMN_NAMES.name,
    4: COLUMN_NAMES.second_member,
    5: COLUMN_NAMES.number_of_kids,
    6: COLUMN_NAMES.address,
    7: COLUMN_NAMES.city,
    8: COLUMN_NAMES.year_of_birth,
    9: COLUMN_NAMES.border_crossing,
    10: COLUMN_NAMES.last_visit,
    11: COLUMN_NAMES.visited_in_last_week,
    12: COLUMN_NAMES.comments,
    13: COLUMN_NAMES.previous_visits,
    14: COLUMN_NAMES.deny,
}