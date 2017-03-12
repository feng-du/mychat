module.exports = {
    port: process.env.PORT || 3010,
    secret: 'my secret',
    redis: {
        port: 6379,
        host: 'localhost'
    }
};