const createCollections = () => {
    let collections = document.querySelector('.collection-container');

    collections.innerHTML = `
        <a href="#" class="collection">
            <img src="img/btn_beverages.jpg" alt="">
        </a>
        <a href="#" class="collection">
            <img src="img/btn_machinery.jpg" alt="">
        </a>
        <a href="#" class="collection">
            <img src="img/btn_accessories.jpg" alt="">
        </a>
    `;
}

createCollections();