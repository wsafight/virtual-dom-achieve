/**
 * 属性处理模块
 */
import {isBoolean} from "./util";
import {isCustomProp} from "./handleEvt";

function setProp($el, name, value) {
  if (isCustomProp(name)) return;
  if (isBoolean(value)) {
    handleBoolProp($el, name, value)
  } else {
    $el.setAttribute(name, value)
  }
}

function handleBoolProp($el, name, value) {
  const targetValue = !!value
  if (targetValue) {
    $el.setAttribute(name, targetValue)
  }
  $el[name] = targetValue
}

function removeProp($el, name, value) {
  if (isCustomProp(name)) return;
  if (isBoolean(value)) {
    $el[name] = false
  } else {
    $el.removeAttribute(name, value)
  }
}

function updateProp($el, name, newVal, oldVal) {
  if (!newVal) {
    removeProp($el, name, oldVal)
  } else if (!oldVal || oldVal !== newVal) {
    setProp($el, name, newVal)
  }
}

/**
 * 更新或者创建元素属性值
 * @param $el 元素
 * @param newProps
 * @param oldProps
 */
export function updateProps($el, newProps = {}, oldProps = {}) {
  let _props = {...newProps, ...oldProps}
  Object.keys(_props).forEach(key => {
    updateProp($el, key, newProps[key], oldProps[key])
  })
}