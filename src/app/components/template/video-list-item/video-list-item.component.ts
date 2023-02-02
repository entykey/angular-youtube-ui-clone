import { Component, Input } from "@angular/core";

@Component({
  selector: "app-video-list-item",
  templateUrl: "./video-list-item.component.html",
  styleUrls: ["./video-list-item.component.css"],
})
export class VideoListItemComponent {
  @Input() thumbnailUrl: string;
  @Input() ownerAvatarUrl: string;
  @Input() ownerName: string;
  @Input() videoTitle: string;

  constructor() {}

  ngOnInit() {}
}
