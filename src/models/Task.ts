import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';
import User from './User';

export interface ITask extends Model {
    dueDate: Date | null;
    id: number;
    title: string;
    completed: boolean;
    userId: number;
}

const Task = sequelize.define<ITask>('Task', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    dueDate: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null
    }
});

// Kullanıcıyla ilişki kur
User.hasMany(Task, { foreignKey: 'userId' });
Task.belongsTo(User, { foreignKey: 'userId' });

export default Task;
