const menu = () => {
    // Create elements
    const mainContainer = document.createElement('main');
    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('id', 'menu-items');
    for (let i = 0; i < 6; i++) {
        const headers = [
            'Head Tag Salad',
            'Anchor Wrap',
            'Div Soup',
            'CSS Caesar Salad',
            'Image Slider Sandwich',
            'Responsive Rice Bowl',
        ];
        const paragraphs = [
            'A fresh mix of lettuce and vegetables, topped with a crispy HTML head tag.',
            'A delicious wrap filled with turkey, cheese, lettuce, and an anchor tag for added crunch.',
            'A hearty soup filled with carrots, celery, and div tags for added flavor.',
            'A classic Caesar salad with a twist of CSS styling.',
            'A mouth-watering sandwich made with roasted turkey, bacon, lettuce, and an image slider for added texture.',
            'A flavorful rice bowl with fresh vegetables and a responsive design that adapts to your hunger level.',
        ];
        const div = document.createElement('div');
        const h2 = document.createElement('h2');
        const p = document.createElement('p');
        menuContainer.appendChild(div);
        h2.textContent = headers[i];
        p.textContent = paragraphs[i];
        div.append(h2, p);
    }
    mainContainer.appendChild(menuContainer);
    console.log('rendered menu');
    return mainContainer;
};

export { menu };
