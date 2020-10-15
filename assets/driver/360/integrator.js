function open_detail(idx) {
    localStorage.setItem("researchIdx", idx);
    window.location.replace("./researchdetail.html")
}

var idx = localStorage.getItem("researchIdx");
try {
    document.getElementById("threesixty").innerHTML += `
        <div class="pano-image"></div>
        <div class="item-content">
            <h5 class="item-title mbr-fonts-style display-5">` + MAIN_DATA.researches[idx].src_360.title + `</h5>
        </div>
        <div class="mbr-section-btn item-footer mt-2"><a href="#"
                class="btn btn-primary item-btn display-7" onclick="open_detail(` + idx + `);">Kembali</a>
        </div>
    `;
    const panoImage = document.querySelector('.pano-image');
    const panorama = new PANOLENS.ImagePanorama(MAIN_DATA.researches[idx].src_360.file);
    const viewer = new PANOLENS.Viewer({
        container: panoImage,
        autoRotate: true,
        autoRotateSpeed: 0.5,
        controlButtons: ['fullscreen']
    });
    viewer.add(panorama);
} catch (e) {
    if (e instanceof TypeError) {
        document.body.innerHTML = '';
        alert("Mohon akses situs ini dari halaman utama.");
        document.body.innerHTML = '';
        window.location.replace('./index.html')
    }
}