import { Injectable } from '@nestjs/common';
import { CabUserRepository } from './repositories/cabUser-repository';
import { DetUserRepository } from './repositories/detUser-repository';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class CabDetService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly cabUserRepository: CabUserRepository,
    private readonly detUserRepository: DetUserRepository,
  ) {}

  async getAll() {
    const cabUsers = await this.cabUserRepository.getAll();
    const detUsers = await this.detUserRepository.getAll();

    return {
      cabUsers,
      detUsers,
    };
  }

  async create(
    firstname: string,
    finalname: string,
    email: string,
    descriptions: Description[],
  ) {
    const cab = await this.cabUserRepository.create(
      firstname,
      finalname,
      email,
      descriptions,
    );

    if (cab !== null) {
      return {
        message: 'User Cab e det salvos com sucesso!',
        user: cab,
      };
    } else {
      return null;
    }
  }
}
