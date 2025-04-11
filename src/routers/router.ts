import { Router } from "express";
import client from "../database/index";
import {StatusCodes} from "http-status-codes"

const router = Router()
// Rota GET

router.get('/satellite', async (req, res) => {
    try{
        const result = await client.query(`
            SELECT 
                s.model AS satelite,
                a.nome AS atributos
            FROM
                satelite_atributo sa
            JOIN satelite s ON sa.satelite_id = s.id
            JOIN atributos a ON sa.atributo_id = a.id;
                `)
        res.json(result.rows)
    } catch (err) {
        const error = err as Error;
        console.log("Erro: ", err)
        res.status(500).json({message: "Error ao buscar dados", error: error.message})  
    }
});

// Rotas GET/Satelite

router.get('/satellite/SentinelX', async (req, res) => {
    try{
        const result = await client.query(`
            SELECT 
                s.model AS satelite,
                a.nome AS atributos
            FROM
                satelite_atributo sa
            JOIN satelite s ON sa.satelite_id = s.id
            JOIN atributos a ON sa.atributo_id = a.id
            WHERE 
                s.id = 1;
                `)
        res.json(result.rows)
    } catch (err) {
        const error = err as Error;
        console.log("Erro: ", err)
        res.status(500).json({message: "Error ao buscar dados", error: error.message})  
    }
});

router.get('/satellite/HorizonIX', async (req, res) => {
   
    
    try{
        const result = await client.query(`
        SELECT 
            s.model AS satelite,
            a.nome AS atributos
        FROM
            satelite_atributo sa
        JOIN satelite s ON sa.satelite_id = s.id
        JOIN atributos a ON sa.atributo_id = a.id
        WHERE 
            s.id = 2;
                `)
        res.json(result.rows)
    } catch (err) {
        const error = err as Error;
        console.log("Erro: ", err)
        res.status(500).json({message: "Error ao buscar dados", error: error.message})  
    }
});

router.get('/satellite/TitanV', async (req, res) => {
    try{
        const result = await client.query(`
            SELECT 
                s.model AS satelite,
                a.nome AS atributos
            FROM
                satelite_atributo sa
            JOIN satelite s ON sa.satelite_id = s.id
            JOIN atributos a ON sa.atributo_id = a.id
            WHERE 
                s.id = 3;
                `)
        res.json(result.rows)
    } catch (err) {
        const error = err as Error;
        console.log("Erro: ", err)
        res.status(500).json({message: "Error ao buscar dados", error: error.message})  
    }
});


router.post('/post', (req, res) => {
    console.log(req.body)

    res.status(StatusCodes.OK).json(req.body)
});


export default router