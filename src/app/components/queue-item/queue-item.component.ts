import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

@Component({
  selector: 'queue-item',
  templateUrl: './queue-item.component.html',
  styleUrls: ['./queue-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QueueItemComponent implements OnInit {
  @Input() item: any;
  constructor() {}

  ngOnInit(): void {}
}
