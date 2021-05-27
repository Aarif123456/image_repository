import { useState, ChangeEvent, FunctionComponent } from 'react';
import { TablePagination as MaterialPagination } from '@material-ui/core';

type ReturnType = { emptyRows: number; startIndex: number; endIndex: number; TablePagination: FunctionComponent };
export const useTablePagination = (count: number): ReturnType => {
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [page, setPage] = useState(0);
    const handleChangePage = (_event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const TablePagination: FunctionComponent = () => (
        <MaterialPagination
            rowsPerPageOptions={[5, 10, 25]}
            component='div'
            count={count}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
    );
    return {
        emptyRows: rowsPerPage - Math.min(rowsPerPage, count - page * rowsPerPage),
        startIndex: page * rowsPerPage,
        endIndex: page * rowsPerPage + rowsPerPage,
        TablePagination
    };
};
