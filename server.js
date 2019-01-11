const express = require('express')
const bodyParser = require('body-parser')
const uuidv4 = require('uuid/v4')

const { CostCentre } = require('./models/costCentre')

const app = express()
const port = process.env.PORT || 3000

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

app.use(bodyParser.json())

// POST route to write a new line to the Cost Centre database
app.post('/costcentre', (req, res, next) => {
    console.log(req.body)
    const costCentre = new CostCentre({
        userName: req.body.userName,
        email: req.body.email,
        telNumber: req.body.telNumber,
        directorate: req.body.directorate,
        businessRequirement: req.body.businessRequirement,
        priority: req.body.priority,
        priorityJustification: req.body.priorityJustification,
        changeType: req.body.changeType,
        level: req.body.level,
        code: req.body.code,
        description: req.body.description,
        parentLevel: req.body.parentLevel,
        parentCode: req.body.parentCode,
        parentDescription: req.body.parentDescription,
        mentorMap: req.body.mentorMap,
        dffType: req.body.dffType,
        enable: req.body.enable,
        costCentreEntity: req.body.costCentreEntity
    })

    costCentre.save().then(doc => {
        res.send(doc)
    }), (e) => {
        res.status(400).send(e)
    }
})

// POST route for /costcentre/bulk - this bulk uploads data from a CSV fie
app.post('/costcentre/bulkupload', (req, res) => {
    console.log(typeof req.body)
    resultObject = req.body

    const batchUuid = uuidv4()

    resultObject.forEach(object => {
        object.batchUuid = batchUuid
    })
    
    CostCentre.bulkCreate(resultObject).then(() => {
        return CostCentre.findAll({where: {batchUuid}})
    }).then(results => {
        res.send(results)
    })

})
// GET route to retrieve all requests in Cost Centre Table
app.get('/costcentre', (req, res) => {
    CostCentre.findAll().then((results) => {
        res.send(results)
    })

})

//GET route for single record in Cost Centre Table
app.get('/costcentre/:uuid', (req, res) => {
    const uuid = req.params.uuid
   CostCentre.findAll({where: {uuid}}).then((result) => {
       res.send(result)
   })
})

app.listen(port, () => {
    console.log(`Started on Port ${port}`)
})