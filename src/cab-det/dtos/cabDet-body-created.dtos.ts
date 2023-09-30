import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateCabDetBody {
  @IsNotEmpty()
  @Length(5, 100)
  firstname: string;

  @IsNotEmpty()
  @Length(5, 100)
  finalname: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  descriptions: Description[];
}
