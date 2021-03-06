import { FunctionComponent } from 'react';

export type LoginApiReturn = {
    error: boolean;
    message: string;
};

type Props = {
    message?: string;
};
export const LoginMessage: FunctionComponent<Props> = ({ message }) => {
    return <div> {message} </div>;
};
