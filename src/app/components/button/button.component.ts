import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button (click)="btnClicked.emit();" class="cursor-pointer  text-black w-full border px-5 py-2 rounded-xl shadow-md hover:bg-gray-200">
      {{ label() }}
    </button>
  `,
  styles: ``
})
export class ButtonComponent {
 label = input('');

 btnClicked = output();
}
