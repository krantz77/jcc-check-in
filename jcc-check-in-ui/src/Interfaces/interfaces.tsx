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
    number_of_kids?: number;
    address_street?: string;
    address_postcode?: string;
    address_city?: string;
    border_crossing?: string;
    crossing_city?: string;
    last_visit?: string;
    visited_in_last_week?: string;
    comments?: string;
    isSelected?: boolean;
}
export enum COLUMN_FIELD {
    UID='UID',
    family_surname= 'family_surname',
    number_of_kids= 'number_of_kids',
    address_street= 'address_street',
    address_postcode= 'address_postcode',
    address_city= 'address_city',
    crossing_city='crossing_city',
    border_crossing= 'border_crossing',
    last_visit= 'last_visit',
    visited_in_last_week= 'visited_in_last_week',
    comments= 'comments'
}

export enum COLUMN_NAMES {
    UID= 'UID',
    family_surname= 'Family Surname/Прізвище',
    number_of_kids='Number of Kids/Кількість дітей',
    address_street= 'Address - Street/ Вулиця',
    address_postcode= 'Address - Postcode/ Поштовий код',
    address_city= 'Address - City/ Місто',
    border_crossing= 'Border Crossing Date/ Дата перетину кордону',
    crossing_city='City where came from/ Місто походження',
    last_visit= 'Last Visit',
    visited_in_last_week= 'Visited in Last Week',
    comments= 'Comments'
}
export enum COLUMN_INDEX {
    UID= 0,
    family_surname= 1,
    number_of_kids= 3,
    address_street= 6,
    address_postcode= 7,
    address_city= 8,
    crossing_city=9,
    border_crossing= 10,
    last_visit= 11,
    visited_in_last_week= 12,
    comments= 13
}
export const COLUMN_ORDER: Record<number, COLUMN_NAMES> = {
    1: COLUMN_NAMES.UID,
    2: COLUMN_NAMES.family_surname,
    4: COLUMN_NAMES.number_of_kids,
    7: COLUMN_NAMES.address_street,
    8: COLUMN_NAMES.address_postcode,
    9: COLUMN_NAMES.address_city,
    10: COLUMN_NAMES.crossing_city,
    11: COLUMN_NAMES.border_crossing,
    12: COLUMN_NAMES.last_visit,
    13: COLUMN_NAMES.visited_in_last_week,
    14: COLUMN_NAMES.comments,
}