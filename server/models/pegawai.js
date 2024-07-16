'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pegawai extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pegawai.init({
    nip: DataTypes.STRING,
    nama: DataTypes.STRING,
    tmpLahir: DataTypes.STRING,
    tglLahir: DataTypes.DATE,
    alamat: DataTypes.TEXT,
    telepon: DataTypes.STRING,
    foto: DataTypes.STRING,
    pendidikan: DataTypes.STRING,
    tglMulaiKerja: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    noSpk: DataTypes.STRING,
    tte: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pegawai',
  });
  return Pegawai;
};