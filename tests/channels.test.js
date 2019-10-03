import Channels from '../src/components/channels';
import { shallow } from 'enzyme';
import { h } from 'preact';
    
const channels = [
  { uuid: '1', name: 'Das Erste HD', icon: '/erstehd.png' },
  { uuid: '2', name: 'ZDF HD', icon: '/erstehd.png' },
  { uuid: '3', name: 'NDR HD', icon: '/erstehd.png' },
];

describe('Initial Test of the Channels', () => {
  test('Channels lists 3 channels', () => {
    const context = shallow(<Channels channels={channels} />);
    expect(context.find('ul').length).toBe(1);
    expect(context.find('Channel').length).toBe(3);
  });
});
