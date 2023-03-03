const about = () => {
    // Create elements
    const mainContainer = document.createElement('main');
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    // Set attributes
    mainContainer.setAttribute('id', 'about');
    h2.textContent = 'About';
    p.textContent =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam elementum pulvinar etiam non quam lacus suspendisse. Lacinia at quis risus sed vulputate odio. Fames ac turpis egestas sed tempus urna. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Fames ac turpis egestas maecenas. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Nisl suscipit adipiscing bibendum est ultricies. Integer feugiat scelerisque varius morbi. Ac turpis egestas sed tempus urna. Orci a scelerisque purus semper. Porttitor massa id neque aliquam vestibulum morbi. Scelerisque varius morbi enim nunc faucibus a pellentesque sit. Vitae tempus quam pellentesque nec nam. Amet cursus sit amet dictum. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Vestibulum lectus mauris ultrices eros in cursus turpis.';
    // Append children
    mainContainer.appendChild(div);
    div.append(h2, p);

    return mainContainer;
};

export { about };