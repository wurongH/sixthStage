var vm = new Vue({
  el : '#app',
  data: {
    //表格数据
    list: [
      {index: 1, name: 'git微课', price: 100, count: 0},
      {index: 1, name: 'node.js微课', price: 200, count: 0},
      {index: 1, name: 'vue微课', price: 300, count: 0},
      ]
  },
  methods: {
    //减少按钮
    reduce (idx) {
      this.list[idx].count -= 1
    },
    //增加按钮
    add (idx) {
      this.list[idx].count += 1
    },
    //课程移除
    remove (idx) {
      this.list.splice(idx, 1)
    }
  },
  computed: {
    totalPrices: function () {
      let totalPrices = 0
      for (let i = 0; i < this.list.length; i++) {
        //购买总价 = 课程单价 * 购买数量
        totalPrices += this.list[i].price * this.list[i].count 
      }
      return totalPrices
    }
  }
})
