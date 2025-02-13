const { Pool } = require("pg");

const config = {    
    user: 'postgres',
    host: 'localhost',
    database: 'node_ejemplo',
    password: 'postgres',
    port: 5432,
};

const pool = new Pool(config);

module.exports = {
	query: (text, params) => pool.query(text, params),
};