'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Absen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Absen.init({
    jamMasuk: DataTypes.DATE,
    fotoMasuk: DataTypes.STRING,
    latMasuk: DataTypes.STRING,
    langMasuk: DataTypes.STRING,
    jamKeluar: DataTypes.STRING,
    fotoKeluar: DataTypes.STRING,
    fotoKeluar: DataTypes.STRING,
    latKeluar: DataTypes.STRING,
    langKeluar: DataTypes.STRING,
    pegawaiId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Absen',
  });
  return Absen;
};