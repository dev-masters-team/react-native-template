#!/bin/bash

read -p "Are you sure you want to clean Xcode cache and reinstall node_modules? (y/n): " confirm
if [ "$confirm" = "y" ]; then
    rm -rf node_modules
    rm ios/Podfile.lock
    rm -rf ./ios/Pods ~/Library/Caches/CocoaPods ~/Library/Developer/Xcode/DerivedData
    npm ci
    cd ios
    pod install
    cd ../
    echo "Project has been cleared sucessfully!"
else
    echo "Clean operation cancelled."
fi
