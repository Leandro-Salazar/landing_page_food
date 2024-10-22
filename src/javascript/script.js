$(document).ready(function() {
    // Botão de menu mobile
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');  // Alterna entre ícone de hambúrguer e "x"
    });

    // Scroll para mudar a seção ativa no menu de navegação
    const sections = $('section');
    const navItems = $('#nav_list .nav_item');  // Corrigi o seletor para pegar os itens corretamente

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop();

        let activeSectionIndex = 0;

        // Alterar sombra do header ao rolar a página
        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }

        // Definir qual seção está visível no momento
        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;  // Considera um pequeno offset para suavizar a mudança de ativo
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        });

        // Remover a classe ativa de todos os itens e definir no item correto
        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    // Animações com ScrollReveal
    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    });
});
