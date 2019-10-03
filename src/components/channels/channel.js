import {  h } from 'preact';

const Channel = ({ channel }) => (
  <li>
    <a href={`/play/ticket/stream/channel/${channel.uuid}`}>
      <div>
        <img width="128" height="64" src={channel.icon} />
        {channel.name}
      </div>
    </a>
  </li>
);

export default Channel;
