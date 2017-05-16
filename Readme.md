# PieceMeal V2

## Overview
This app is designed for users with dietary restrictions. Piecemeal provides users with recipes and ingredients that do not violate their dietary restrictions. Furthermore, PieceMeal users can explore other user-created recipes for new cooking ideas. PieceMeal users can also set up their own dashboard profile where they can keep track of their favorite recipes, ingredients, and analytical information.

### Running the App:
To run PieceMeal:

#### iOS

Download & install [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12) from the App Store.

To initiate React Native, please run these commands in your terminal:
  - `brew install node` to install node
  - `brew install watchman` to install watchman
  - `npm install -g react-native-cli` to install React-Native's command line interface
  - `npm install rnpm -g
  - `npm install react-native-module --save
  - `rnpm link react-native-module
  - `sudo gem install cocoapods

Then, to open the app in the simulator, run:
  - `react-native run-ios

To view the Swagger UI interface:

```
open http://piecemeal-api.herokuapp.com/api-docs/
```

Overall the functionality of your application looks great. I think it's important at this point to focus on the structure and syntax of
code as well as having a even more separation. 
Ex:
 - Create a constants directory that contains: Action Types, URL's and API Routes. <-- 3 separate files int he directory.
 - In Q4 we will teach you more about creating middleware which is a great spot to do most of your business logic. I saw a lot of 
    functions in your actions files that were converting the data before passing it to your reducers. You essentially want your Middlware 
    to convert that data.
 - I would also work on your Reducers. It seems like you guys are creating a lot of unnecessary objects with in your store that
    make accessing your data a little cumbersome (ex: ingredientsReducer.ingredients could just be ingredients)
    I'm happy to show you how to structure your reducers and store.
 - It became clear after checking out your components that there were 3 different people working on this project because your implementation
    was very different between components. You 3 should have a conversation and talk about best practices so that your code looks 
    consistently similar.
    
Also there were 0 tests for your application besides the one's that are automatically generated by React-Native.