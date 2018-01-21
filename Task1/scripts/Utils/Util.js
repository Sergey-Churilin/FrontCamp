/**
 * Helper object representing application utils
 */
const Util = {

    /**
     * @param {object} oDate - Date object
     * @return formatter date
     */
    formatDate: (oDate) => {
        const hours = oDate.getHours();
        const formattedHours = hours < 10 ? `0${hours}` : hours;

        const minutes = oDate.getMinutes();
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

        return `${oDate.getDate()}/${oDate.getMonth()}/${oDate.getFullYear()}  ${formattedHours}:${formattedMinutes}`;
    },

    /**
     * @param {object} data - DOM node params
     * data.nodeType - textNode, element ...
     * data.element - dom element
     * data.classList - classes
     * data.attributes = {name, value}
     * data.parent - dom node append to
     * data.id - node id
     * data.text - node text
     * data.value - node value
     * data.html - node html
     *
     *
     * @return DOM node
     */
    createDomNode: (data) => {
        let element;

        switch (data.nodeType) {
            case 'element':
                element = document.createElement(data.element);
                break;

            case 'text':
                element = document.createTextNode(data.text);
                break;
            default:
                element = document.createElement(data.element);
                break;
        }

        if (data.parent) {
            data.parent.appendChild(element);
        }

        if (data.classList) {
            element.classList.add(...data.classList);
        }

        if (data.id) {
            element.id = data.id;
        }

        const attrs = data.attributes;
        if (attrs) {
            for (let key in attrs) {
                if (attrs.hasOwnProperty(key)) {
                    element.setAttribute(key, attrs[key]);
                }
            }
        }

        if(data.value || data.value === ''){
            element.value = data.value;
        }

        if(data.html){
            element.innerHTML = data.html;
        }

        return element;
    }
};

export {Util};