import React from 'react';

const Stream = ({ streamData: { viewers, preview, channel } }) => {
  return (
    <div className="col m4">
      <div className="card hoverable">
        <div className="card-image">
          <img src={preview.medium} alt="Stream Preview"/>
          <span className="card-title">{channel.display_name}</span>
        </div>
        <div className="card-content">
          <p className="truncate">{channel.status}</p>
          <p className="truncate">{viewers} viewers</p>
        </div>
      </div>
    </div>
  );
};

export default Stream;
