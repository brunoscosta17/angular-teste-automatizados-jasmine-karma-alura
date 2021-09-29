import { UniqueIdService } from './../../services/unique-id/unique-id.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-like-widget',
  templateUrl: './like-widget.component.html',
  styleUrls: ['like-widget.component.scss']
})
export class LikeWidgetComponent implements OnInit {

  @Input() likes = 0;
  @Input() id = null;

  @Output() liked = new EventEmitter<void>();

  public fonts = {
    faThumbsUp
  }

  constructor(private uniqueIdService: UniqueIdService) {}

  ngOnInit(): void {
    !this.id ? this.id = this.uniqueIdService.generateUniqueIdWithPrefix('like-widget') : this.id = null;
  }

  like(): void {
    this.liked.emit();
  }

}
