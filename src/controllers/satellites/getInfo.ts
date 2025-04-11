import { Request, Response } from "express"; 
import client from "../../database";
import { StatusCodes } from "http-status-codes";

export const getInfo = async (req:Request, res:Response) => {
    const { id } = req.params
    const numId = Number(id)

    if (!id || isNaN(numId) || numId < 1 || numId > 3) {
        
        return res.status(StatusCodes.BAD_REQUEST).json({message:"ID inválido! Digite um número entre 1 e 3!"})
    }

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
                s.id = $1;
                `,[id])
        res.json(result.rows)
    } catch (err) {
        const error = err as Error;
        console.log("Erro: ", err)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: "Error ao buscar dados", error: error.message})  
    }
}