const { classes, keyframes, variables } = require('./classstore');
const {
  permitedPathsClasses,
  permitedPathsVariables,
  permitedPathsKeyframes,
  prefixLocalOrGlobal,
  kebabToCamelCase,
  generateGetLocalIdent,
  escapeRegex
} = require('./common.js');

module.exports = function (source) {
  const getKeyframeOrVariable = ({ store, name, filename }) => {
    if (this.mode !== 'production') return name;
    const isGlobal = name.match(/^_/g);
    if (isGlobal) return '_' + store.getName(name, filename);
    return store.getName(name, filename);
  };

  const getClassname = ({ name, filename }) => {
    if (this.mode !== 'production') return name;
    const isGlobal = name.match(/^_/g);
    const classnameWithoutTransition = name.replace(
      /(Leave|Enter)(To|From|Active)?$/,
      ''
    );

    const transitionName =
      (name.match(/(Leave|Enter)(To|From|Active)?$/) || [])[0] || '';

    return `${isGlobal ? '_' : ''}${classes.getName(
      classnameWithoutTransition,
      filename
    )}${transitionName}`;
  };

  const getLocalIdent = generateGetLocalIdent(this.mode !== 'production');

  const isValidPathClasses = permitedPathsClasses.some(
    (path) => this.resourcePath.indexOf(path) === 0
  );

  const isSCSS = !!this.resourcePath.match(/\.scss$/);

  if (isValidPathClasses) {
    source = source.replace(/^[\s\S]+?{|}[\s\S]+?{/g, (match) =>
      match.replace(
        /(\.[^ .;{}>/:(),'0-9"][^ .;{}>:(),/'"]+)(?![^{]+;)/g,
        (classname) => {
          const newClassname = getClassname({
            name: kebabToCamelCase(
              prefixLocalOrGlobal(classname.replace(/^\./g, ''))
            ),
            filename: this.resourcePath
          });
          if (isSCSS) return '.' + getLocalIdent(this, null, newClassname);
          return '.' + newClassname;
        }
      )
    );
  }
  const isValidPathKeyframes = permitedPathsKeyframes.some(
    (path) => this.resourcePath.indexOf(path) === 0
  );
  if (isValidPathKeyframes) {
    const keyFramesNames = {};
    source = source.replace(
      /@[-a-z]*?keyframes [^ .;{}>/:(),'0-9"][^ .;{}>:(),/'"]+(?![^{]+;)/g,
      (classname) => {
        const keyframesSplited = classname.match(
          /(^@[-a-z]*?keyframes )|[\s\S]+/g
        );
        if (keyframesSplited && keyframesSplited.length === 2) {
          const newKeyframeName = getKeyframeOrVariable({
            store: keyframes,
            name: kebabToCamelCase(prefixLocalOrGlobal(keyframesSplited[1])),
            filename: this.resourcePath
          });

          keyFramesNames[keyframesSplited[1]] = newKeyframeName;
          return keyframesSplited[0] + newKeyframeName;
        }
        return classname;
      }
    );
    for (const key of Object.keys(keyFramesNames)) {
      const regexp = new RegExp(
        `animation-name: ?${escapeRegex(
          key
        )} ?[;}]|animation: ?[-_()1-9a-zA-Z .]*?${escapeRegex(
          key
        )}[-_()1-9a-zA-Z .]*?[;}]`,
        'g'
      );
      source = source.replace(regexp, (match) =>
        match.replace(key, keyFramesNames[key])
      );
    }
  }

  const isValidPathVariables = permitedPathsVariables.some(
    (path) => this.resourcePath.indexOf(path) === 0
  );
  if (isValidPathVariables) {
    source = source.replace(
      /[( ;{:,]--[-_a-zA-Z]?[-_a-zA-Z0-9]*/g,
      (matchVariable) => {
        const match = matchVariable.match(
          /([( ;{:,]--)|[-_a-zA-Z][-_a-zA-Z0-9]*/g
        );
        return (
          match[0] +
          getKeyframeOrVariable({
            store: variables,
            name: prefixLocalOrGlobal(match[1]),
            filename: ''
          })
        );
      }
    );
  }
  return source;
};
