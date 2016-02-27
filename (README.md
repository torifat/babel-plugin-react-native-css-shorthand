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

### Reasons why this isn't in the core

> - A lot of people get confused by what those number means. It's not clear that '5px 6px' means 5 vertical and 6 horizontal. I still have no idea what the 3-number version is. It is surely easier to write but harder to read.
> 
> - A common use for this is to set the vertical padding and horizontal. On react native we introduced paddingHorizontal and paddingVertical for this.
> 
> - We tweaked the merging behavior to be that the most specific wins (instead of the last defined wins in css). So you can do paddingLeft: 10, padding: 20 which is going to have everything at 20 except for left with 10.
 
\- [@vjeux](https://github.com/vjeux) _(source: [Issue-1](https://github.com/torifat/babel-plugin-react-native-css-shorthand/issues/1))_


### TODO

- [ ] Add `test`
- [ ] Add `borderWidth` support
