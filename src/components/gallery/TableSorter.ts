/* From https://github.com/mui-org/material-ui/blob/master/docs/src/pages/components/tables/EnhancedTable.tsx */
import { TableData } from './GalleryTable';

export type Order = 'asc' | 'desc';
/* Function to handle comparison   */
function descendingComparator<T>(a: T, b: T, orderBy: keyof T): number {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

/* Function used to compare the elements to sort them  */
export function getComparator<Key extends keyof TableData>(
    order: Order,
    orderBy: Key
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
    return order === 'desc'
        ? (a, b): number => descendingComparator(a, b, orderBy)
        : (a, b): number => -descendingComparator(a, b, orderBy);
}

export function stableSort<T>(array: T[], comparator: (a: T, b: T) => number): T[] {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}
