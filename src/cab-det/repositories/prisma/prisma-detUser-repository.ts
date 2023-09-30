import { PrismaService } from 'src/database/prisma.service';
import { Injectable } from '@nestjs/common';
import { DetUserRepository } from '../detUser-repository';
import { userDet } from '@prisma/client';

@Injectable()
export class PrismaDetUserRepository implements DetUserRepository {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<userDet[]> {
    const cabDets = await this.prisma.userDet.findMany();

    return cabDets;
  }
}
