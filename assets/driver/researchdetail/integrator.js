function open_360(idx) {
    localStorage.setItem("researchIdx", idx);
    window.location.replace("./360.html")
}

function open_3d(idx) {
    localStorage.setItem("researchIdx", idx);
    localStorage.setItem("3dIdx", 0);
    window.location.replace("./3D.html")
}

function open_nav(idx) {
    localStorage.setItem("researchIdx", idx);
    localStorage.setItem("navIdx", 0);
    window.location.replace("./nav.html")
}

var idx = localStorage.getItem("researchIdx");
try {
    document.getElementById("resdetail").innerHTML += `
        <h5 class="item-title mbr-fonts-style display-5"><strong>` + MAIN_DATA.researches[
            idx].big_title + `</strong></h5>
        <h6 class="item-subtitle mbr-fonts-style mt-1 display-7">
            <strong><em>Judul Penelitian</em> <em>:</em></strong><em>&nbsp;</em>` +
        MAIN_DATA.researches[idx].judul_penelitian + `<br>
            <strong><em>Tanggal Penelitian : </em></strong>` + MAIN_DATA.researches[idx]
        .tanggal_penelitian + `<br>
            <strong><em>Tempat Penelitian : </em></strong>` + MAIN_DATA.researches[idx]
        .tempat_penelitian + `<br><em>
            <strong>Peneliti :</strong>&nbsp;</em>` + MAIN_DATA.researches[idx].peneliti + `<br><br><em>
            <strong>Deskripsi&nbsp;</strong></em></h6>
        <p class="mbr-text mbr-fonts-style mt-3 display-7">` + MAIN_DATA.researches[idx]
        .deskripsi + `<br><br></p>
    `;
    document.getElementById("resbtn").innerHTML += `
        <a href="360.html" class="btn btn-primary item-btn display-7" onclick="open_360(` + idx + `);">360 View</a>
        <a href="3D.html" class="btn btn-primary item-btn display-7" onclick="open_3d(` + idx + `);">3D View</a>
        <a href="nav.html" class="btn btn-primary item-btn display-7" onclick="open_nav(` + idx + `);">Nav View</a>
        <a href="`+MAIN_DATA.researches[idx].doc+`" class="btn btn-primary item-btn display-7" target="_blank">Research Doc</a>
        <a href="./researches.html" class="btn btn-primary item-btn display-7">Kembali</a>
    `;
    document.getElementById("news").innerHTML += `
        <h3 class="mbr-section-title align-center mb-3 mbr-fonts-style display-5">
            <strong>Berita Terkait ` + MAIN_DATA.researches[idx].big_title + `</strong></h3>
        <div>
            <script async src="https://cse.google.com/cse.js?cx=67b1a2a7ebe88296e"></script>
            <div class="gcse-search" value="Desa Pandanwangi"></div>
            <div class="mbr-social-likes align-center" data-counters="false">
            </div>
        </div>
    `
} catch (e) {
    if (e instanceof TypeError) {
        document.body.innerHTML = '';
        alert("Mohon akses situs ini dari halaman utama.");
        document.body.innerHTML = '';
        window.location.replace('./index.html')
    }
}