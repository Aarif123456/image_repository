import { App } from './components';
/* Import for languages */
import { IntlProvider } from 'react-intl';
import messagesEn from './translations/en.json';
/* Import website wide css */
import './index.css';

/* For getting back data */
const language = (navigator.languages && navigator.languages[0]) || navigator.language;
/* Since we only have English as a language */
const message = messagesEn;

const WrappedApp : FunctionComponent = () => (
    <StrictMode>
        <IntlProvider locale={language} messages={message}>
            <App/>
        </IntlProvider>
    </StrictMode>
);


// Renders the application
ReactDOM.render(<WrappedApp />, document.getElementById('root'));