
import { server } from "./server/server"


// Servidor
server.listen(process.env.PORT, () => {
    console.log("Servidor rodando com typescript!")
})