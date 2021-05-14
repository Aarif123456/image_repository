import { ChangeEvent, FunctionComponent, MouseEvent } from 'react';
import { Order, TableData, useTableHeadStyle } from '.';
import { Checkbox, TableCell, TableHead, TableRow, TableSortLabel } from '@material-ui/core';
import { IntlShape } from 'react-intl';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
export interface HeadCell<T> {
    numeric: boolean;
    id: keyof T;
}

type OnRequestSortParameter<T> = (event: MouseEvent<HTMLButtonElement>, property: keyof T) => void;
type OnSelectAllClickParameter = (event: ChangeEvent<HTMLInputElement>) => void;

export interface GalleryTableProps<T> {
    numSelected: number;
    onRequestSort: OnRequestSortParameter<T>;
    onSelectAllClick: OnSelectAllClickParameter;
    order: Order;
    orderBy: string;
    rowCount: number;
    intl: IntlShape;
    headCells: HeadCell<T>[];
}

function createSortHandler<T>(property: keyof T, onRequestSort: OnRequestSortParameter<T>) {
    return (event: MouseEvent<HTMLButtonElement>): void => {
        onRequestSort(event, property);
    };
}
/* Handle toggling of sort button */
export const GalleryTableHead: FunctionComponent<GalleryTableProps<TableData>> = ({
    numSelected,
    onRequestSort,
    onSelectAllClick,
    order,
    orderBy,
    rowCount,
    headCells,
    intl
}) => {
    const classes: ClassNameMap = useTableHeadStyle();
    return (
        <TableHead>
            <TableRow>
                <TableCell padding='checkbox'>
                    <Checkbox
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{ 'aria-label': intl.formatMessage({ id: 'Gallery.Table.checkboxLabel' }) }}
                    />
                </TableCell>
                {headCells.map((headCell: HeadCell<TableData>) => (
                    <TableCell key={headCell.id} align='left' padding='none' sortDirection={orderBy === headCell.id ? order : false}>
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler<TableData>(headCell.id, onRequestSort)}>
                            {intl.formatMessage({ id: `Gallery.Table.${headCell.id}` })}
                            {orderBy === headCell.id ? (
                                <span className={classes.visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};
