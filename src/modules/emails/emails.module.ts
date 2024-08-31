import { Module } from '@nestjs/common';
import { EmailsService } from './services/emails.service';
import { EmailsController } from './emails.controller';
import { EmailRepository } from './repositories/emails.repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [EmailsController],
  providers: [EmailsService, EmailRepository, PrismaService],
})
export class EmailsModule {}
