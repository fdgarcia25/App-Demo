import { connet } from "../database";



export const getClientes = async (req, res) =>{
    const connection = await connet();
    const [rows]= await connection.query('select * from clientes');
    res.json(rows);
}


export const getCliente = async(req, res) =>{
    const connection = await connet();
    const [rows]= await connection.query('select * from clientes where id=?',[req.params.id]);
    res.json(rows[0]);
}

export const getClienteCount = async (req, res) =>{
    const connection = await connet();
    const [rows]= await connection.query('SELECT count(*) FROM clientes');
    
    res.json(rows[0]["count(*)"]);
}

export const saveClientes = async (req, res) =>{
    const connection = await connet();
    const [result] = await connection.query('Insert into clientes(nombre,apellidos,edad,correo,nacionalidad,ci) Values(?,?,?,?,?,?)',[req.body.nombre, req.body.apellidos, req.body.edad, req.body.correo, req.body.nacionalidad,req.body.ci]);
    res.json({
        id:result.insertId,
        ...req.body,
    })
}

export const getClientesOrname = async (req, res) =>{
    const connection = await connet();
    const [rows]= await connection.query('select * from clientes ORDER BY nombre');
    console.log(rows);
    res.json(rows);
}

export const getClientesOredad = async (req, res) =>{
    const connection = await connet();
    const [rows]= await connection.query('select * from clientes ORDER BY edad');
    console.log(rows);
    res.json(rows);
} 
 
export const deleteClientes = async (req, res) =>{
    const connection = await connet();
    await connection.query('delete from clientes where id=?',[req.params.id]);
    res.sendStatus(204);
}

export const updateClientes = async (req, res) =>{
    const connection = await connet();
    const result = await connection.query('update clientes set ? where id = ?',
    [req.body, 
    req.params.id]);
        console.log(result);
    res.sendStatus(204);
    
}

/*

*/