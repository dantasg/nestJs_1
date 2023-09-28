import { Injectable } from '@nestjs/common';
import { UserJWTRepository } from 'src/repositories/user-jwt-repository';
import { UserJWT } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly userJWTRepository: UserJWTRepository) {}

  async findAll() {
    const users = await this.userJWTRepository.getAll();

    return users;
  }

  async create(
    firstname: string,
    finalname: string,
    email: string,
    password: string,
  ) {
    const user = await this.userJWTRepository.create(
      firstname,
      finalname,
      email,
      password,
    );

    return {
      message: 'Usuário criado com sucesso!',
      user,
    };
  }

  async getOneByEmail(email: string): Promise<UserJWT | null> {
    const user = await this.userJWTRepository.getOneByEmail(email);

    return user;
  }
}
