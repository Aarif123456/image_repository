import { FunctionComponent, useState } from 'react';
export type ThumbProps = {
    index: number;
    imageFile: File;
    imageTitle: string;
};
export const Thumbs: FunctionComponent<ThumbProps> = ({ index, imageFile, imageTitle }) => {
    const [imageUrl, setImageUrl] = useState<string>('');
    const reader = new FileReader();
    reader.addEventListener(
        'load',
        () => {
            // convert image file to base64 string
            setImageUrl(reader.result as string);
        },
        false
    );
    reader.readAsDataURL(imageFile);
    return <img src={imageUrl} key={`image.${index}`} alt={imageTitle} height={200} width={200} />;
};
