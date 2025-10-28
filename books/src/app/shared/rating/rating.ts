import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'rating',
  imports: [],
  templateUrl: './rating.html',
  styleUrl: './rating.css',
})
export class Rating implements OnChanges {
  @Input() id: string = '42';
  @Input() stars = 3;
  @Output() plusVote = new EventEmitter<string>();
  @Output() minusVote = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Rating ngOnChanges', changes);
  }

  upVote() {
    console.log('upVote', this.id, this.stars);
    this.plusVote.emit(this.id);
  }
  downVote() {
    console.log('downVote', this.id, this.stars);
    this.minusVote.emit(this.id);
  }
}
