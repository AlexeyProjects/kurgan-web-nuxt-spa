npm version patch --no-git-tag-version
NEW_VERSION=$(node -pe "require('./package.json').version")
git commit -am "Release v$NEW_VERSION"
git tag -a "$NEW_VERSION" -m "Release v$NEW_VERSION" HEAD
git push
git push --tags
