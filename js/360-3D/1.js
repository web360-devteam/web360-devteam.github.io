const panoImage = document.querySelector('.pano-image');
const gambar = 'img/sample-pinpoint_360/1a.png';

const panorama = new PANOLENS.ImagePanorama(gambar);
const viewer = new PANOLENS.Viewer({
    container: panoImage,
    autoRotate: true,
    autoRotateSpeed: 0.5
});

viewer.add(panorama);