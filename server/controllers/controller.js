const drillsShot = require('../data.json');
const singleDrill = []
let id = 0;


module.exports = {
    getAllDrills: (req, res) => {
        res.status(200).send(drillsShot)
    },

    add: (req, res) => {

        const {name, score, description} = req.body;
        const newDrill = {
            name,
            score,
            description,
            id: id++
        }

        singleDrill.push(newDrill)
        res.status(200).send(singleDrill)
    },

    change: (req, res) => {
        const {id} = req.params;
        const {score} = req.body;
        console.log(req.body)

        const index = singleDrill.findIndex(element => element.id === +id);
        singleDrill[index].score = score;


        res.status(200).send(singleDrill)
    },

    delete: (req, res) => {
        const {id}= req.params;

        const index = singleDrill.findIndex(element => element.id === +id);
        singleDrill.splice(index, 1);
        res.status(200).send(singleDrill)
    }


}