import { Test, TestingModule } from '@nestjs/testing';
import { SuitbookingController } from './suitbooking.controller';
import { SuitbookingService } from './suitbooking.service';

describe('SuitbookingController', () => {
  let controller: SuitbookingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuitbookingController],
      providers: [SuitbookingService],
    }).compile();

    controller = module.get<SuitbookingController>(SuitbookingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
