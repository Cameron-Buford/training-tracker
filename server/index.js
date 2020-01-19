const express = require('express'),
    cors = require('cors'),
    app = express(),
    drillCtrl = require('./controllers/controller')



    app.use(cors());
    app.use(express.json())

    //endpoints
    app.get('data.json/drills')

    const drills = '/api/drills'

    app.get(drills, drillCtrl.getAllDrills)
    app.post(drills, drillCtrl.add)
    app.put(`${drills}/:id`, drillCtrl.change)
    app.delete(`${drills}/:id`, drillCtrl.delete)


    const port = 7218;
    app.listen(port, () => console.log(`Azones shot on port: ${port}`))