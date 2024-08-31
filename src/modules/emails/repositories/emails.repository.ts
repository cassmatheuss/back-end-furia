import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';
import { EmailEntity } from '../entities/email.entity';

@Injectable()
export class EmailRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async create(
    data: Prisma.ApplicantUncheckedCreateInput,
  ): Promise<EmailEntity> {
    try {
      return await this.prisma.applicant.create({
        data,
      });
    } catch (error) {
      console.log(`An error ocurred while creating a applicant - ${error}`);
      throw error;
    }
  }

  public async findAll(
    size: number,
    page: number,
  ): Promise<Array<EmailEntity>> {
    const limit = size * (parseInt(page as any) - 1);
    try {
      return await this.prisma.applicant.findMany({
        take: parseInt(size as any),
        skip: limit,
      });
    } catch (error) {
      console.log(`An error ocurred while searching applicants - ${error}`);
      throw error;
    }
  }

  public async findOne(id: Prisma.ApplicantWhereInput): Promise<EmailEntity> {
    try {
      return await this.prisma.applicant.findFirstOrThrow({
        where: id,
      });
    } catch (error) {
      console.log(`An error ocurred while searching a applicant - ${error}`);
      throw error;
    }
  }
}
