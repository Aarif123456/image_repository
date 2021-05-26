import { FunctionComponent } from 'react';
import { IntlProvider, IntlShape, createIntl, createIntlCache } from 'react-intl';
import { MatcherFunction, render as rtlRender, RenderResult, screen } from '@testing-library/react';
import messagesEn from '../src/translations/en.json';

/* React testing summary - since it will be used a lot */
/*We can use any of the following methods of getting
    https://testing-library.com/docs/queries/about/#priority
    Queries Accessible to Everyone 
        1. getByRole
        2. getByLabelText
        3. getByPlaceholderText
        4. getByText - most useful outside form 
        5. getByDisplayValue
    Semantic Queries - HTML5 and ARIA compliant selectors.
        6. getByAltText
        7. getByTitle
    Test IDs (Not recommended)
        8. getByTestId
*/

/* Query types
    Single Element
        1. getBy - get or throw error
        2. queryBy - get and don't throw error on not finding
        3. findBy - return promise object to do the searching
    Multiple Elements
        4. getAllBy - get but multiple elements
        5. queryAllBy - query but multiple elements
        6. findAllBy - find but multiple elements
*/
export class TestLocalizedResponse {
    /* {} are used to render variables - either of them being used is most likely a mistake
    *  breakingLine is used to represent line breaks
    *  <b>, <p>, <em> are all html characters and /> is an an open html tag. None of 
    * these characters should show up in the text
    */
    readonly specialCharacterMatcher: Array<string> = ['{', '}', 'breakingLine' , '/>', '<b>', '<p>', '</p>', '<em>'];
    /* Given to some components that need the intl object.*/
    intl: IntlShape;
    public constructor(readonly locale='en', readonly messages=messagesEn) {
        this.intl = createIntl(
                {
                    locale: locale,
                    messages: messages
                },
                createIntlCache()
            );
        this.messages = messages;
        this.locale = locale;
    }


    public render(LocalizedComponent: FunctionComponent): RenderResult
    {
        return rtlRender(
            <IntlProvider locale={this.locale} messages={this.messages}>
                <div><LocalizedComponent/></div>
            </IntlProvider>
        );
    }

    public debug(): void{
        screen.debug();
        screen.logTestingPlaygroundURL();
    }

    /* query example: screen.getByText('test')*/
    public debugWithScreenQuery(query?: (Element | HTMLDocument | undefined)): void{
        screen.debug(query);
        screen.logTestingPlaygroundURL(query);
    }

    /* Check if node contains needle */
    private static getTextFromElement(_: string, node: Element | null, needle: string): boolean
        {
            if(node !== null && node.textContent != null ){
                 return node.textContent.includes(needle);
            }
           return false;
        };

    /* A convenient function that searches for a text rather then an exact match*/
    public static createMatcherFunction(needle: string): MatcherFunction {
        return (_: string, node: Element | null) => TestLocalizedResponse.getTextFromElement(_, node, needle);
    }

}
    
