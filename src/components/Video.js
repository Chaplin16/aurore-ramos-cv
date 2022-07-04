import { useEffect,useState } from 'react';

//function pour faire apparaitre a interval de 7s la deuxieme video puis inversement 7s plus tard
export default function Video() {
    const [source, setSource] = useState('aurore-creation-web-video-connection.mp4');

    useEffect(() => {
        const video = document.getElementById('video');
        setInterval(() => {
            if (source === 'aurore-creation-web-video-connection.mp4')
                setSource('aurore-creation-web-video-cube.mp4');
            else
                setSource('aurore-creation-web-video-connection.mp4')
            video.load();
        }, 6950);
    });

    return (
        <video autoPlay muted id="video">
            <source src={`/video/${source}`} type="video/mp4"></source>
        </video>
    )
}