let List = function (e1) {
  this.length = 0

  this.push = function (el) {
    this.length++
    this[0] = el
  }

  this.pop = function () {
    this.length--
    let last = this[this.length]
    this[this.length]= undefined
    return last
  }
}