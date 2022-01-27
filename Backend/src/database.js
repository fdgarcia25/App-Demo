import mysql from 'mysql2/promise'
import {config} from './config'

export const connet = async ()=> {
    return await mysql.createConnection(config)


}
