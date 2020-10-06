/**
 * 更新元素
 * @param $parent
 * @param newNode
 * @param oldNode
 * @param index
 */
import {createElement} from "./createElement";
import {isString} from "./util";
import {updateProps} from "./handleProps";

export function updateElement($parent, newNode, oldNode, index = 0) {
  if(!newNode) {
    $parent.removeChild($parent.childNodes[index])
  } else if (!oldNode) {
    $parent.appendChild(createElement(newNode))
  } else if (isChange(newNode, oldNode)) {
    $parent.replaceChild(createElement(newNode), $parent.childNodes[index])
  } else if (newNode.type) {
    updateProps($el, newNode.props, oldNode.props)
    let newL = newNode.children.length
    let oldL = oldNode.children.length
    for (let i = 0; i< newL || i< oldL; i++) {
      updateElement($parent.childNodes[i], newNode.children[i], oldNode.children[i], i)
    }

  }
}


function isChange(newNode, oldNode) {
  return !newNode || !oldNode ||
    newNode.type !== oldNode.type ||
    (isString(newNode) && newNode !== oldNode) ||
    !!newNode.forceUpdate
}