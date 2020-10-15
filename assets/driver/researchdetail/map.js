const koor = [MAIN_DATA.researches[idx].coord_map[0], MAIN_DATA.researches[idx].coord_map[1]];
var mymap = L.map('mapid').setView(koor, 13);
const attribution =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, {
    attribution
});
tiles.addTo(mymap);
const koor_marker = [MAIN_DATA.researches[idx].coord_marker[0], MAIN_DATA.researches[idx].coord_marker[1]];
const marker = L.marker(koor_marker).addTo(mymap).bindPopup(MAIN_DATA.researches[idx].big_title);