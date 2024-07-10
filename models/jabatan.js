'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jabatan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Jabatan.init({
    jabatan: DataTypes.STRING,
    tahun: DataTypes.DATE,
    bidangId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Jabatan',
  });
  return Jabatan;
};