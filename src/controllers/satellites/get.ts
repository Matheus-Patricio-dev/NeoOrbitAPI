import { Request, Response } from "express";
import client from "../../database";
import { StatusCodes } from "http-status-codes";


export const get = async (req: Request, res: Response) => {
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
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: "Error ao buscar dados", error: error.message})  
    }
}