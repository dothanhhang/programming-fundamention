//7.get first element test
let List = function (e1) {

    this.length = 0

    this.push = function (e1) {
        //this.length =1
        //this.length =2
        this.length++
        this[0]=e1
    }
}