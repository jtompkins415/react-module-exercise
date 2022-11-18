
/** function choice(items)
 * 
 * Returns a randomly chosen item from an array of items
 * 
 */
function choice(items){
    let idx = Math.floor(Math.random() * items.length);
    return items[idx];
}

/** function remove(items, item)
 * 
 * Removes the first matching item from array of items, it item exists, return it.
 * Otherwise returns undefined
 * 
 */

function remove(items, item) {
    for (let i = 0; i < items.length; i++){
        if (items[i] === item) {
            return [...items.slice(0, i), ...items.slice(i + 1)]
        }
    }
}

export { choice, remove }