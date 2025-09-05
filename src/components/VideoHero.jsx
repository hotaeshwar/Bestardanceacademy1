import React from 'react';

const VideoHero = () => {
  return (
    <div className="w-full overflow-hidden" style={{ marginTop: '96px', height: 'calc(100vh - 96px)' }}>
      {/* Vimeo Video Embed */}
      <iframe
        src="https://player.vimeo.com/video/938419168?badge=0&autopause=0&player_id=0&app_id=58479&controls=0&autoplay=1&muted=1&loop=1&background=1"
        className="w-full h-full"
        style={{
          width: '100%',
          height: '100%',
          border: 'none'
        }}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Be Star Entertainment Video"
      ></iframe>
    </div>
  );
};

export default VideoHero;