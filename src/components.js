import { home } from './home';
import { menu } from './menu';
import { about } from './about';
import githubLogo from './img/github-mark-white.svg';

const header = () => {
    // Header
    // Create elements
    const headerContainer = document.createElement('header');
    // Append children
    //parent.appendChild(header);
    for (let i = 0; i < 3; i++) {
        const aTextContent = ['HOME', 'MENU', 'ABOUT'];
        const aIDs = ['home', 'menu', 'about'];
        const a = document.createElement('a');
        a.setAttribute('id', aIDs[i]);
        a.textContent = aTextContent[i];
        headerContainer.appendChild(a);
    }
    return headerContainer;
};

const footer = () => {
    // Footer
    // Create elements
    const footerContainer = document.createElement('footer');
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    // Set attributes
    a.setAttribute('href', 'https://github.com/MrChantu');
    a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'noopener noreferrer');
    img.setAttribute('id', 'github');
    img.setAttribute('alt', 'github logo');
    img.src = githubLogo;
    // Set textcontent
    a.textContent = 'Chantu';
    // Append children
    footerContainer.appendChild(div);
    div.append(a, img);

    return footerContainer;
};

const eventlisteners = () => {
    const home = document.getElementById('home');
    const menu = document.getElementById('menu');
    const about = document.getElementById('about');
    const viewmenu = document.getElementById('menubtn');

    home.addEventListener('click', () => {
        renderHome();
    });
    menu.addEventListener('click', () => {
        renderMenu();
    });
    about.addEventListener('click', () => {
        renderAbout();
    });
    // If viewmenu exists
    if (viewmenu) {
        viewmenu.addEventListener('click', () => {
            renderMenu();
        });
    }
};

function removeChildren(parent) {
    while (parent.firstChild) {
        parent.firstChild.remove();
    }
}

const content = document.querySelector('#content');

function renderHome() {
    removeChildren(content);
    content.append(header(), home(), footer());
    eventlisteners();
}

function renderMenu() {
    removeChildren(content);
    content.append(header(), menu(), footer());
    eventlisteners();
}

function renderAbout() {
    removeChildren(content);
    content.append(header(), about(), footer());
    eventlisteners();
}

export {
    header,
    footer,
    removeChildren,
    renderHome,
    renderMenu,
    eventlisteners,
};
