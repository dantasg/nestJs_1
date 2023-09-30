import { userDet } from '@prisma/client';

export abstract class DetUserRepository {
  abstract getAll(): Promise<userDet[]>;
}
