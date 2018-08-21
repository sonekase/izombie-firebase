import { Component, OnInit } from '@angular/core';
import { Story } from '../story.model';
import { Router } from '@angular/router';
import { StoryService } from '../story.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css'],
  providers: [StoryService]
})
export class StoryComponent implements OnInit {
  storyId: number;
  storyToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private storyService: StoryService){}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.storyId = urlParameters['id'];
    });
    this.storyToDisplay = this.storyService.getStoryById(this.storyId);
  }
}
