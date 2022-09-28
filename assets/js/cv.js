    //  Navbar
    const menuToggle = document.querySelector('input');

    menuToggle.addEventListener('click', function () {

    let nav = document.getElementById("navbar");
    const isChecked = menuToggle.checked;

    if (isChecked) {
        if (nav.classList.contains("toggle")) {
            return;
        } else {
            nav.classList.add("toggle");
        }
    } else {
        if (nav.classList.contains("toggle")) {
            nav.classList.remove("toggle");
        } else {
            return;
        }
    }
    });
    
    const ul = document.querySelector('ul');
    const a = document.querySelectorAll('a');

    ul.addEventListener('click', function (e) {

        a.forEach(function (a) {
            a.className = 'link';
        });

        if(e.target.classList.contains('link')) {
            e.target.classList.add('aktif');
        }
    });
    // EndNavbar

    // Durasi
    let start = document.getElementById('start').innerHTML = 'September 07 2022';
    let end = document.getElementById('end').innerHTML = 'Sekarang';

    let bulan_start = new Date(start).getMonth();
    let bulan_end = new Date().getMonth();

    let bulan = bulan_end - bulan_start;

    let hari_start = new Date(start).getDate();
    let hari_end = new Date().getDate();

    let hari = hari_end - hari_start;

    document.getElementById('duration').innerHTML = `Durasi : ${bulan} bulan ${hari} hari `;
    // EndDurasi
    

