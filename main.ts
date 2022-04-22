import {USERS, RELATIONS, STORIES} from './database'
import {IStory, IStoryFeed} from './interface'

function getRandomUserId(max: number): number {
  return Math.floor(Math.random() * max)
}

const feedQueueForStories: { [key: string]: IStoryFeed[] } = {}

function initialFeedQueue() {
  USERS.forEach(user => feedQueueForStories[user.id.toString()] = [])
}

function printFeedQueue(): void {
  Object.keys(feedQueueForStories)
    .forEach( key => console.log(`User(${key}) -> feedItem(${feedQueueForStories[key].length})`));
}

function pushToMyFollowersFeed(story: IStory): void {
  // IMAGINE THIS IS A SELECT QUERY.
  // SELECT sourceId as myFollowers FROM relation_table WHERE targetId = story.ownerId;
  const myFollowers = RELATIONS.filter(relation => relation.targetId === story.ownerId).map(item => item.sourceId)
  myFollowers.forEach(followerId => {
    feedQueueForStories[followerId].push({
      ...story,
      seen: false
    })
  })
  printFeedQueue()
}

function postAStory(story: IStory): void {
  STORIES.push(story)
  pushToMyFollowersFeed(story)
  console.log(`${story.ownerId} created a story!`)
}

let storyId = 1000

function someonePostAStory(): void {
  const storyOwnerId = getRandomUserId(USERS.length)
  postAStory({
    id: ++storyId,
    ownerId: USERS[storyOwnerId].id,
    pictureUrl: 'https://image.com/' + Date.now().toString(),
    createAt: new Date()
  })
}

function start(): void {
  initialFeedQueue()
}

setInterval(someonePostAStory, 5000)
start()

