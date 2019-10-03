import Channel from '../src/components/channels/channel';
import { shallow } from 'enzyme';
import { h } from 'preact';

const channel = { value: 'ARD' };

describe('Initial Test of the Channel', () => {
  test('Display channel', () => {
    const context = shallow(<Channel channel={channel} />);
    expect(context.find('li').length).toBe(1);
    expect(context.find('li').text()).toBe('ARD');
  });
});
