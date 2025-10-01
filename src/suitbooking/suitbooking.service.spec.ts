import { Test, TestingModule } from '@nestjs/testing';
import { SuitBookingService } from './suitbooking.service';

describe('SuitbookingService', () => {
  let service: SuitBookingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuitBookingService],
    }).compile();

    service = module.get<SuitBookingService>(SuitBookingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
