import app from 'firebase'
import fbConfig from './fbConfig'

class Firebase {
    constructor(){
        app.initializeApp(fbConfig)
    }
}
const firebase = new Firebase()

export default firebase;