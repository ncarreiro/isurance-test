# I-surance Frontend test by Nahuel Carreiro #

## Page preview ##

[Demo](https://ncarreiro.github.io/isurance-test)

## Run project ##

1.	``yarn install`` or ``npm install``
2.	``yarn start`` or ``npm start``

## Run tests ##

``yarn test`` or ``npm test``

## Test information ##

Welcome to i-surance Frontend Developer Test!

This test intends to cover several skills and tools. You can still pass it without completing all the parts, so don't give up if it's incomplete.

You've got 60 minutes to complete it. Please take into account that time is tight so if you struggle at some point, maybe it's better to skip that part (or write some pseudo-code at least) and give a try to others!

So, read carefully the instructions and good luck!

## Delivery ##

We know you would like to do the PR, but given Read access doesn't allow it, so please send a zip file with the code you've prepared. Thanks!

## Business case ##

Product Owner, as part of the Epic "Social feed", needs you to implement a story:

### ISU-231 | Tweets page ###

Build a web app consuming the [twitter public api](https://developer.twitter.com/en/docs/tweets/search/api-reference/get-search-tweets.html) using [React](https://reactjs.org/) and a state manager.

You can use any react boilerplate that you want and any library.

There is freedom regarding the design pattern and architecture of your app but you must accomplish the following steps:

1.	API calls must be done via actions 
2.	It must be responsive 
3.	In the top of the app we need a text input to search tweets about a topic, this input will start the search automatically, but only after user stops typing in a natural way.
4.	The app must display a feed (tweets list) of tweets in Spanish with topic #hulk by default. 
5.	The app must prevent empty feed cases displaying some kind of placeholder
6.	Each tweet must display the avatar of this creator, his name and the text whit different color or style for mentions of users and hashtags

Extra points:


* Use of Redux (thunk / Redux Saga / redux-observable) or MobX.
* Demonstrate domain of RxJs
* Use infinite scroll in the list to show tweets
* Use functional components as much as you can.
* Test with jest
* Style using styled-components with polished and/or flex-box.
* Demonstrate domain of ES6 with good praxis without any killer like flow or typescript
* Avoid to use binded or arrow functions inside renders



![Mockup](https://photos-2.dropbox.com/t/2/AAAeTQi8WNuplbmu2CyqUxtWnclposnu-3_6BqZILetW8g/12/6104165/png/32x32/1/_/1/2/testmockup.png/EJ2IxwQYldcYIAIoAg/Szamul6vnpcbrHu4SAokjQRsTkK4Nc9GgG13Rt8lpug?preserve_transparency=1&size=2048x1536&size_mode=3)


## Contact ##
If you have any doubt during the process, please contact alvaro.moya@i-surance.es
