const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
        <p class="info">Address: 282 Fordyce Road
        RD1, Helensville
        Auckland 0874
        New Zealand</p>
        <p class="info">Email: info@blendz.co.nz</p>
        <p class="info">Phone NZ: 0800 2 MIX IT
            (0800 264 948)</p>
    `;
}

createFooter();