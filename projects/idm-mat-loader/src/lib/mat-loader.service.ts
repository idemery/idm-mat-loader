import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatLoaderService {

  isLoading = new Subject<boolean>();
  succeeded = new Subject<boolean>();
  failed = new Subject<boolean>();

  show() {
      this.isLoading.next(true);
  }
  hide() {
      this.isLoading.next(false);
  }
  showSuccess() {
      this.succeeded.next(true);
      setTimeout(() => {
          this.succeeded.next(false);
      }, 800);
  }
  showFail() {
      this.failed.next(true);
      setTimeout(() => {
          this.failed.next(false);
      }, 800);
  }
}
