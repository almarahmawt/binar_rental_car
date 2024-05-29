
const carsService = require("../../../services/carsService");

module.exports = {
  async list(req, res) {
    try {
        const cars = await carsService.list();    
        res.status(201).json({
            status: "OK",
            data: { cars: cars },
            meta: { total: count },
          });
    } catch(err) {
        res.status(400).json({ message: err });
    }
  },

  async create(req, res) {
    try {
        const car = await carsService.create(req.body);    
        res.status(201).json({
            status: "OK",
            data: car,
          });
    } catch {
        res.status(404).json({ message: "Data tidak berhasil diinput." });
    }
  },

  async update(req, res) {
    try {
        const car = await carsService.update(req.params.id, req.body);    
        res.status(201).json({
            status: "OK",
            data: car,
          });
    } catch {
        res.status(404).json({ message: "Data tidak berhasil diupdate." });
    }
  },

  async show(req, res) {
    try {
        const car = await carsService.get(req.params.id);
        res.status(201).json({
            status: "OK",
            data: car,
          });
    } catch(err) {
        res.status(404).json({ message: err });
    }
  },

  async destroy(req, res) {
    try {
        await carsService.delete(req.params.id);    
        res.status(204).json({
            status: "Data berhasil dihapus"
          });
    } catch {
        res.status(404).json({ message: err });
    }
  },
};
