import { Injectable } from '@angular/core';
import { Story } from './story.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class StoryService {
  stories: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.stories = database.list('stories');
  }

  getStories() {
    return this.stories;
  }

  addStory(newStory: Story) {
    this.stories.push(newStory);
  }

  getStoryById(storyId: number){
    return this.database.object('stories/' + storyId);
  }

}
