const dateText = document.getElementById('lol')
const paragraph = document.getElementById('lolMini')
const imager = document.getElementById('imageLol')
const fullImg = document.getElementById('fullScreen')
const aidsWrap = document.getElementById('drip')
let day = "" //big brain
let subtext = ""



function doEverything() {
    switch (new Date().getDay()) {
        case 0:
            day = "søndag, værste dag";
            subtext = ' <br> (fredag... altfor langt borte)'
            imager.src = 'memes/sondag.jpg'
            fullImg.src = 'memes/sondag.jpg'
            break;

        case 1:
            day = "Mandag, realitycheck";
            subtext = 'Dette kommer til å bli en fin uke, det var ihvertfall tanken  <br> (fredag om -3 dager)'
            imager.src = 'memes/mandag.jpg'
            fullImg.src = 'memes/mandag.jpg'
            break;

        case 2:
            day = "Tirsdag, burgerking only challenge";
            subtext = 'Crsipy chicken koster bare 30kr. pls support local stores.  <br> (fredag om 3 dager)'
            imager.src = 'memes/tirsdag.png'
            fullImg.src = 'memes/tirsdag.png'
            break;

        case 3:
            day = "Onsdag, lillelørdag";
            subtext = 'Eller alkoholiker unnskyldning  <br> (det føles kanskje ut som fredag når du er dritings men, det er egentlig om 2 dager)'
            imager.src = 'memes/onsdag.jpg'
            fullImg.src = 'memes/onsdag.jpg'
            break;

        case 4:
            day = "Torsdag, begining of the end";
            subtext = "we in the homestretch <br> (fredag i morgen oh shit)"
            imager.src = 'memes/torsdag.jpg'
            fullImg.src = 'memes/torsdag.jpg'
            break;

        case 5:
            day = "d e fredag";
            subtext = 'Du har ventet på fredag hele uken, men... du føler deg ikke like glad som du forventet... Hvorfor ikke??? Er fredag bare... ikke verdt en drit? wtf?  <br> (Rebecca black - Friday)'
            imager.src = 'memes/fredag.jpg'
            fullImg.src = 'memes/fredag.jpg'
            break;

        case 6:
            day = "Lørdag, full av glede";
            subtext = 'også full av tanker om at d snart e søndag"  <br> (fredag i går wtf hva gjorde du liksom)'
            imager.src = 'memes/lordag.jpg'
            fullImg.src = 'memes/lordag.jpg'
            break;
    }
    dateText.innerHTML = day
    paragraph.innerHTML = subtext
}

doEverything()


function showMeme() {
    aidsWrap.classList.remove('memeShow')
    aidsWrap.classList.add('visibleAids')
}
function hideMeme() {
    aidsWrap.classList.remove('visibleAids')
    aidsWrap.classList.add('memeShow')
}