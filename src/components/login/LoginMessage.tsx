import { FunctionComponent } from 'react';

export type LoginApiReturn = {
    loggedIn: boolean;
    message: string;
};

type Props = {
    message?: string;
};
export const LoginMessage: FunctionComponent<Props> = ({ message }) => {
    console.log(message);
    return <div> {message} </div>;
};
