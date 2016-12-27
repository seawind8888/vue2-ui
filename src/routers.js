/**
 * Created by haifeng on 16/12/27.
 */
const Index = resolve => {
  require.ensure(['./demos/Index'], () => {
    resolve(require('./demos/Index'))
  })
}

const Tpl = resolve => {
  require.ensure(['./demos/_Tpl'], () => {
    resolve(require('./demos/_Tpl'))
  })
}

const ActionSheet = resolve => {
  require.ensure(['./demos/ActionSheet'], () => {
    resolve(require('./demos/ActionSheet'))
  })
}

const Datetime = resolve => {
  require.ensure(['./demos/Datetime'], () => {
    resolve(require('./demos/Datetime'))
  })
}

const Dialog = resolve => {
  require.ensure(['./demos/Dialog'], () => {
    resolve(require('./demos/Dialog'))
  })
}

const Flexbox = resolve => {
  require.ensure(['./demos/Flexbox'], () => {
    resolve(require('./demos/Flexbox'))
  })
}

const MButton = resolve => {
  require.ensure(['./demos/MButton'], () => {
    resolve(require('./demos/MButton'))
  })
}

const Layout = resolve => {
  require.ensure(['./demos/Layout'], () => {
    resolve(require('./demos/Layout'))
  })
}

const MHeader = resolve => {
  require.ensure(['./demos/MHeader'], () => {
    resolve(require('./demos/MHeader'))
  })
}

const MInput = resolve => {
  require.ensure(['./demos/MInput'], () => {
    resolve(require('./demos/MInput'))
  })
}

const MNumber = resolve => {
  require.ensure(['./demos/MNumber'], () => {
    resolve(require('./demos/MNumber'))
  })
}

const MTextarea = resolve => {
  require.ensure(['./demos/MTextarea'], () => {
    resolve(require('./demos/MTextarea'))
  })
}

const Picker = resolve => {
  require.ensure(['./demos/Picker'], () => {
    resolve(require('./demos/Picker'))
  })
}

const Popside = resolve => {
  require.ensure(['./demos/Popside'], () => {
    resolve(require('./demos/Popside'))
  })
}

const Popup = resolve => {
  require.ensure(['./demos/Popup'], () => {
    resolve(require('./demos/Popup'))
  })
}

const Radio = resolve => {
  require.ensure(['./demos/Radio'], () => {
    resolve(require('./demos/Radio'))
  })
}

const RadioCircle = resolve => {
  require.ensure(['./demos/RadioCircle'], () => {
    resolve(require('./demos/RadioCircle'))
  })
}

const Selector = resolve => {
  require.ensure(['./demos/Selector'], () => {
    resolve(require('./demos/Selector'))
  })
}

const Switch = resolve => {
  require.ensure(['./demos/Switch'], () => {
    resolve(require('./demos/Switch'))
  })
}

const Tab = resolve => {
  require.ensure(['./demos/Tab'], () => {
    resolve(require('./demos/Tab'))
  })
}

const Tag = resolve => {
  require.ensure(['./demos/Tag'], () => {
    resolve(require('./demos/Tag'))
  })
}

const Toast = resolve => {
  require.ensure(['./demos/Toast'], () => {
    resolve(require('./demos/Toast'))
  })
}

const routers = [{
  path: '/',
  component: Index
}, {
  path: '/components/_tpl',
  component: Tpl
}, {
  path: '/components/_tpl',
  component: ActionSheet
}, {
  path: '/components/date',
  component: Datetime
}, {
  path: '/components/dialog',
  component: Dialog
}, {
  path: '/components/popup',
  component: Popup
}, {
  path: '/components/flexbox',
  component: Flexbox
}, {
  path: '/components/m-button',
  component: MButton
}, {
  path: '/components/layout',
  component: Layout
}, {
  path: '/components/m-header',
  component: MHeader
}, {
  path: '/components/m-input',
  component: MInput
}, {
  path: '/components/m-number',
  component: MNumber
}, {
  path: '/components/m-textarea',
  component: MTextarea
}, {
  path: '/components/picker',
  component: Picker
}, {
  path: '/components/popside',
  component: Popside
}, {
  path: '/components/radio',
  component: Radio
}, {
  path: '/components/radio-circle',
  component: RadioCircle
}, {
  path: '/components/selector',
  component: Selector
}, {
  path: '/components/switch',
  component: Switch
}, {
  path: '/components/tab',
  component: Tab
}, {
  path: '/components/tag',
  component: Tag
}, {
  path: '/components/toast',
  component: Toast
}]

export default routers
