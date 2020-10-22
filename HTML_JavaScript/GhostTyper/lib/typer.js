async function makeDelay(ms) {
    return new Promise(resolve => setInterval(resolve, ms));
}

function getMethod(methods, name) {
    for (const method of methods) {
        if (method.name == name)
            return method;
    }

    return null;
}

export async function run(options) {
    const beginHandler = getMethod(options.methods, "_begin");

    if (beginHandler)
        beginHandler.handler(options.element);

    for (const content of options.content)
    {
        const method = getMethod(options.methods, content.method);

        if (!method) {
            console.warn(`Method "${content.method}" not found.`);
            break;
        }

        if (content.data) {
            for (const value of content.data) {
                method.handler(options.element, value);

                await makeDelay(method.delay);
            }
        } else if (content.count) {
            for (let i = 0; i < content.count; i++) {
                method.handler(options.element);

                await makeDelay(method.delay);
            }
        }
    }

    const endHandler = getMethod(options.methods, "_end");

    if (endHandler)
        endHandler.handler(options.element);
}