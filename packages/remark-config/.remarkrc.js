/**
 * @typedef {import('unified').Preset} Preset
 */

/** @type {Preset} */
import defaultRemarkConfig from '@davidsneighbour/remark-config';

/** @type {Preset} */
// const localRemarkConfig = [
//     // add your local changes here
// ];

/** @type {Preset} */
const mergedConfiguration = {
  ...defaultRemarkConfig,
  //  ...localRemarkConfig,
};

export default mergedConfiguration;
