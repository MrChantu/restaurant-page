const home = () => {
    // Create elements
    const mainContainer = document.createElement('main');
    const h1 = document.createElement('h1');
    const button = document.createElement('button');
    // Assign textcontent
    h1.textContent = 'The Markup Cafe';
    button.textContent = 'VIEW MENU';
    button.setAttribute('id', 'menubtn');
    // Append children
    mainContainer.append(h1, button);
    // Return mainContainer element
    console.log('rendered home');
    return mainContainer;
};

export { home };
