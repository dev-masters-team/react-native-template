# React Native Template
This is an template to quick start an React Native Application with preset packages we like to use.

[env configuration](https://medium.com/armenotech/configure-environment-variables-with-react-native-config-for-ios-and-android-7079c0842d8b)

To install this template: 
```npx react-native init AppName --template git@github.com:dev-masters-team/react-native-template.git```

To run project:
1. React-native requirements [Install](https://reactnative.dev/docs/set-up-your-environment)
2. In root project `npm ci && cd ios && pod install`
3. Run metro via `npm run metro` 
4. Turn on developer mode on iphone and install one of target app with preferred scheme `npm run ios:local` or `npm run ios:dev` for development target. If you are going to use local scheme - copy _.env.local.example_ and rename it to _.env.local_


Recommended vscode extensions:
1. [Code Spell CHecker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
2. [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)
3. [TODO Highlight](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight)
4. [Wrap Console Log](https://marketplace.visualstudio.com/items?itemName=midnightsyntax.vscode-wrap-console-log)
5. [Svg Preview](https://marketplace.visualstudio.com/items?itemName=SimonSiefke.svg-preview)

Postinstall configuration:
1. Configure colors pallette by taking your base color and setting darker and lighter colors, for example from [here](https://www.w3schools.com/colors/colors_picker.asp) (Music TMM base color: #FFA902)
2. Change App icon
3. Change Launch Screen