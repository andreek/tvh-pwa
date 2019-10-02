import Header from '../src/components/header';
import { shallow } from 'enzyme';
import { h } from 'preact';

describe('Initial Test of the Header', () => {
	test('Header renders 1 nav item', () => {
		const context = shallow(<Header />);
		expect(context.find('h1').text()).toBe('TVHeadend App');
		expect(context.find('Link').length).toBe(1);
	});
});
