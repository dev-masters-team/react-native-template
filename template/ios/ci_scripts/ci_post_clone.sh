#!/bin/sh
echo "Running ci_post_clone.sh"
brew install cocoapods
brew install node
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"
npm ci
pod install