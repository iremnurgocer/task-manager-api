import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';

const JWT_SECRET = process.env.JWT_SECRET || 'defaultsecret';

export const registerUser = async (name: string, email: string, password: string) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });
    return user;
};

export const loginUser = async (email: string, password: string) => {
    const user = await User.findOne({ where: { email } });
    if (!user) throw new Error('Email veya şifre hatalı');

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Error('Email veya şifre hatalı');

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1d' });
    return { user, token };
};
