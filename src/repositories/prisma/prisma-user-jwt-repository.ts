import { PrismaService } from '../../database/prisma.service';
import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { UserJWTRepository } from '../user-jwt-repository';
import { hashSync } from 'bcrypt';
import { UserJWT } from '@prisma/client';

@Injectable()
export class PrismaUserJwtRepository implements UserJWTRepository {
  constructor(private prisma: PrismaService) {}

  async getOneByEmail(email: string): Promise<UserJWT | null> {
    const user = await this.prisma.userJWT.findFirst({
      where: {
        email: email,
      },
    });

    return user;
  }

  async create(
    firstname: string,
    finalname: string,
    email: string,
    password: string,
  ): Promise<void> {
    const hashPassword = hashSync(password, 10);

    await this.prisma.userJWT.create({
      data: {
        firstname,
        finalname,
        email,
        password: hashPassword,
      },
    });
  }

  async getAll(): Promise<void> {
    await this.prisma.userJWT.findMany();
  }
}
