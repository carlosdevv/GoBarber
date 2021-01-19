import { hash } from 'bcryptjs';

import User from '../infra/typeorm/entities/User';
import AppError from '@shared/errors/AppError';

import IUsersRepository from '../repositories/IUsersRepository'

interface Request {
    name: string,
    email: string,
    password: string,
    phone: string,
};

class CreateUserService {
    constructor(private usersRepository: IUsersRepository) { }


    public async execute({ name, email, password, phone }: Request): Promise<User> {

        const checkUserExist = await this.usersRepository.findByEmail(email);

        if (checkUserExist) {
            throw new AppError('Email adress already used.')
        }

        const hashPassword = await hash(password, 8);

        const user = await this.usersRepository.create({
            name,
            email,
            phone,
            password: hashPassword,
        });

        return user;
    }
}

export default CreateUserService;
