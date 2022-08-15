# Browserslist

## Configuration

Add as extension to the `.browserslistrc`

```ini
extends @davidsneighbour/browserslist-config
```

Or in the `browserslist` parameter in `package.json`.

```json
{
  "browserslist": ["extends @davidsneighbour/browserslist-config"]
}
```

## Configuration rules in this package

- We support all presently updated browsers.
- We don't support Internet Explorer.
- We don't support legacy Edge Browser (lower than version 79).
- We don't support Opera Mini and Mobile.
