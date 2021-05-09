import { FunctionComponent } from 'react';
import { useGalleryButtonStyle } from '../gallery';
import { Dropzone } from '../../common';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import { useFormik } from 'formik';

export const GalleryControlButton: FunctionComponent = () => {
    const classes: ClassNameMap = useGalleryButtonStyle();

    const formik = useFormik({
        initialValues: {
            files: []
        },
        onSubmit: (values) => {
            if (values.files === undefined) return;
            // ajax(values as FormValues);
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
                <Dropzone onDropHandler={onDropHandler} files={formik.values.files ?? []} />
            </form>
        </>
    );
};
