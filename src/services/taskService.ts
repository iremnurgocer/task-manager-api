import Task from '../models/Task';

export const getTasks = async (userId: number) => {
    return await Task.findAll({ where: { userId } });
};

export const createTask = async (
  title: string,
  userId: number,
  completed: boolean = false,
  dueDate?: string
) => {
  return await Task.create({
    title,
    userId,
    completed,
    dueDate: dueDate ? new Date(dueDate) : null
  });
};

export const updateTask = async (
  id: number,
  userId: number,
  updates: {
    completed?: boolean;
    title?: string;
    dueDate?: string;
  }
) => {
  const task = await Task.findOne({ where: { id, userId } });
  if (!task) throw new Error('Görev bulunamadı');

  if (updates.title !== undefined) task.title = updates.title;
  if (updates.completed !== undefined) task.completed = updates.completed;
  if (updates.dueDate !== undefined) {
    task.dueDate = updates.dueDate ? new Date(updates.dueDate) : null;
  }

  return await task.save();
};

export const deleteTask = async (id: number, userId: number) => {
  const task = await Task.findOne({ where: { id, userId } });
  if (!task) throw new Error('Görev bulunamadı');
  return await task.destroy();
};
