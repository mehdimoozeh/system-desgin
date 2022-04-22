export interface IStory {
  id: number;
  ownerId: number;
  pictureUrl: string;
  createAt: Date;
}

export interface IStoryFeed extends IStory {
  seen: boolean;
}
