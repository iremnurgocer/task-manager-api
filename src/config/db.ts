import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './task-manager.sqlite', // veritabanı dosyası buraya yazılacak
    logging: false
});

export default sequelize;
