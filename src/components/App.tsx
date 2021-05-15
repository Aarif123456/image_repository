import { FunctionComponent } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { HomeView } from './home';
import { LoginView } from './login';
import { SignUpView } from './register';
import { GalleryView } from './gallery';
/* Import the pages of the website */
import { NotFound } from '../common';
/* Import to control the color scheme like dark mode */
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { pink, green } from '@material-ui/core/colors';

const darkTheme = createMuiTheme({
    palette: {
        primary: {
            main: pink[900]
        },
        secondary: {
            main: green[500]
        },
        type: 'dark'
    }
});

export const App: FunctionComponent = () => (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <HashRouter hashType='noslash'>
            <Switch>
                {/*
                <Route exact path='/forgotPassword'>
                    <ForgotPasswordView />
                </Route>
                */}
                <Route path='/gallery'>
                    <GalleryView />
                </Route>
                <Route exact path='/login'>
                    <LoginView />
                </Route>
                <Route exact path='/signup'>
                    <SignUpView />
                </Route>
                <Route exact path='/'>
                    <HomeView />
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </HashRouter>
    </ThemeProvider>
);
