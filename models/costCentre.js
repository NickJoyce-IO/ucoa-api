const { sequelize } = require('../config/config')
const Sequelize = require('sequelize')

const CostCentre = sequelize.define('CostCentre', {
   userName: { type: Sequelize.STRING, primaryKey: true},
   email: Sequelize.STRING, 
   telNumber: Sequelize.STRING,
   directorate: Sequelize.STRING,
   businessRequirement: Sequelize.STRING,
   priority: Sequelize.STRING,
   priorityJustification: Sequelize.STRING,
   changeType: Sequelize.STRING,
   level: Sequelize.STRING,
   code: Sequelize.STRING,
   description: Sequelize.STRING,
   parentLevel: Sequelize.STRING,
   parentCode: Sequelize.STRING, 
   parentDescription: Sequelize.STRING, 
   mentorMap: Sequelize.STRING,
   dffType: Sequelize.STRING,
   enable: Sequelize.STRING,
   costCentreEntity: Sequelize.STRING

}, {  tableName: 'CostCentre',
         timestamps: true,
         primaryKey: false  
    })

    module.exports = { CostCentre }