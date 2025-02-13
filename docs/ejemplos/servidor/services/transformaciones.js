const db = require("../db/db");

class TransformacionesService {

	static async getTransformaciones() {

		const SQL = "SELECT * FROM public.transformacion";

		const {rows} = await db.query(SQL);

		return rows;

    }
    
    static async getTransformacionById(id) {

		const SQL = "SELECT * FROM public.transformacion WHERE id = $1";

		const {rows} = await db.query(SQL, [id]);

		return rows;

    }


    static async createTransformacion(srs_origen, x_origen, y_origen, srs_destino, x_destino, y_destino) {

		const SQL = "INSERT INTO public.transformacion (srs_origen, x_origen, y_origen, srs_destino, x_destino, y_destino) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";

		const {rows} = await db.query(SQL, [srs_origen, x_origen, y_origen, srs_destino, x_destino, y_destino]);

        return rows;

    }

}

module.exports = TransformacionesService;