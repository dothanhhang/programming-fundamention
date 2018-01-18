//6.length increase by 1 after each time list pushed test
let List = function () {

    this.length = 0

    this.push = function () {
        //this.length =1
        //this.length =2
        this.length++
    }
}