
const interactive = {
  button: true
, input (props) {
    return props.type !== 'hidden'
  }
, textarea: true
, select: true
, option: true
, a (props) {
    const hasHref = typeof props.href === 'string'
    const hasTabIndex = props.tabIndex !== null
    return (hasHref || !hasHref && hasTabIndex)
  }
}

export default function (tagName, props) {
  const tag = interactive[tagName]
  return (typeof tag === 'function') ? tag(props) : tag;
}
