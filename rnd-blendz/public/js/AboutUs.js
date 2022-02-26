const aboutUs = () => {
  let about = document.querySelector('.about-container');
  
  about.innerHTML = `
    <div class="about">
        <h1>WE ARE BLENDZ</h1>
        <p>Blendz is the New Zealand and South Pacific distributor of slushy machines from Elmeco in Italy.<br />
            We offer machine sales and support, rentals, servicing, spare parts, slushy concentrate and accessories as a complete hassle free solution.<br />
            The ideas for Blendz are constantly being developed and tested to provide a range of unique and interesting beverages.<br />
            '2 Mix it' was conceived in conjunction with Blendz, as the vehicle in which the blended beverages can be administered.<br />
            On this site you will see our dispensing machinery and accessories which allows you to make this happen for your business.
        </p>
    </div>
  `;
}

aboutUs();