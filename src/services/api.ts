import axios from 'axios'


export const evoApi = axios.create({
    baseURL:'https://evo-integracao.w12app.com.br/api/v1'
})
