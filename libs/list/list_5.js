//5.length become 2 after second pushed
let List = function () {

    this.length = 0

    this.push = function () {
        //this.length =1
        this.length =2
    }
}