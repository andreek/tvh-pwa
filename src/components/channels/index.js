import { Component, h } from 'preact';
import { Link } from 'preact-router/match';

export default class Channels extends Component {
  render() {
    const { channels } = this.props;
    const list = channels.map(
      channel => <div class="channel">{channel.value}</div>
    );
    return (
      <div class="channels">
        {list}
      </div>
    );
  }
}
