import React, { FunctionComponent, StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { HomePage, LoginPage } from '../components/View';
import { HomePage } from '../components';
/* Import the pages of the website */
import { NotFound } from '../common/errorHandling';
/* Import to control the color scheme like dark mode */
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {purple, green} from '@material-ui/core/colors';

const darkTheme = createMuiTheme({
    palette: {
        primary: pink[100],
        secondary: green,
        type: 'dark'
    }
});

export const App: FunctionComponent = () => (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <BrowserRouter>
            <Switch>
                {/*<Route path='/gallery/:id'>
                    <GalleryPage/>
                </Route>
                <Route exact path='/signup'>
                    <SignUpPage />
                </Route>
                <Route exact path='/login'>
                    <LoginPage />
                </Route>*/}
                <Route exact path='/'>
                    <HomePage />
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </BrowserRouter>
    </ThemeProvider>
);

