import React from 'react';
import './style.css';  // Assurez-vous que le chemin est correct

const VideoList = ({ videos }) => {
return (
<ul>
{videos.map((video) => (
<li key={video.id.videoId}>
<h3>{video.snippet.title}</h3>
<p>{video.snippet.description}</p>
<img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
</li>
))}
</ul>
);
};
export default VideoList;