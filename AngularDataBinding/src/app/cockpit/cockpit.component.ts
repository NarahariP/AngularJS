import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';
  @Output('serverCreatedWithAlias') serverCreated = new EventEmitter<{
    name: string;
    content: string;
  }>();
  @Output('blueprintCreatedWithAlias') blueprintCreated = new EventEmitter<{
    name: string;
    content: string;
  }>();

  @ViewChild('newServerNameInput') newServerNameInput: ElementRef;
  @ViewChild('newServerContentInput') newServerContentInput: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  addNewServer() {
    this.serverCreated.emit({
      name: this.newServerNameInput.nativeElement.value,
      content: this.newServerContentInput.nativeElement.value,
    });
  }

  addBluePrint() {
    this.blueprintCreated.emit({
      name: this.newServerNameInput.nativeElement.value,
      content: this.newServerContentInput.nativeElement.value,
    });
  }
}
