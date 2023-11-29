document.addEventListener('DOMContentLoaded', function() {
    let artist = document.getElementById('rbcloud_np_a'),
        title = document.getElementById('rbcloud_np_t'),
        cover = document.getElementById('rbcloud_np_c'),
        url = 'https://c18.radioboss.fm/w/nowplayinginfo?u=591',
        cover_url = 'https://c18.radioboss.fm/w/artwork/591.jpg',
        type = Number('0');

    function updateInfo() {
        let req = new XMLHttpRequest();
        req.onload = function (e) {
            if ((req.status === 200) && (req.response !== null)) {
                artist.innerText = (type === 0) ? req.response.currenttrack_artist : req.response.nexttrack_artist;
                title.innerText = (type === 0) ? req.response.currenttrack_title : req.response.nexttrack_title;
                cover.src = cover_url + '?' + new Date().getTime();
            }
        };
        req.open('GET', url + '&_=' + new Date().getTime(), true);
        req.responseType = 'json';
        req.send();
        document_title = artist + title
    }

    updateInfo();
    setInterval(updateInfo, 5000);
});