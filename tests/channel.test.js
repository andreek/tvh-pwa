import Channel from '../src/components/channels/channel';
import { shallow } from 'enzyme';
import { h } from 'preact';

const channel = { uuid: '1', name: 'Das Erste HD', icon: '/erstehd.png' };

describe('Initial Test of the Channel', () => {
  test('Display channel', () => {
    const context = shallow(<Channel channel={channel} />);
    expect(context.find('li').length).toBe(1);
    expect(context.find('li').text()).toBe('Das Erste HD');
    expect(context.find('img').prop("src")).toBe('/erstehd.png');
    expect(context.find('a').prop("href")).toBe('/play/ticket/stream/channel/1');
  });
});
