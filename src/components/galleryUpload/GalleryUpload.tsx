import { FunctionComponent } from 'react';
import { useGalleryButtonStyle, SubmitButton, ResetButton } from '.';
import { Dropzone, useAjax, useAjaxComponent } from '../../common';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import { useFormik } from 'formik';
import { updateTable, useGallerySnackbar, GalleryExpectedFileInfo, OperationInfo } from '../gallery';

export type UploadReturnType = Record<string, OperationInfo>;

export type FormValues = {
    files: File[];
};

export const GalleryControlButton: FunctionComponent = () => {
    const classes: ClassNameMap = useGalleryButtonStyle();
    const { GallerySnackbar, setOpen } = useGallerySnackbar();
    const { data, isLoading, error, ajax } = useAjax<UploadReturnType, FormData>('/FileManagement/upload');
    const { AjaxComponent } = useAjaxComponent<GalleryExpectedFileInfo>({
        SuccessComponent: GallerySnackbar,
        data: data !== undefined ? Object.entries(data) : undefined,
        isLoading,
        error
    });

    const validateFiles = (values: FormValues): File[] => {
        /* Quick validation here so we don't waste time getting an error in the back-end
         * We have to make sure file name are unique
         */
        const files: File[] = [];
        const map = new Map<string, boolean>();
        for (const file of values.files) {
            if (!map.has(file.name)) {
                map.set(file.name, true); // set any value to Map
                files.push(file);
            }
        }
        return files;
    };

    const formik = useFormik({
        initialValues: {
            files: []
        },
        onSubmit: (values: FormValues) => {
            if (values.files === undefined) return;
            const files = validateFiles(values);
            const formData = new FormData();
            for (let key = 0; key < files.length; key++) {
                formData.append('images[]', files[key]);
            }
            if (files.length > 0) {
                ajax(formData);
                formik.resetForm();
                setOpen(true);
                updateTable();
            }
        }
    });

    const onDropHandler = (acceptedFiles: File[]) => {
        // do nothing if no files
        if (acceptedFiles.length === 0) {
            return;
        }
        const formikValues = formik.values.files as File[];
        // on drop we add to the existing files
        void formik.setFieldValue('files', formikValues === undefined ? acceptedFiles : (acceptedFiles ?? []).concat(formikValues));
    };
    return (
        <>
            <form className={classes.form} onSubmit={formik.handleSubmit} noValidate>
                {!isLoading && (
                    <>
                        <Dropzone onDropHandler={onDropHandler} files={formik.values.files ?? []} />
                        <SubmitButton />
                        <ResetButton resetForm={formik.resetForm} />
                    </>
                )}
                <AjaxComponent />
            </form>
        </>
    );
};
