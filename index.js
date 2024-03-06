const regexPatterns = {
    email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
    username: /^[a-zA-Z0-9_]{3,16}$/,
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
    url: /^(https?:\/\/)?([\w\d-]+\.)+[\w\d]{2,}(\/[\w\d-]+)*\/?$/,
    date: /^\d{4}-\d{2}-\d{2}$/,
    time: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,
    ipv4: /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
    ipv6: /^([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}$|^([0-9a-fA-F]{1,4}:){1,7}:$|^([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}$|^[0-9a-fA-F]{1,4}::([0-9a-fA-F]{1,4}:){0,4}[0-9a-fA-F]{1,4}$|^([0-9a-fA-F]{1,4}:){1,5}:([0-9a-fA-F]{1,4}:){0,3}[0-9a-fA-F]{1,4}$|^([0-9a-fA-F]{1,4}:){1,4}:([0-9a-fA-F]{1,4}:){0,4}[0-9a-fA-F]{1,4}$|^([0-9a-fA-F]{1,4}:){1,3}:([0-9a-fA-F]{1,4}:){0,5}[0-9a-fA-F]{1,4}$|^([0-9a-fA-F]{1,4}:){1,2}:([0-9a-fA-F]{1,4}:){0,6}[0-9a-fA-F]{1,4}$|^[0-9a-fA-F]{1,4}::([0-9a-fA-F]{1,4}:){0,6}[0-9a-fA-F]{1,4}$|^:((:[0-9a-fA-F]{1,4}){1,7}|:)$/,
    creditcard: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9]{2})[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])?[0-9]{11})$/,
    html: `<([a-zA-Z][a-zA-Z0-9]*)\\b[^>]*>.*?<\\/\\1>|<.*? \\/>`,
    zipus: /^\d{5}(?:[-\s]\d{4})?$/,
    phoneindia: /^\+?(91)?[\s-]?\d{10}$/,
    phoneus: /^\+?1?\s*\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
    phoneuk: /^\+?(44)?\s?(\(0\))?\s?[0-9]{4}\s?[0-9]{3}\s?[0-9]{3}$/,
    phoneaus: /^\+?(44)?\s?(\(0\))?\s?[0-9]{4}\s?[0-9]{3}\s?[0-9]{3}$/,
    phonecan: /^\+?(1)?[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}$/,
    pin: /^\d{6}$/
}

export function validateString(inputString, regexType = null, userInput = null) {
    if (userInput === null) {
        if (!(regexType in regexPatterns)) {
            console.error('Invalid regex type');
            return false;
        }
        return regexPatterns[regexType].test(inputString);
    } else {
        return userInput.test(inputString);
    }
}

export function analyzeLog(logText) {
    const timestampRegex = /\[(.*?)\]/g;
    const errorRegex = /ERROR: (.*?)(?=\n|$)/g;
    const ipRegex = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/g;
    const timestamps = Array.from(logText.matchAll(timestampRegex), match => match[1]);
    const errors = Array.from(logText.matchAll(errorRegex), match => match[1]);
    const ips = Array.from(logText.matchAll(ipRegex), match => match[0]);
    const logResults = timestamps.map((timestamp, index) => ({
        timestamp,
        error: errors[index] || 'N/A',
        ip: ips[index] || 'N/A'
    }));
    return logResults
};

export function searchAndReplace(text, searchTerm, replaceTerm) {
    const regex = new RegExp(`\\b${searchTerm}\\b`, 'g');
    const replacedText = text.replace(regex, replaceTerm);
    return replacedText;
};

export function parseUrl(url) {
    const urlPattern = /^(?:(\w+):\/\/)?([^\/:]+)(?::(\d+))?([^?#]+)?(?:\?([^#]+))?(?:#(.*))?$/;
    const matches = url.match(urlPattern);
    if (matches) {
        const [, protocol, domain, port, path, queryParams, fragment] = matches;
        return {
            protocol: protocol || 'http',
            domain,
            port: port || '80',
            path: path || '/',
            queryParams: queryParams ? queryParams.split('&') : [],
            fragment: fragment || ''
        };
    } else {
        return null;
    }
};

export function getRegex(regexName) {
    if (!(regexName in regexPatterns)) {
        console.error('Invalid regex type');
        return false;
    }
    return regexPatterns[regexName];
}