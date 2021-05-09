import { FunctionComponent, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import { Thumbs } from './Thumbs';
import { FormattedMessage } from 'react-intl';

const dropzoneStyle = {
    width: '100%',
    height: 'auto',
    borderWidth: 2,
    borderColor: 'rgb(102, 102, 102)',
    borderStyle: 'dashed',
    borderRadius: 5
};

const activeStyle = {
    borderColor: '#2196f3'
};

const acceptStyle = {
    borderColor: '#00e676'
};

const rejectStyle = {
    borderColor: '#ff1744'
};

export type DropzoneProps = {
    onDropHandler: (acceptedFiles: File[]) => void;
    files?: File[];
};
export const Dropzone: FunctionComponent<DropzoneProps> = ({ onDropHandler, files }) => {
    const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
        accept: 'image/*',
        onDrop: onDropHandler
    });
    const style = useMemo(
        () => ({
            ...dropzoneStyle,
            ...(isDragActive ? activeStyle : {}),
            ...(isDragAccept ? acceptStyle : {}),
            ...(isDragReject ? rejectStyle : {})
        }),
        [isDragActive, isDragReject, isDragAccept]
    );

    return (
        <div {...getRootProps({ className: 'dropzone', style })}>
            <input {...getInputProps()} />
            <p>
                <FormattedMessage id='DragZone.dragPrompt' />
            </p>
            {isDragActive && (
                <p>
                    <FormattedMessage id='DragZone.acceptedPrompt' />
                </p>
            )}
            {isDragReject && (
                <p>
                    <FormattedMessage id='DragZone.rejectedPrompt' />
                </p>
            )}
            {(files ?? []).length === 0 && <p>Try dragging a file here!</p>}
            {(files ?? []).map((file: File, i: number) => (
                <Thumbs index={i} imageFile={file} imageTitle={`Title.${i}`} />
            ))}
            <em>
                <FormattedMessage id='DragZone.fileTypePrompt' />
            </em>
        </div>
    );
};
