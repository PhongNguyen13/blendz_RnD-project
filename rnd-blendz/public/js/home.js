const createHeader = () => {
    let header = document.querySelector('.hero-section');

    header.innerHTML = `
        <div class="content">
            <img src="img/light-logo.png" class="logo" alt="">
            <p class="sub-heading">best fashion collection of all time</p>
        </div>
    `;
}

createHeader();