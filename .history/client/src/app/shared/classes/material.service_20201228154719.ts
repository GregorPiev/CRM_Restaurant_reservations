declare var M;
export class MaterialService {
  static toast(message: string) {
    M.toast({ html: message });
  }

  static initializeFloatingButton() {
    M.FloatingActionButtom.init();
  }
}

