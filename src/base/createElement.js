import {updateProps} from "./handleProps";
import {addEvtListener} from "./handleEvt";
import {isString, isNumber} from "./util";

export function vnode(type, props, ...children) {
  return {type, props, children}
}

export function createElement(node) {
  if (isString(node) || isNumber(node)) {
    return document.createTextNode(node)
  }
  const $el = document.createElement(node.type)

  updateProps($el, node.props)
  addEvtListener($el, node.props)

  node.children && node.children
    .map(createElement)
    .forEach($el.appendChild.bind($el))
  return $el
}