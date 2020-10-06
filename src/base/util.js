const isType = (type) => (val) => {
  const valType = Object.prototype.toString.call(val)
    .match(/\[object (.*?)\]/)[1].toLocaleLowerCase()
  return type === valType
}

export const isNumber = isType('number')
export const isString = isType('string')
export const isBoolean = isType('boolean')