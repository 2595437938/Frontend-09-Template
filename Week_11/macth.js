
function match(selector, element) {
    const childList = element.children
    const arr = selector.split('.')
    const className = arr[1]
    const idName = arr[0].split('#')[1]

    for (let item of childList) {
        const itemClassName = item.className,
            itemIdName = item.getAttribute('id'),
            parentElement = item.parentNode.nodeName;
        if (parentElement === 'div') {
            if (idName === itemIdName) {
                if (itemClassName === className) {
                    return true;
                }
                return false;
            }
            return false;
        }
        return false;
    }
    return false
}
console.log(match("div #div1.divclass", document.getElementById("div0")))
