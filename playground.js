const Sequelize = require('sequelize')
const tedious = require('tedious')


// SET UP THE CONNECTION. THIS SHOULD BE MOVED TO A SEPERATE FILE
const sequelize = new Sequelize('TESTAPI', 'test', 'Winter2018!' , {
    host: 'epmdbdev',
    dialect: 'mssql',
    driver: tedious,
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

// AUTHENTICATE THE CONNECTION AND OPEN
sequelize.authenticate().then(() => {
    // CREATE THE USER MODEL WITH ONE FIELD
    
    const User = sequelize.define('User', {
        userName: { type: Sequelize.STRING, primaryKey: true}}, 
          {    tableName: 'Users',
             timestamps: true,
             primaryKey: false
            
        })


    
    // MANUALLY CREATE A NEW USER with USER.BUILD AND DO SOMETHING WITH THE RESULT ELSE RUN INTO THE CATCH BLOCK        
    // const name = 'nodeNameNew4'
    // const newUser = User.build({
    //         userName:  name,
    //        }).save()
    //     .then(anotherTask => {
    //         console.log(`The user ${anotherTask.dataValues.userName} has been created`)
    //         sequelize.close()
    //     })
    //     .catch(error => {
    //         console.log('uh oh something wasnt right!')
    //         console.log(error)
    //     })

  // USE THE CREATE METHOD ON THE MODEL TO CREATE A NEW USER      
  const john = User.create({
            userName: 'Johnboy'
        }).then(john => {
            console.log(john.get({
                plain: true
            }))
            sequelize.close()
        })
        
        // CHANGE THE NAME OF ALL USERS 
        User.update({
            userName: 'NarlyNick'
        }, {where: {userName: 'nodeNameNew4'}
        })
    
        
// RETURN ALL USERS WITH THE NAME JOHNBOY
User.findAll({
    where: {
        userName: 'JohnBoy'
    }
}).then(users => users.forEach((user => {
    console.log(user.dataValues.userName)
})))

User.findAll({
    where: {
        userName: 'NarlyNick'
    }
}).then(users => users.forEach((user => {
    console.log(user.dataValues.userName)
})))

    })

 
 module.exports = User