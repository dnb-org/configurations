Create a file `.versionrc.js` with the following contents:

```javascript
const defaultStandardVersion = require("@davidsneighbour/standard-version-config");
module.exports = defaultStandardVersion;
```

Add the following scripts to your package.json:

```json
{
  "scripts": {
    "release": "commit-and-tag-version --release-as patch -a -t \"v\" && ./bin/release/postrelease.sh",
    "release-next": "commit-and-tag-version --release-as minor -a -t \"v\" && ./bin/release/postrelease.sh",
    "release-major": "commit-and-tag-version --release-as major -a -t \"v\" && ./bin/release/postrelease.sh"
  }
}
```
