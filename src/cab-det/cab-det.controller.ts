import { CabDetService } from './cab-det.service';
import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { CreateCabDetBody } from './dtos/cabDet-body-created.dtos';
import { Response } from 'express';

@Controller('cabdet')
export class CabDetController {
  constructor(private readonly cabDetService: CabDetService) {}
  @Get()
  async index() {
    return this.cabDetService.getAll();
  }

  @Post()
  async create(@Body() body: CreateCabDetBody, @Res() res: Response) {
    const { firstname, finalname, email, descriptions } = body;

    const ret = await this.cabDetService.create(
      firstname,
      finalname,
      email,
      descriptions,
    );

    if (ret !== null) {
      return res.status(201).json(ret);
    } else {
      return res.status(401).json({
        message: 'Ocorreu um erro na requisição, tente novamente mais tarde!',
      });
    }
  }
}
