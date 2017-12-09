module.exports = function (source) {
    const clearJson = source.replace("module.exports = ", '');
    const parsedJson = JSON.parse(clearJson);

    function findKeyAsNumber(obj) {
        let keysToDeleteArray = [];
        let objectsToFilter = [];

        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (Number(key)) {
                    keysToDeleteArray.push(key);
                } else {
                    const value = obj[key];

                    if (typeof value === "object" && !Array.isArray(value)) {
                        objectsToFilter.push(value);
                    }
                }
            }
        }

        if (keysToDeleteArray.length > 0) {
            keysToDeleteArray.forEach(key => {
                delete obj[key];
            });
        }

        if (objectsToFilter.length > 0) {
            objectsToFilter.forEach(objectToFilter => findKeyAsNumber(objectToFilter));
        }
    }

    if (parsedJson) {
        findKeyAsNumber(parsedJson);
        const result = JSON.stringify(parsedJson);
        return "module.exports = " + JSON.stringify(parsedJson);
    }

    return source;
};