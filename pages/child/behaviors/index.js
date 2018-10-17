// components/component-tag-name.js
var myBehavior = require('my-behaviors')
Component({
  behaviors: [myBehavior],
  properties: {
    myProperty: {
      type: String
    }
  },
  data: {
    myData: {}
  },
  attached: function () { },
  methods: {
    myMethod: function () { },
  }
})
