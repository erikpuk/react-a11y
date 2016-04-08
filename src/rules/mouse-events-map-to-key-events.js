import a11y from '../util'

const hasCallback = function (props, name) {
  return typeof props[name] === 'function'
}


const mouseOverMsg =
  'onMouseOver must be accompanied by onFocus for accessibility.'

const mouseOutMsg =
  'onMouseOut must be accompanied by onBlur for accessibility.'

const url = 'http://webaim.org/techniques/javascript/eventhandlers#onmouseover'

export default ctx => ({

  _any_(tagName, props) {
    if (  hasCallback(props, 'onMouseOver')
      && !hasCallback(props, 'onFocus') ) {
      ctx.report({
        msg: mouseOverMsg
      , url
      , affects: [
          a11y.devices.keyboardOnly
        ]
      })
    } else if ( hasCallback(props, 'onMouseOut')
            && !hasCallback(props, 'onBlur') ) {
      ctx.report({
        msg: mouseOutMsg
      , url
      , affects: [
          a11y.devices.keyboardOnly
        ]
      })
    }
  }

})
