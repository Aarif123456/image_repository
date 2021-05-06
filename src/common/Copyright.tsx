import { FunctionComponent } from 'react';
import { Box, Typography } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import { Link } from './internationalizedComponents';

export const Copyright: FunctionComponent = () => {
    return (
        <Typography variant='body2' color='textSecondary' align='center'>
            <FormattedMessage id='Footer.copyright' /> <Link to='/' labelTranslatorId='Website.name' linkProps={{ color: 'inherit' }} />
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
};

export const CopyrightBox: FunctionComponent = () => {
    return (
        <Box mt={5}>
            <Copyright />
        </Box>
    );
};
