const { User } = require("../models");

module.exports = {
  create(createArgs) {
    return User.create(createArgs);
  },

  update(id, updateArgs) {
    return User.update(updateArgs, {
      where: {
        id,
      },
    });
  },

  delete(id) {
    return User.destroy(id);
  },

  find(id) {
    return User.findByPk(id);
  },

  findAll() {
    return User.findAll();
  },

  findOne(email) {
    return User.findOne({
      where : { email : email }
    });
  },

  getTotalUser() {
    return User.count();
  },
};
