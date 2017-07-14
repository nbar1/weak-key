var WeakMap = global.WeakMap || require('core-js/library/fn/weak-map');
var map = new WeakMap();
var index = 0;

/**
 * weakKey
 *
 * @param {object} obj
 * @param {string} [prefix="weak-key"]
 * @returns {string}
 */
function weakKey(obj, prefix) {
	var key = map.get(obj);

	prefix = (prefix) ? prefix : 'weak-key';

	if (!key) {
		key = prefix + '-' + index++;
		map.set(obj, key);
	}

	return key;
}

module.exports = weakKey;
