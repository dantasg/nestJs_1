import { AuthGuard } from '@nestjs/passport';
import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Body,
  Injectable,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserBody } from 'src/dtos/create-user-body';

@Injectable()
@Controller('api/v1/user')
@UseGuards(AuthGuard('jwt'))
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async index() {
    return this.userService.findAll();
  }

  @Post()
  async store(@Body() body: CreateUserBody) {
    const { fisrtname, finalname, email, password } = body;
    return this.userService.create(fisrtname, finalname, email, password);
  }

  // @Get(':id')
  // async show() {
  //   return null;
  // }

  // @Put(':id')
  // async update() {
  //   return null;
  // }

  // @Delete(':id')
  // async destroy() {
  //   return null;
  // }
}
