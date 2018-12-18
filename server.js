const express = require('express')
const bodyParser = require('body-parser')

const { CostCentre } = require('./models/costCentre')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())

// POST route to write a new line to the Cost Centre database
app.post('/costcentre', (req, res) => {
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

// GET route to retrieve all requests in Cost Centre Table
app.get('/costcentre', (req, res) => {
    const data = CostCentre.findAll().then((results) => {
        res.send(results)
    })

})


app.listen(port, () => {
    console.log(`Started on Port ${port}`)
})