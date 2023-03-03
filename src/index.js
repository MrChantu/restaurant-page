import { home } from './home';
import {
    header,
    footer,
    removeChildren,
    renderHome,
    renderMenu,
    eventlisteners,
} from './components';
import './styles.css';

const content = document.querySelector('#content');

const init = (() => {
    content.append(header(), home(), footer());
    eventlisteners();
})();
