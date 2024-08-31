import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateEmailDto } from '../dto/create-email.dto';
import { EmailRepository } from '../repositories/emails.repository';
import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from '@prisma/client/runtime/library';
import { EmailEntity } from '../entities/email.entity';
import { Prisma } from '@prisma/client';

@Injectable()
export class EmailsService {
  constructor(private readonly emailRepository: EmailRepository) {}
  async create(createEmailDto: CreateEmailDto) {
    try {
      const createdApplicant =
        await this.emailRepository.create(createEmailDto);
      return {
        message: `Applicant ${createdApplicant.name} created successfully.`,
        email_data: new EmailEntity(createdApplicant),
      };
    } catch (error) {
      if (error instanceof PrismaClientValidationError)
        throw new BadRequestException(error.message);
      else throw error;
    }
  }

  async findAll(size: number, page: number) {
    try {
      const searchedApplicants = await this.emailRepository.findAll(size, page);
      return searchedApplicants;
    } catch (error) {
      if (error instanceof PrismaClientValidationError)
        throw new BadRequestException(error.message);
      else throw error;
    }
  }

  async findOne(id: Prisma.ApplicantWhereUniqueInput) {
    try {
      const searchedApplicant = await this.emailRepository.findOne(id);
      return new EmailEntity(searchedApplicant);
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError)
        throw new NotFoundException('Applicant not found', error.message);
      else if (error instanceof PrismaClientValidationError)
        throw new BadRequestException(error.message);
      else throw error;
    }
  }
}
