import { USERS, RELATIONS } from './data'

const STORIES = []
const FEEDS_STORIES = []

function postAStory(data) {
  STORIES.push(data);
}

function MostafaPostStory() {
  postAStory({
    id: 1,
    ownerId: USERS[0].id,
    pictureUrl: 'mostafa image 1',
    createAt: new Date()
  })
  postAStory({
    id: 2,
    ownerId: USERS[0].id,
    pictureUrl: 'mostafa image 2',
    createAt: new Date()
  })
}

function MohammadPostStory() {
  postAStory({
    id: 3,
    ownerId: USERS[1].id,
    pictureUrl: 'mohammad image1',
    createAt: new Date()
  })
}

function init() {

}

