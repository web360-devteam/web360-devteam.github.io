function next_3d(idx, idx3D) {
    localStorage.clear();
    if (idx3D == MAIN_DATA.researches[idx].src_3d.length - 1) {
        localStorage.setItem("researchIdx", idx);
        localStorage.setItem("3dIdx", 0);
        window.location.replace("./3D.html")
    } else {
        localStorage.setItem("researchIdx", idx);
        localStorage.setItem("3dIdx", idx3D + 1);
        window.location.replace("./3D.html")
    }
}

function prev_3d(idx, idx3D) {
    localStorage.clear();
    if (idx3D == 0) {
        localStorage.setItem("researchIdx", idx);
        localStorage.setItem("3dIdx", MAIN_DATA.researches[idx].src_3d.length - 1);
        window.location.replace("./3D.html")
    } else {
        localStorage.setItem("researchIdx", idx);
        localStorage.setItem("3dIdx", idx3D - 1);
        window.location.replace("./3D.html")
    }
}

function open_detail(idx) {
    localStorage.clear();
    localStorage.setItem("researchIdx", idx);
    window.location.replace("./researchdetail.html");
}

var idx = localStorage.getItem("researchIdx");
var idx3D = localStorage.getItem("3dIdx");
try {
    document.getElementById("top-1").innerHTML += `
        <img class="w-100" src="` + MAIN_DATA.researches[idx].src_3d[idx3D].top_file + `" alt="" data-slide-to="0" data-target="#lb-scOmNF6UwN">
    `;
    document.getElementById("top-2").innerHTML += `
        <img class="d-block w-100" src="` + MAIN_DATA.researches[idx].src_3d[idx3D].top_file + `" alt="">
    `;
    document.getElementById("bottom").innerHTML += `
        <div class="mbr-section-btn item-footer mt-2">
            <a href="#" class="btn btn-primary item-btn display-7" onclick="prev_3d(` + idx + `, ` + idx3D + `);"><</a>
            <a href="#" class="btn btn-primary item-btn display-7" onclick="open_detail(` + idx + `);">Kembali</a>
            <a href="#" class="btn btn-primary item-btn display-7" onclick="next_3d(` + idx + `, ` + idx3D + `);">></a>
        </div>
    `;
    const panoImage = document.querySelector('.pano-image');
    const panorama = new PANOLENS.ImagePanorama(MAIN_DATA.researches[idx].src_3d[idx3D].bottom_file);
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