## Babel Plugin for ReactNative CSS Shorthand

This plugin will let you define `margin` & `padding` within **React Native** `StyleSheet` similar to CSS shorthands.

### Example

**Input**
```js
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: [0, 10],
    padding: [5, 20, 10]
  }
});

export default styles;
```

**Output**
```js
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    marginRight: 10,
    marginBottom: 0,
    marginLeft: 10,
    paddingTop: 5,
    paddingRight: 20,
    paddingBottom: 10,
    paddingLeft: 20
  }
});

export default styles;
```

### Installation

```
$ npm install --save-dev babel-preset-react-native babel-plugin-react-native-css-shorthand
```

Then, create a `.babelrc` in your project root with the following content:
```json
{
  "presets": ["react-native"],
  "plugins" : ["babel-plugin-react-native-css-shorthand"]
}
```

### TODO

- [ ] Add `test`
- [ ] Add `borderWidth` support
