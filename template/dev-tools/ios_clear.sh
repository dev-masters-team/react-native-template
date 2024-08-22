#!/bin/bash
if [[ "$1" == "--soft" ]]; then
    echo "Performing a soft clean..."
    rm -rf ./ios/Pods ~/Library/Caches/CocoaPods ~/Library/Developer/Xcode/DerivedData
    cd ios
    pod install
    echo "Soft clean completed successfully!"
else
    read -p "Are you sure you want to clean? (y/n): " confirm
    if [ "$confirm" = "y" ]; then
        rm -rf node_modules
        npm ci
        rm ios/Podfile.lock
        rm -rf ./ios/Pods ~/Library/Caches/CocoaPods ~/Library/Developer/Xcode/DerivedData
        cd ios
        pod install
        echo "Project has been cleared sucessfully!"
    else
        echo "Clean operation cancelled."
    fi
fi
