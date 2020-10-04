const panoImage = document.querySelector('.pano-image');
const gambar = 'img/sample-contour_360.png';

const panorama = new PANOLENS.ImagePanorama(gambar);
const viewer = new PANOLENS.Viewer({
    container: panoImage,
    autoRotate: true,
    autoRotateSpeed: 0.5
});

viewer.add(panorama);