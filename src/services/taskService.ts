import Task from '../models/Task';

export const getTasks = async (userId: number) => {
    return await Task.findAll({ where: { userId } });
};

export const createTask = async (title: string, userId: number) => {
    return await Task.create({ title, userId });
};

export const updateTask = async (id: number, userId: number, completed: boolean) => {
    const task = await Task.findOne({ where: { id, userId } });
    if (!task) throw new Error('Görev bulunamadı');
    task.completed = completed;
    return await task.save();
};

export const deleteTask = async (id: number, userId: number) => {
    const task = await Task.findOne({ where: { id, userId } });
    if (!task) throw new Error('Görev bulunamadı');
    return await task.destroy();
};
