import { FunctionComponent } from 'react';
/* Handle error in program */
import { ErrorFallback } from '../../common/errorHandling';
import { Gallery } from './Gallery';

export const GalleryView: FunctionComponent = () => (
    <ErrorFallback>
        <Gallery />
    </ErrorFallback>
);
