module.exports = function (babel) {
    const { types: t } = babel;

    return {
        name: "remove-console-log",
        visitor: {
            CallExpression(path) {

                const isConsole = hasNameConsole(path);

                if(!isConsole){
                    return;
                }

                const isLog = hasPropertyLog(path);

                if(isLog){
                    path.remove();
                }
            }
        }
    };

    function hasNameConsole(path){
        const node = path.node;
        if(!node){
            return false;
        }

        const callee = node.callee;
        if(!callee){
            return false;
        }

        const calleeObject = callee.object;
        if(!calleeObject){
            return false;
        }

        return calleeObject.name === 'console';
    }

    function hasPropertyLog(path){
        return path.node.callee.property.name === 'log';
    }
};
