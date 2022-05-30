import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'train-app';
  

  onSave(event?: MouseEvent) {
    const evtMsg = event ? ' Event target is ' + (event.target as HTMLElement).textContent : '';
    alert('Saved.' + evtMsg);
    if (event) { event.stopPropagation(); }
  }
}

alert("Test");
alert("");
