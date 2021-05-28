import { ChangeEvent, MouseEvent } from 'react';
import { Order } from '.';
import { IntlShape } from 'react-intl';

export type OnRequestSortParameter<T> = (event: MouseEvent<HTMLButtonElement>, property: keyof T) => void;
export type OnSelectAllClickParameter = (event: ChangeEvent<HTMLInputElement>) => void;

export interface GalleryTableProps<T> {
    numSelected: number;
    onRequestSort: OnRequestSortParameter<T>;
    onSelectAllClick: OnSelectAllClickParameter;
    order: Order;
    orderBy: string;
    rowCount: number;
    intl: IntlShape;
}

export interface HeadCell<T> {
    numeric: boolean;
    id: keyof T;
}
