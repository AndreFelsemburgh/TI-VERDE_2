// identificar o clique no menu
// verificar o item que foi clicado e fazer referencia com o alvo
// verificar a distância entre o alvo e o topo
// animar o scroll até o alvo

const menuItems = document.querySelectorAll('.container-menu a[href^="#"]');

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick(event) {
    event.preventDefault(); // não mostra na url id interno da página
    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop;


    window.scroll({
        top: to - 50,
        behavior: 'smooth',
    });
}
