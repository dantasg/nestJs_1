import { PrismaService } from 'src/database/prisma.service';
import { Injectable } from '@nestjs/common';
import { CabUserRepository } from '../cabUser-repository';
import { userCab } from '@prisma/client';

@Injectable()
export class PrismaCabUserRepository implements CabUserRepository {
  user: userCab;

  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<userCab[]> {
    const cabUsers = await this.prisma.userCab.findMany();

    return cabUsers;
  }

  async create(
    firstname: string,
    finalname: string,
    email: string,
    descriptions: Description[],
  ): Promise<userCab | null> {
    try {
      await this.prisma.$transaction(async elements => {
        // Create cab
        const cabUser = await elements.userCab.create({
          data: {
            firstname,
            finalname,
            email,
          },
        });

        this.user = cabUser;

        for (const el of descriptions) {
          await elements.userDet.create({
            data: {
              userCabId: this.user.id,
              description: el.description,
              phone: el.phone,
            },
          });
        }
      });
    } catch (error) {
      console.log('null');
      console.log(error);
      return null;
    }

    return this.user;
  }
}
