import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TagTask } from './entities/tagTask.entity';
import { TagModule } from './modules/tag/tag.module';
import { TaskModule } from './modules/task/task.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ec2-23-21-229-200.compute-1.amazonaws.com',
      port: 5432,
      username: 'vclqoutrvimtlu',
      password: '6310e0fb7d2fa08861e86085b5b1afdd9f2a5ec9bacbb8f260ecc6275fcf4a9a',
      database: 'd78hnf5vakqo0h',
      entities: ['dist/entities/*.entity.js'],
      synchronize: true,
      ssl: { rejectUnauthorized: false }
      //Para que todos los cambios se sincronicen con la BD
    }),
    UserModule,
    TagModule,
    TaskModule,
    TagTask
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
