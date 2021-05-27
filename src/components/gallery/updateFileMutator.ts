import { mutate as swrMutate } from 'swr';

export const updateTable = (): void => void swrMutate('FileManagement/folderImages');
