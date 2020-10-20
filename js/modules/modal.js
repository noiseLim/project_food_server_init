function modal() {
    
    // Modal

    const modalContent = document.querySelectorAll('[data-modal]'),
          modalBlock = document.querySelector('.modal');
        //   modalClose = document.querySelector('[data-close]');

    function openModal () {
        modalBlock.classList.add('show');
        modalBlock.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimeId);
    }

    modalContent.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    function closeModal () {
        modalBlock.classList.add('hide');
        modalBlock.classList.remove('show');
        document.body.style.overflow = '';
    }
    
    // удалили после модификации модального окна в lesson #54
    // modalClose.addEventListener('click', closeModal);

    modalBlock.addEventListener('click', (e) => {
        if (e.target === modalBlock || e.target.getAttribute('data-close') == '') {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code == "Escape" && modalBlock.classList.contains('show')) {
            closeModal();
        }
    });

    const modalTimeId = setInterval(openModal, 50000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);
}

module.exports = modal;