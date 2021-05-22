const mongoose =  require('bluebird').promisifyAll(require('mongoose'));

const URI = process.env.MONGO_DB_URL;

(async () => {
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    if(mongoose.connection.readyState ==1) console.log("mongodb connected");
})().catch(err => {
    console.error(err);
});

module.exports = mongoose;