module.exports = {
  "skip": {
    "changelog": true
  },
  "scripts": {
    "prerelease": "./bin/release-hook-prerelease.sh"
  },
  "bumpFiles": [
    {
      "filename": "package.json",
      "type": "json"
    }
  ]
};
