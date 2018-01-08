/**
 * Class representing binding example
 */
export default class DataBinding {
    /**
     * Create a DataBinding
     */
    constructor() {
        this.initBindElements();
        this.attachListeners();
    }

    initBindElements(){
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
            this.onKeyUp(e);
        }, true);

        document.addEventListener('change', e => {
            this.onChange(e);
        }, true);
    }

    onKeyUp(e){
        const target = e.target;
        const value = target.value;

        this.handleListeners(target, value);
    }

    onChange(e){
        const target = e.target;
        let value = target.value;

        if (value && target.selectedOptions) {
            value = target.selectedOptions[0].text;
        }

        this.handleListeners(target, value);
    }

    /**
     * Handle listeners
     */
    handleListeners(target, value) {
        const bindTo = target.dataset.bind;

        if (bindTo && this.bindMap[bindTo]) {
            this.bindValue(bindTo, value);
            this.syncBindings();
        }
    }
}