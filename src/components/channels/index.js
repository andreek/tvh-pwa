import { Component, h } from 'preact';
import Channel from './channel';

export default class Channels extends Component {
  render() {
    const { channels } = this.props;
    const list = channels.map(
      channel => <Channel channel={channel} />
    );
    return (
      <ul class="channels">
        {list}
      </ul>
    );
  }
}
