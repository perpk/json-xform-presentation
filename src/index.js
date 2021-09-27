import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/night.css';
import 'reveal.js/plugin/highlight/monokai.css';
import '../img/transformers-slam-dunk.gif';
import '../img/concept-overview.jpg';
import '../img/must-all-fmj.gif';
import '../img/library.gif';
import '../img/usecase.gif';
import '../img/motivation.gif';
import '../img/tools.gif';
import '../img/bruce-lee.gif';
import '../img/code-management.gif';
import '../img/thanks.gif';

import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm'

Reveal.initialize({
    slideNumber: true,
    showSlideNumber: 'all',
    hash: true,
    history: true,
    keyboard: true,
    touch: true,
    plugins: [RevealHighlight],
});