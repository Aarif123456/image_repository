import { FunctionComponent } from 'react';
import { TableRow, TableCell } from '@material-ui/core';

type Props = { emptyRows: number; dense: boolean };
export const EmptyRow: FunctionComponent<Props> = ({ emptyRows, dense }) => (
    <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
        <TableCell colSpan={6} />
    </TableRow>
);
