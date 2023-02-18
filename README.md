# Profile
Person profile (real or fictional) with basic information.

## Installation
Need to use GH PAT otherwise you will see when doing `npm install/npm ci`:
```
npm ERR! code E401
npm ERR! 401 Unauthorized - GET https://npm.pkg.github.com/download/@jirihofman/react-profile/0.1.0/bde73a8d6d6f752478b39d8ee5bded6eea4c59ce - authentication token not provided
```

## Release
For now we release manually from `master`.
1. Commit new version into `package.json`.
1. Start new Release with new tag, same as the new value in `package.json`.
1. Package is automatically created in GitHub Actions.

## Using Conventional Commits for PRs
Currently doing only PR name check. Checking PR title for single commit and also commit messages when there is multiple commits in PR would be better.

### GitHub Actions
Actions should only run on master repo, see `if: ${{ github.repository_owner == 'jirihofman' }}` in `.yml` files.
