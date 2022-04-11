
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35731/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
'use strict';

(function () {
    const ERROR_LABEL = 'error';
    const addErrorAttribute = (input) => input.setAttribute(ERROR_LABEL, ERROR_LABEL);
    const rmErrorAttribute = (input) => input.removeAttribute(ERROR_LABEL);
    const onInputChange = (input) => () => rmErrorAttribute(input);
    const onInputIvalid = (input) => () => addErrorAttribute(input);
    const addListenerToInputs = (input) => {
        input.addEventListener('invalid', onInputIvalid(input));
        input.addEventListener('change', onInputChange(input));
    };
    const setInputs = () => {
        const inputs = Array.prototype.slice.call(document.querySelectorAll('input'));
        inputs.map(addListenerToInputs);
    };
    setInputs();
})();
