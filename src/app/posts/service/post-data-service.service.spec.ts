import { TestBed } from '@angular/core/testing';

import { PostDataServiceService } from './post-data-service.service';

describe('PostDataServiceService', () => {
  let service: PostDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
