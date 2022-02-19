const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="img/logo.jpg" class="brand-logo" alt="">
            <div class="nav-items">
                <ul class="links-container">
                    <li class="link-item"><a href="#" class="link">home</a></li>
                    <li class="link-item"><a href="#" class="link">shop</a></li>
                    <li class="link-item"><a href="#" class="link">help</a></li>
                    <li class="link-item"><a href="#" class="link">About</a></li>
                </ul>
                <a href="#"><img src="img/user.png" alt=""></a>
                <a href="#"><img src="img/cart.png" alt=""></a>
            </div>
        </div>
    `;
}

createNav();