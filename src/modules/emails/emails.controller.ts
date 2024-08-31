import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { EmailsService } from './services/emails.service';
import { CreateEmailDto } from './dto/create-email.dto';
import { Prisma } from '@prisma/client';

@Controller('emails')
export class EmailsController {
  constructor(private readonly emailsService: EmailsService) {}

  @Post()
  create(@Body() createEmailDto: CreateEmailDto) {
    return this.emailsService.create(createEmailDto);
  }

  @Get()
  findAll(@Query('size') size: number, @Query('page') page: number) {
    return this.emailsService.findAll(size, page);
  }

  @Get(':id')
  findOne(@Param() id: Prisma.ApplicantWhereUniqueInput) {
    return this.emailsService.findOne(id);
  }
}
