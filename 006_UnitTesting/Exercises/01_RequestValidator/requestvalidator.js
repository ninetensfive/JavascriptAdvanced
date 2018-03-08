function requestValidator(request) {
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const uriRegex = /^([a-z0-9.]+)$/i;
    const messageRegex = /^([^<>\\&'"]*)$/;

    let validate = {
        method: () => {
            let result = request.hasOwnProperty(validate.method.name);
            result = result && validMethods.includes(request[validate.method.name]);

            return result;
        },
        uri: () => {
            let result = request.hasOwnProperty(validate.uri.name);
            result = result && ((uriRegex.test(request[validate.uri.name]) || (request[validate.uri.name] === '*')));

            return result;
        },
        version: () => {
            let result = request.hasOwnProperty(validate.version.name);
            result = result && validVersion.includes(request[validate.version.name]);

            return result;

        },
        message: () => {
            let result = request.hasOwnProperty(validate.message.name);
            result = result && messageRegex.test(request[validate.message.name]);

            return result;
        }
    };

    for (let property in validate) {
        if(!validate[property]()){
            throw new Error(`Invalid request header: Invalid ${formatProperty(property)}`);
        }
    }
    
    function formatProperty(property) {
        if(property === 'uri')
        {
            return property.toUpperCase();
        }

        return property.charAt(0).toUpperCase() + property.slice(1);
    }

    return request;
}

requestValidator({
    method: 'GET',
    uri: '',
    version: 'HTTP/1.1',
    message: ''
});