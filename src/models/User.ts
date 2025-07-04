import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';

export interface IUser extends Model {
    id: number;
    name: string;
    email: string;
    password: string;
}

const User = sequelize.define<IUser>('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default User;
