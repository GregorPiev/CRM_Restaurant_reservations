declare var M;
import { ElementRef } from '@angular/core';

export class MaterialService {
  static toast(message: string) {
    M.toast({ html: message });
  }

  static initializeFloatingButton(ref: ElementRef) {

    M.FloatingActionButtom.init(ref.nativeElement);
  }
}

