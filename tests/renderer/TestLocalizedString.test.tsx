/* eslint-disable @typescript-eslint/no-unsafe-call */
import { TestLocalizedResponse as Renderer} from '..';
import { Home } from '../../src/components';
import { screen } from '@testing-library/react';

describe('testRenderHomePage', () => {
    test('Expect the home page to show up', () => {
        const renderer = new Renderer();
        renderer.render(Home);
        renderer.debug();
        expect(screen.getByRole('button', {
          name: /sign in/i 
        })).not.toBeNull();
        expect(screen.getByRole('button', {
          name: /sign up/i
        })).not.toBeNull();
       });
});