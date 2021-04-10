import { Test, TestingModule } from '@nestjs/testing';
import { TagTaskController } from './tag-task.controller';

describe('TagTaskController', () => {
  let controller: TagTaskController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TagTaskController],
    }).compile();

    controller = module.get<TagTaskController>(TagTaskController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
