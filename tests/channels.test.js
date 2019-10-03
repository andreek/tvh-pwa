import Channels from '../src/components/channels';
import { shallow } from 'enzyme';
import { h } from 'preact';
    
const channels = [
  { value: 'ARD' }, { value: 'ZDF' }, { value: 'NDR' },
];

describe('Initial Test of the Channels', () => {
  test('Channels lists 3 channels', () => {
    const context = shallow(<Channels channels={channels} />);
    expect(context.find('ul').length).toBe(1);
    expect(context.find('Channel').length).toBe(3);
  });
});
