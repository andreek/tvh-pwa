import { h } from 'preact';
import Channel from './channel';

const Channels = ({ channels }) => {
  const list = channels.map(
    channel => <Channel channel={channel} />
  );
  return (
    <ul>
      {list}
    </ul>
  );
};

export default Channels;
