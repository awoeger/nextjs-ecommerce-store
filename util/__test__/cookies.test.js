/**
 * @jest-environment jsdom
 */

// The comment above is important!
// Without it, jest won't know about frontend context, e.g. cookies

import {
  addProductByProductId,
  removeProductById,
  substractProductByProductId,
} from '../cookies';