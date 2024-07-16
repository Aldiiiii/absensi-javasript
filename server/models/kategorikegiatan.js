'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class KategoriKegiatan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  KategoriKegiatan.init({
    kategoriKegiatan: DataTypes.STRING,
    jabatanId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'KategoriKegiatan',
  });
  return KategoriKegiatan;
};