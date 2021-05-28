import { useState, ChangeEvent, MouseEvent, FunctionComponent } from 'react';
import { Table, TableBody, TableContainer, Paper, FormControlLabel, Switch } from '@material-ui/core';
import {
    createData,
    EmptyRow,
    GalleryTableHead,
    getComparator,
    stableSort,
    Order,
    GalleryTableToolbar,
    TableData,
    useGalleryTableStyle,
    useTablePagination
} from '../galleryTable';
import { GalleryTableRow } from '../galleryTableRow';
import { useIntl } from 'react-intl';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import { FetchComponentProps } from '../../common';
import { FileApiReturnData, FileData } from '../gallery';

export const GalleryTable: FunctionComponent<FetchComponentProps<FileApiReturnData>> = ({ data }) => {
    /******************* Hooks*******************/
    const classes: ClassNameMap = useGalleryTableStyle();
    const intl = useIntl();

    /******************* States *******************/
    const [order, setOrder] = useState<Order>('asc');
    /* By default sort by image name */
    const [orderBy, setOrderBy] = useState<keyof TableData>('fileName');
    const [selected, setSelected] = useState<number[]>([]);
    const [dense, setDense] = useState(false);

    /******************* Variables *******************/

    const rows: TableData[] =
        'error' in data
            ? []
            : data.map((fd: FileData) => {
                  return createData(fd.fileID, fd.fileName, fd.fileSize, fd.uploaded, fd.filePath, fd.mime, fd.accessID);
              });

    const handleRequestSort = (_event: MouseEvent<unknown>, property: keyof TableData) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.fileID);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (_event: MouseEvent<unknown>, id: number) => {
        /* NOTE: using a map over an array might increase performance */
        const selectedIndex = selected.indexOf(id);
        let newSelected: number[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
        }

        setSelected(newSelected);
    };

    const handleChangeDense = (event: ChangeEvent<HTMLInputElement>) => {
        setDense(event.target.checked);
    };

    const isSelected = (id: number) => selected.indexOf(id) !== -1;

    const { emptyRows, startIndex, endIndex, TablePagination } = useTablePagination(rows.length);

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <GalleryTableToolbar selected={selected} />
                <TableContainer>
                    <Table
                        className={classes.table}
                        aria-labelledby='tableTitle'
                        size={dense ? 'small' : 'medium'}
                        aria-label={intl.formatMessage({
                            id: 'Gallery.Table.title'
                        })}>
                        <GalleryTableHead
                            numSelected={selected.length}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            order={order}
                            orderBy={orderBy}
                            rowCount={rows.length}
                            intl={intl}
                        />
                        <TableBody>
                            {stableSort(rows, getComparator(order, orderBy))
                                .slice(startIndex, endIndex)
                                .map((row: TableData, index: number) => (
                                    <GalleryTableRow
                                        row={row}
                                        labelId={`gallery-${index}`}
                                        isItemSelected={isSelected(row.fileID)}
                                        handleClick={handleClick}
                                        key={row.fileID}
                                    />
                                ))}
                            {emptyRows > 0 && <EmptyRow emptyRows={emptyRows} dense={dense} />}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination />
            </Paper>
            <FormControlLabel
                control={<Switch checked={dense} onChange={handleChangeDense} />}
                label={intl.formatMessage({ id: 'Gallery.Table.paddingSwitch' })}
            />
        </div>
    );
};
