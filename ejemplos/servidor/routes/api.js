const Router = require("express").Router;

const TransformacionesService = require("../services/transformaciones");

module.exports = () => {

	const api = new Router();

    api.get("/transformaciones", async (req, res) => {

		res.json(await TransformacionesService.getTransformaciones());

	})

	api.get("/transformaciones/:id", async (req, res) => {

		const { id } = req.params;
		res.json(await TransformacionesService.getTransformacionById(id));

	});

	api.post("/transformaciones", async (req, res) => {

        const { srs_origen, x_origen, y_origen, srs_destino, x_destino, y_destino } = req.body;
		res.json(await TransformacionesService.createTransformacion(srs_origen, x_origen, y_origen, srs_destino, x_destino, y_destino));

	});

	return api;

};