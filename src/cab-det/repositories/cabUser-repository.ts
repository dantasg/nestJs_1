import { userCab } from '@prisma/client';

export abstract class CabUserRepository {
  abstract create(
    firstname: string,
    finalname: string,
    email: string,
    descriptions: Description[],
  ): Promise<userCab>;

  abstract getAll(): Promise<userCab[] | null>;
}
