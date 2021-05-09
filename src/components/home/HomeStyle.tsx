import { makeStyles, createStyles, StyleRules } from '@material-ui/core/styles';
import backgroundImage from '../../resources/space.jpg';

export const useHomeStyles = makeStyles(
    (): StyleRules =>
        createStyles({
            mainGrid: {
                minHeight: '100vh'
            },
            mainButtons: {
                minWidth: '30%'
            },
            backgroundContainer: {
                backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100vw',
                height: '100vh'
            }
        })
);
