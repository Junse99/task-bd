import { Module } from '@nestjs/common';
import { TagTaskService } from './tag-task.service';
import { TagTaskController } from './tag-task.controller';

@Module({
  providers: [TagTaskService],
  controllers: [TagTaskController]
})
export class TagTaskModule {}
