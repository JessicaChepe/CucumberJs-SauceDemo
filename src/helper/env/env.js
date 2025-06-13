const dotenv = require('dotenv');

const getEnv = () => {
    if (process.env.ENV) {
        dotenv.config({
            override: true,
            path: `src/helper/env/.env.${process.env.ENV}`
        });
    } else {
        console.error('NO ENV PASSED!');
    }
};

module.exports = { getEnv };
