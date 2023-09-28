import { IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';
import { RegexUtil } from 'src/utils/regex.util';

export class CreateUserBody {
  @IsNotEmpty()
  fisrtname: string;

  @IsNotEmpty()
  finalname: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Matches(RegexUtil.password, {
    message:
      'A senha deve conter letras maiúsculas, minúsculas, números e caracteres especiais!',
  })
  password: string;
}
