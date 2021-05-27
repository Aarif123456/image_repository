import { useState, ChangeEvent, MouseEvent, FunctionComponent } from 'react';
import { Table, TableBody, TableCell, TableRow, TableContainer, TablePagination, Paper, FormControlLabel, Switch } from '@material-ui/core';
import { GalleryTableHead, getComparator, stableSort, Order, HeadCell, GalleryTableToolbar, useGalleryTableStyle } from '../galleryTable';
import { GalleryTableRow } from '../galleryTableRow';
import { useIntl } from 'react-intl';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import { DateTime } from 'luxon';
import { FetchComponentProps } from '../../common';
import { FileApiReturnData, FileData } from '../gallery';

/* TODO: figure out how to incorporate folders as well */
export interface TableData {
    fileID: number;
    fileName: string;
    fileSize: number;
    /* When the file was first uploaded */
    uploaded: DateTime;
    /* Folder */
    filePath: string;
    /* type of file*/
    mime: string;
    accessID: number;
}

function createData(
    fileID: number,
    fileName: string,
    fileSize: number,
    uploadedDtString: string,
    filePath: string,
    mime: string,
    accessID: number
): TableData {
    const uploaded = DateTime.fromSQL(uploadedDtString);
    return { fileID, fileName, fileSize, filePath, uploaded, mime, accessID };
}

const headCells: HeadCell<TableData>[] = [
    { id: 'fileName', numeric: false },
    { id: 'fileSize', numeric: true },
    { id: 'filePath', numeric: false },
    { id: 'uploaded', numeric: false }
];

export const GalleryTable: FunctionComponent<FetchComponentProps<FileApiReturnData>> = ({ data }) => {
    /******************* Hooks*******************/
    const classes: ClassNameMap = useGalleryTableStyle();
    const intl = useIntl();

    /******************* States *******************/
    const [order, setOrder] = useState<Order>('asc');
    /* By default sort by image name */
    const [orderBy, setOrderBy] = useState<keyof TableData>('fileName');
    const [selected, setSelected] = useState<number[]>([]);
    const [page, setPage] = useState(0);
    const [dense, setDense] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    /******************* Variables *******************/

    const rows: TableData[] =
        'error' in data
            ? []
            : data.map((fd: FileData) => {
                  return createData(fd.fileID, fd.fileName, fd.fileSize, fd.uploaded, fd.filePath, fd.mime, fd.accessID);
              });
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

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

    const handleChangePage = (_event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event: ChangeEvent<HTMLInputElement>) => {
        setDense(event.target.checked);
    };

    const isSelected = (id: number) => selected.indexOf(id) !== -1;

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
                            headCells={headCells}
                            intl={intl}
                        />
                        <TableBody>
                            {stableSort(rows, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row: TableData, index: number) => {
                                    const isItemSelected = isSelected(row.fileID);
                                    return (
                                        <GalleryTableRow
                                            row={row}
                                            labelId={`gallery-${index}`}
                                            isItemSelected={isItemSelected}
                                            handleClick={handleClick}
                                            key={row.fileID}
                                        />
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component='div'
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
            <FormControlLabel control={<Switch checked={dense} onChange={handleChangeDense} />} label='Dense padding' />
        </div>
    );
};
