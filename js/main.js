new Cocoen(document.querySelector('.cocoen'));

var altusVersion;

fetch('https://raw.githubusercontent.com/ShadyThGod/altus/master/src/package.json')
    .then((resp) => resp.json())
    .then((data) => {
        altusVersion = data.version;
        document.querySelectorAll('.version').forEach(function(e) {
            e.innerHTML = 'v' + altusVersion;
        });

        document.querySelector('#windows-download').addEventListener('click', function(e) {
            window.open('https://github.com/ShadyThGod/altus/releases/download/' + altusVersion + '/Altus-Setup-' + altusVersion + '.exe', '_blank');
        });

        document.querySelector('#linux-download-deb').addEventListener('click', function(e) {
            window.open('https://github.com/ShadyThGod/altus/releases/download/' + altusVersion + '/altus_' + altusVersion + '_amd64.deb', '_blank');
        });

        document.querySelector('#linux-download-appimage').addEventListener('click', function(e) {
            window.open('https://github.com/ShadyThGod/altus/releases/download/' + altusVersion + '/altus-' + altusVersion + '-x86_64.AppImage', '_blank');
        });

        document.querySelector('#macos-download').addEventListener('click', function(e) {
            window.open('https://github.com/ShadyThGod/altus/releases/download/' + altusVersion + '/Altus-' + altusVersion + '.dmg', '_blank');
        });
    });

document.querySelector('#nav-home').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#main-content').scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

document.querySelector('#nav-features').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.features-group').scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

document.querySelector('#nav-download').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.downloads-group').scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

document.querySelector('#visit-git').addEventListener('click', function(e) {
    window.open('https://github.com/ShadyThGod/altus/', '_blank');
});