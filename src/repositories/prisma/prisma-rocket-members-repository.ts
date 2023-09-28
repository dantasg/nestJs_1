import { PrismaService } from './../../database/prisma.service';
import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { RocketMembersRepository } from '../rocket-members-repositort';

@Injectable()
export class PrimaRocketMembersRepository implements RocketMembersRepository {
  constructor(private prisma: PrismaService) {}

  async create(name: string, memberFunction: string): Promise<void> {
    await this.prisma.rocketTeamMember.create({
      data: {
        id: randomUUID(),
        name,
        function: memberFunction,
      },
    });
  }
}
