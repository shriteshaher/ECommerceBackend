const redis = require('redis');
const config = require('./config');
const client = redis.createClient({
    host:process.env.REDIS_HOST,
    port:process.env.REDIS_PORT,
    password:process.env.REDIS_PASSWORD
});

async function run() {
await client.connect().then(res =>{
    console.log(client.isOpen)
})
}

run()
client.expireAt('products', parseInt((+new Date)/1000) + 86400);
module.exports = client