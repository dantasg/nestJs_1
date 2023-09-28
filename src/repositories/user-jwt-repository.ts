import { UserJWT } from '@prisma/client';

export abstract class UserJWTRepository {
  abstract create(
    firstname: string,
    finalname: string,
    email: string,
    password: string,
  ): Promise<void>;

  abstract getAll(): Promise<void>;

  abstract getOneByEmail(email: string): Promise<UserJWT | null>;
}
