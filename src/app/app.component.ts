import { Component } from '@angular/core';
import { PwaService } from './services/pwa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Install PWA DOIS';

  constructor(public Pwa: PwaService) {}

  installPwa(): void {
    this.Pwa.promptEvent.prompt();
  }
}
