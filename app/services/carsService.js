const carsRepository = require("../repositories/carsRepository");

module.exports = {
  async create(requestBody) {
    return carsRepository.create(requestBody);
  },

  async update(id, requestBody) {
    return carsRepository.update(id, requestBody);
  },

  async delete(id) {
    return carsRepository.delete(id);
  },

  async list() {
    try {
      const cars = await carsRepository.findAll();
      const carsCount = await carsRepository.getTotalCars();

      return {
        data: cars,
        count: carsCount,
      };
    } catch (err) {
      throw err;
    }
  },

  async get(id) {
    return carsRepository.find(id);
  },

};
