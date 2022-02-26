const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `

    <div class="footer-content">
        <div class="footer-ul-container">
            <ul class="category">
                <li><a href="index.html" class="footer-link">home</a></li>
                <li><a href="shop.html" class="footer-link">shop</a></li>
                <li><a href="help.html" class="footer-link">help</a></li>
                <li><a href="about.html" class="footer-link">about</a></li>
            </ul>
        </div>    
    </div>
    <p class="info">Address: 282 Fordyce Road
        RD1, Helensville
        Auckland 0874
        New Zealand</p>

    <p class="info">Email: info@blendz.co.nz</p>
    <p class="info">Phone NZ: 0800 2 MIX IT (0800 264 948)</p>
    `;
}

createFooter();