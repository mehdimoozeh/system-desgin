# System design problems

### Instagram
#### 1. Instagram's story feature.  
Instead of fetching stories from database and then prepare feed I want to see feed as a queue and then push story into it! It means that you do not need to find the stories every single time!
I am going to make a separate feed(queue) for each user by using a queue and then when I post a story I am going to find my followers and push my story into their feeds. So everyone has their own ready feed and, It just needs to be fetched.
In one sentence, your feed will be manipulated by people which you are following them.
![Sample](sample.png)


#### 2. Seen or notSeen problem?
When you add story into a user feed you can just add a `seen` field into the object.

#### 3. Sort problem
By using a `prioritized queue`, we can keep every queue sorted in that way we want!

## Advantage  
 - You will have sorted feed of story and just fetch it!  

## Disadvantage
- If you want to delete a story, you have to go through all users' feed!
