import { Test, TestingModule } from '@nestjs/testing';
import { TagTaskService } from './tag-task.service';

describe('TagTaskService', () => {
  let service: TagTaskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TagTaskService],
    }).compile();

    service = module.get<TagTaskService>(TagTaskService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
