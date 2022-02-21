const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="img/logo.jpg" class="brand-logo" alt="">
            <div class="nav-items">
                <ul class="links-container">
                    <li class="link-item"><a href="index.html" class="link">home</a></li>
                    <li class="link-item"><a href="shop.html" class="link">shop</a></li>
                    <li class="link-item"><a href="help.html" class="link">help</a></li>
                    <li class="link-item"><a href="about.html" class="link">about</a></li>
                </ul>
                <a href="#"><img src="img/user.png" alt=""></a>
                <a href="#"><img src="img/cart.png" alt=""></a>
            </div>
        </div>
    `;
}

createNav();