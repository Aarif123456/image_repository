import React, { FunctionComponent } from 'react';
import useSWR from 'swr';
import { useIntl } from 'react-intl';
import { RetrieveErrorBox, ProgressCircle, processData } from '../dataRetrieval';
import { ErrorType, SuccessType, RawData, FetchComponentProp } from '../types';
interface Props {
    Component: FunctionComponent<FetchComponentProp>;
    endpoint: string;
    id: string;
}

export const DataComponent: FunctionComponent<Props> = ({ Component, endpoint, id }) => {
    const options = {
        headers: {
            Accept: 'application/json'
        }
    };
    const API = "https://arif115.myweb.cs.uwindsor.ca/imagerepository/api";
    const fetcher = (url: string): Promise<SuccessType | ErrorType> => fetch(url, options).then((res: Response) => res.json());
    const { error, data } = useSWR(`${API}/${endpoint}/${id}`, fetcher);
    const intl = useIntl();
    if (error || (data !== undefined && 'message' in data)) {
        const errMsg = error ? error.message : (data as ErrorType).message;
        return <RetrieveErrorBox errMsg={errMsg} />;
    } else if (!data) {
        return <ProgressCircle />;
    } else {
        if (!('result' in data)) {
            return <RetrieveErrorBox errMsg={intl.formatMessage({ id: 'Error.UNEXPECTED_DATA_FORMAT' })} />;
        }
        try {
            const receivedData: RawData = JSON.parse(data.result);
            const processedData = processData(endpoint, receivedData);
            return <Component processedData={processedData} />;
        } catch (error) {
            return <RetrieveErrorBox errMsg={`Processing Error: ${error.message}`} />;
        }
    }
};
