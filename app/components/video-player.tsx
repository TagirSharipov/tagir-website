import React from 'react';

const VideoPlayer = ({ src }: { src: string }) => {
  return (
    <video width="640" height="360" controls>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;