const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const url = process.env.MONGO_DB_URL

const connectDB = async () => {
    try{
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("DB Connected")
    } catch(ex){
        console.log(ex.message)
        process.exit(1)
    }
}

module.exports = connectDB