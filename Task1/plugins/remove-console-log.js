module.exports = function (babel) {
    const { types: t } = babel;

    return {
        name: "remove-console-log",
        visitor: {
            CallExpression(path) {
                if(!path.node){
                    return;
                }

                if(!path.node.callee){
                    return;
                }

                if(!path.node.callee.object){
                    return;
                }
                const isConsole = path.node.callee.object.name === 'console';

                const isPropertyLog = path.node.callee.property.name === 'log';

                if(isConsole && isPropertyLog){
                    path.remove()
                }
            }
        }
    };
};
