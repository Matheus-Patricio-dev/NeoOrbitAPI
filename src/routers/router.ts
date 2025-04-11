import { Router } from "express";
import {StatusCodes} from "http-status-codes"
import {SatelliteController} from './../controllers'

const router = Router()
// Rota GET

router.get('/get', SatelliteController.get);

//Rotas GET/Satelite

router.get('/get/:id', SatelliteController.getInfo);

router.get('/get/:id', SatelliteController.getInfo);
router.get('/get/:id', SatelliteController.getInfo);


router.post('/post', (req, res) => {
    console.log(req.body)

    res.status(StatusCodes.OK).json(req.body)
});


export default router