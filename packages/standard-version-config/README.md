## Installation

```shell
npm install -D dnb-hugo/standard-version-config-dnb
```

### Configuration

Create a file `.versionrc.js` with the following contents:

```javascript
const defaultStandardVersion = require('@dnb-hugo/standard-version-config-dnb');
module.exports = defaultStandardVersion;
```

Add the following scripts to your package.json:

```json
"scripts": {
    "release": "standard-version --release-as patch -a -t \"v\" && ./bin/release-hook-postrelease.sh",
    "release-next": "standard-version --release-as minor -a -t \"v\" && ./bin/release-hook-postrelease.sh",
    "release-major": "standard-version --release-as major -a -t \"v\" && ./bin/release-hook-postrelease.sh",
},
```

or, if you have no local hook scripts:

```json
"scripts": {
    "release": "standard-version --release-as patch -a -t \"v\" && git push --follow-tags origin main",
    "release-next": "standard-version --release-as minor -a -t \"v\" && git push --follow-tags origin main",
    "release-major": "standard-version --release-as major -a -t \"v\" && git push --follow-tags origin main"
},
```
