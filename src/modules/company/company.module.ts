import { Module }            from '@nestjs/common';
import { CompanyController } from './company.controller';
import { CompanyService }    from './company.service';
import { TypeOrmModule }     from '@nestjs/typeorm';
import { CompanyEntity }     from '@modules/company/entities/company.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ CompanyEntity ])
  ],
  controllers: [ CompanyController ],
  providers: [ CompanyService ]
})
export class CompanyModule {}
