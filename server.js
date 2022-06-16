require('dotenv').config()
const app = require('./app')
const {appConfig, dbConfig} = require('./config')
const conncetDb = require('./db/mongodb')



async function initApp (appConfig, dbConfig){
    try{
       await conncetDb(dbConfig)
        app.listen(appConfig.port, () => console.log(`listen on port ${appConfig.port}`))
    } catch(e){
        console.error(e)
        process.exit(0)
    }
}
initApp(appConfig, dbConfig)