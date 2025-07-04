import {Request, Response} from 'express';
import * as taskService from '../services/taskService';

export const getAll = async (req: any, res: Response) => {
    const tasks = await taskService.getTasks(req.user.id);
    res.json(tasks);
};

export const create = async (req: any, res: Response) => {
    const task = await taskService.createTask(req.body.title, req.user.id);
    res.status(201).json(task);
};

export const update = async (req: any, res: Response) => {
    const task = await taskService.updateTask(
        parseInt(req.params.id),
        req.user.id,
        req.body.completed
    );
    res.json(task);
};

export const remove = async (req: any, res: Response) => {
    await taskService.deleteTask(parseInt(req.params.id), req.user.id);
    res.status(204).send();
};
