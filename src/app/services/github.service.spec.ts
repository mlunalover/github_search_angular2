/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { GithubService } from './github.service';

describe('Service: Github', () => {
  beforeEach(() => {
    addProviders([GithubService]);
  });

  it('should ...',
    inject([GithubService],
      (service: GithubService) => {
        expect(service).toBeTruthy();
      }));
});
