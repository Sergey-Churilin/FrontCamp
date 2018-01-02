/**
 * Class representing binding example
 */
export default class DataBinding {
    /**
     * Create a DataBinding
     */
    constructor() {
        this.bindMap = {};
        this.scope = {};
        const bindedElsArray = document.querySelectorAll('*[data-bind]');

        bindedElsArray.forEach(element => {
            const bindTo = element.dataset.bind;

            if (!this.bindMap[bindTo]) {
                this.bindMap[bindTo] = [];
            }

            this.bindMap[bindTo].push(element);
        });

        this.attachListeners();
    }

    /**
     * Handler to bind values
     * @param {string} bindingName
     * @param {string} value
     */
    bindValue(bindingName, value) {
        this.scope[bindingName] = value;
    }

    /**
     * Sync binding values
     */
    syncBindings() {
        for (let bindTo in this.scope) {
            const value = this.scope[bindTo];

            this.bindMap[bindTo].forEach(function (el) {
                if (el.tagName === 'INPUT') {
                    el.value = value;
                } else {
                    // Select updates automatically
                    if (el.tagName !== 'SELECT') {
                        el.innerText = value;
                    }
                }
            });

            delete this.scope[bindTo];
        }
    }

    /**
     * Attach listeners to the document
     */
    attachListeners() {
        document.addEventListener('keyup', e => {
            this.handleListeners(e, 'i')
        }, true);

        document.addEventListener('change', e => {
            this.handleListeners(e, 's')
        }, true);
    }

    /**
     * Handle listeners
     */
    handleListeners(e, el) {
        const target = e.target;
        const bindTo = target.dataset.bind;
        let value = target.value;

        if (el === 's' && value && target.selectedOptions) {
            value = target.selectedOptions[0].text;
        }
        if (bindTo && this.bindMap[bindTo]) {
            this.bindValue(bindTo, value);
            this.syncBindings();
        }
    }
}