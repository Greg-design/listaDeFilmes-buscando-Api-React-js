import axios from "axios";

// Base URL > https://sujeitoprogramador.com/

// https://sujeitoprogramador.com/r-api/?api=filmes/ (url toda)

// r-api/?api=filmes/ > (todos os filmes)

//  r-api/?api=filmes/123 > (TRAZ O FILME COM O ID 123)

const api = axios.create({
    baseURL:'https://sujeitoprogramador.com'
})

export default api