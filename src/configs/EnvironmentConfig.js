// src/config/EnvironmentConfig.js
const dev = {
    API_ENDPOINT_URL: 'http://localhost:8181/api/'
}

const prod = {
    API_ENDPOINT_URL: 'http://api.commscrm.com.au/api/'
}

const getEnv = () => {
    let env;
    switch(process.env.APP_ENVIRONMENT) {
        case 'production':
            env = prod;
            break;
        default:
            env = dev;
    }
    return env;
}

export const env = getEnv();