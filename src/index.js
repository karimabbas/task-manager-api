const express = require('express')
require('./src/db/mongoose')
const useRouter = require('./src/routers/user')
const taskRouter = require('./src/routers/task')
const app = express()
const port = process.env.PORT


/*app.use((req , res , next)=>{
    if(req.method === 'GET'){
        res.send('GET requests are disabled')
    }
    else{
        next()
    }
}) */

/*app.use((req , res , next)=>{
    res.status(503).send('Site is down , back soon')
})*/

app.use(express.json())
app.use(useRouter)
app.use(taskRouter)

app.listen(port, ()=>{
    console.log("Server is up on port"+port)
})

const Task = require('./src/models/task')
const User = require('./src/models/user')

/*const main = async ()=>{
    /*const task = await Task.findById('60be46fe0c663457e49e84de')
    await task.populate('owner').execPopulate()
    console.log(task.owner)
    
    const user = await User.findById('60be46fe0c663457e49e84de')
    await user.populate('tasks').execPopulate()

    console.log(user.tasks)
}*/

//main()  


/*function sum (x,y,z){
    return x+y+z
}
const numbers = [1,2,3,4,5,6]

console.log(sum(1,2,3))
console.log(sum(numbers))
console.log(sum(...numbers))
*/

/*let numberStore = [0, 1, 2];
let newNumber = 12;
numberStore1 = [...numberStore, newNumber];
console.log(numberStore1)

numberStore2= [numberStore , newNumber]
console.log(numberStore2)

*/
/*const jwt = require('jsonwebtoken')

const myfunction = async ()=>{
    const token = jwt.sign({_id:'db12345'} , 'thisismyname' , {expiresIn : ' 7 days'})
    console.log(token)

    const data = jwt.verify(token , 'thisismyname')
    console.log(data)
}

myfunction()
*/






/*const bcrypt = require('bcryptjs')

const myfunction = async ()=>{
    const password = 'Red12345!'
    const hasshpassword = await bcrypt.hash(password , 8)

    console.log(password)
    console.log(hasshpassword)

    const isMatch = await bcrypt.compare(password , hasshpassword)
    console.log(isMatch)
}

myfunction()*/