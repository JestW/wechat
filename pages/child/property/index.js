Component({

  behaviors: [],

  properties: {
    myProperty: { // 属性名
      type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: '', // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer: function (newVal, oldVal) { } // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
    },
    myProperty2: String // 简化的定义方式
  },
  data: {
    A: [{
      B: 'init data.A[0].B'
    }]
  }, // 私有数据，可用于模版渲染

  lifetimes: {
    // 组件生命周期声明对象，组件的生命周期：created、attached、ready、moved、detached将收归到lifetimes字段内进行声明，原有声明方式仍旧有效，如同时存在两种声明方式，则lifetimes字段内声明方式优先级最高
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () { }, // 组件生命周期函数，在组件实例进入页面节点树时执行
    moved: function () { }, // 组件生命周期函数，在组件实例被移动到节点树另一个位置时执行
    detached: function () { }, // 组件生命周期函数，在组件实例被从页面节点树移除时执行
  },

  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached: function () { }, // 此处attached的声明会被lifetimes字段中的声明覆盖
  ready: function () { }, //  //组件生命周期函数，在组件布局完成后执行，此时可以获取节点信息（使用 SelectorQuery ）

  pageLifetimes: {
    // 组件所在页面的生命周期声明对象，目前仅支持页面的show和hide两个生命周期
    show: function () { },
  },

  methods: {
    onMyButtonTap: function () {
      this.setData({
        // 更新属性和数据的方法与更新页面数据的方法类似
        myProperty: 'Test'
      })
      this.triggerEvent('myevent', this.data.myProperty)
      console.log('监听事件');
    },
    _myPrivateMethod: function () {
      // 内部方法建议以下划线开头
      this.replaceDataOnPath(['A', 0, 'B'], 'myPrivateData') // 这里将 data.A[0].B 设为 'myPrivateData'
      this.applyDataUpdates()
    },
    _propertyChange: function (newVal, oldVal) {

    }
  }

})