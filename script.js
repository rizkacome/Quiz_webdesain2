function pindahHalaman(namaHalaman) {
    // Sembunyikan semua halaman
    document.querySelectorAll('.page-view').forEach(function (el) {
        el.classList.remove('active');
    });

    const target = document.getElementById('page-' + namaHalaman);
    if(target) target.classList.add('active');

    document.querySelectorAll('.nav-link-page').forEach(function (link) {
        const isAstive = link.getAttribute('data-page') === namaHalaman;
        link.classList.toggle('active', isActive);
        link.classList.toggle('text-white', isActive);
        link.classList.toggle('text-white-50', isActive);
    });

    window.scroollTop({top: 0, behavior: 'instant'});

    $('#navbarLinks').collpase('hide');

    if(namaHalaman === 'akademik') {
        setTimeout(function () {
            $('[data-spy="scroll"]').each(function () {
                $(this).scrollspy('refresh');
            });
        }, 50);
    }
}

// pasang event listener ke semua elemen yang punya data-page
document.querySelectorAll('[data-page]').forEach(function (el) {
    el.addEventListener('click', function (e) {
        e.preventDefault();
        pindahHalaman(this.getAttribute('data-page'));
    });
});
