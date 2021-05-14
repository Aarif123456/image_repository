import { FunctionComponent } from 'react';
import { useGalleryButtonStyle, SubmitButton, ResetButton, useGallerySnackbar, GalleryExpectedFileInfo } from '../gallery';
import { Dropzone, useAjax, useAjaxComponent } from '../../common';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import { useFormik } from 'formik';

export type UploadInfo = {
    success: boolean;
    error?: string;
};
export type UploadReturnType = Record<string, UploadInfo>;

export type FormValues = {
    files: File[];
};

export const GalleryControlButton: FunctionComponent = () => {
    const classes: ClassNameMap = useGalleryButtonStyle();
    const { GalleryInformation, setOpen } = useGallerySnackbar();
    const { data, isLoading, error, ajax } = useAjax<UploadReturnType, FormData>('/fileManagement/upload.php');
    const { AjaxComponent } = useAjaxComponent<GalleryExpectedFileInfo>({
        SuccessComponent: GalleryInformation,
        data: data !== undefined ? Object.entries(data) : undefined,
        isLoading,
        error
    });

    console.error(error);
    console.log(data);
    const validateFiles = (values: FormValues): File[] => {
        /* Quick validation here so we don't waste time getting an error in the back-end*/
        /* We have to make sure file name are unique*/
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
            console.log('form data');
            console.log(formData);
            if (files.length > 0) {
                ajax(formData);
                formik.resetForm();
                setOpen(true);
                alert(
                    JSON.stringify(
                        {
                            files: values.files.map((file: File) => ({
                                fileName: file.name,
                                type: file.type,
                                size: `${file.size ?? 0} bytes`
                            }))
                        },
                        null,
                        4
                    )
                );
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
                        <ResetButton resetForm={formik.resetForm} />{' '}
                    </>
                )}
                <AjaxComponent />
            </form>
        </>
    );
};
