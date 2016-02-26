export default function ({types: t}) {

  const makeObjectProperty = (name, value, position = '') => {
    return t.ObjectProperty(
      t.Identifier(`${name}${position}`),
      t.NumericLiteral(value)
    );
  };

  const postions = ['Top', 'Right', 'Bottom', 'Left'];
  const supportedProperties = ['margin', 'padding'];

  return {
    visitor: {
      ObjectProperty(path) {
        const {key, value} = path.node;
        if (supportedProperties.indexOf(key.name) > -1 && value.type === 'ArrayExpression') {
          // StyleSheet check, don't know if this one is efficient enough
          let callee;
          path.find(function (path) {
            if (path.isCallExpression()) {
          callee = path.node.callee;
            };
            // we've got a callee! no need to continue
            if(callee) return;
          });

          if (callee && callee.object && callee.object.name === 'StyleSheet') {
            switch (value.elements.length) {
              case 1:
                path.replaceWith(makeObjectProperty(key.name, value.elements[0].value));
                break;
              default:
                const elements = postions.map((position, idx) => {
                  const element = value.elements[idx] || value.elements[idx % 2];
                  return makeObjectProperty(key.name, element.value, position);
                });
                path.replaceWithMultiple(elements);
            }
          }
        }
      }
    }
  };
}
