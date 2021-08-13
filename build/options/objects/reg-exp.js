'use strict';

/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/
const joi = require('joi');

module.exports = joi.object().regex().error(() => 'the value must be a RegExp');
