/**
 * 事件处理模块
 */

export function isEvtProp(name) {
  return name.match(/^on/)
}

export function isCustomProp(name) {
  return isEvtProp(name) || name === 'forceUpdate'
}

function extractEventName(name) {
  return name.slice(2).toLowerCase()
}

/**
 * 添加事件监听
 * @param $el
 * @param props
 */
export function addEvtListener($el, props) {
  props && Object.keys(props).forEach(key => {
    if (isEvtProp(key)) {
      $el.addEventListener(extractEventName(key), props[key])
    }
  })
}