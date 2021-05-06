import { FunctionComponent } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MaterialLink, LinkProps as MaterialLinkProps } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

export type LinkProps = {
    to: string;
    labelTranslatorId: string;
    linkProps?: MaterialLinkProps;
};
export const Link: FunctionComponent<LinkProps> = ({ to, labelTranslatorId, linkProps }) => (
    <>
        {to && (
            <MaterialLink {...linkProps} component={RouterLink} to={to}>
                <FormattedMessage id={labelTranslatorId} />
            </MaterialLink>
        )}
    </>
);
