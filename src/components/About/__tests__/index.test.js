import React from 'react';

// Next, we'll retrieve some functions from the React Testing Library.
import { render, cleanup } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import About from '..';

afterEach(cleanup);

describe('About component', () => {
	// First Test
	it('renders', () => {
		render(<About />);
	});

	// Second Test
	it('matches snapshot DOM node structure', () => {
		// render About
		const { asFragment } = render(<About />);
		expect(asFragment()).toMatchSnapshot();
	});
});
