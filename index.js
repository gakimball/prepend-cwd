'use strict';

const path = require('path');

/**
 * Prepend the current working directory to a path, unless the path is absolute, in which case return it as-is.
 * @param {String} path - Path to prepend to.
 * @returns {String} Absolute path.
 */
module.exports = p => {
  if (path.isAbsolute(p)) {
    return p;
  }

  return path.join(process.cwd(), p);
};
