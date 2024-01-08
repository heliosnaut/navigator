import { createElement } from 'react'
import tags from './tags'

function randomString(length) {
  let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

  let result = new Array(length).fill().reduce(acc => {
    acc += chars[Math.floor(Math.random() * chars.length)]
    return acc
  }, '')

  return result
}

function objToCssString(obj, sign) {
  function createParser(matcher, replacer) {
    const r = RegExp(matcher, "g");
    return e => {
      if (typeof e != "string") throw new TypeError(`expected an argument of type string, but got ${typeof e}`)
      return e.match(r) ? e.replace(r, replacer) : e
    }
  }

  const camelToKebab = createParser(/[A-Z]/, o => `-${o.toLowerCase()}`)
  const snakeToKebab = createParser(/_/, () => "-")

  const parser = sign ? snakeToKebab : camelToKebab

  if (!obj || typeof obj != "object" || Array.isArray(obj)) throw new TypeError(`expected an argument of type object, but got ${typeof obj}`)

  return Object.keys(obj).map(property => `${parser(property)}:${obj[property]};`).join('\n')
}

function addStyleToHead(innerCss) {
  let styleStr = Array.isArray(innerCss) ? innerCss[0] : objToCssString(innerCss)
  const className = randomString(8) //Notice:类名前面不允许是数字，否则不起作用
  const styleElement = document.createElement('style')

  styleElement.appendChild(document.createTextNode(`.${className}{ ${styleStr} }`))
  document.getElementsByTagName("head")[0].appendChild(styleElement)
  return className
}

export default function styled(element) {
  return css => {
    const classNameCover = addStyleToHead(css)
    return props => {
      let className = classNameCover
      if (props.className) className += ` ${props.className}`

      return element({ ...props, className })
    }
  }
}

tags.map(tag => {
  styled[tag] = function (css) {
    let className = addStyleToHead(css)

    return props => {
      if (props.className) className += ` ${props.className}`
      return createElement(tag, { ...props, className }, props.children)
    }
  }
})