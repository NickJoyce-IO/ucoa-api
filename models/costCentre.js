const { sequelize } = require('../config/config')
const Sequelize = require('sequelize')

const CostCentre = sequelize.define('CostCentre', {
   id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
   userName: { type: Sequelize.STRING },
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
   costCentreEntity: Sequelize.STRING,
   maApprove: Sequelize.STRING,
   maApproveBy: Sequelize.STRING,
   maApproveDate: Sequelize.STRING,
   uuid: {type: Sequelize.UUIDV4,
      defaultValue: Sequelize.UUIDV4 }


}, {  tableName: 'CostCentre',
         timestamps: true,
         primaryKey: false  
    })

    module.exports = { CostCentre }