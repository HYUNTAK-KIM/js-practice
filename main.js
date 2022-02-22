/* const heropy = {
  firstName: 'Hyun Tak',
  lastName: 'Kim',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`
  }
}
console.log(heropy.getFullName())

function user(first2, last2) {
  this.firstName = first2
  this.lastName = last2
}
user.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

const heropy2 = new user('Hyun Tak', 'Kim')

console.log(heropy2.getFullName()) */

// this
// 일반(Normal) 함수는 호출 위치에서 따라 this 정의!
// 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의!

/* const heropy = {
  name: 'Heropy',
  normal: function () {
    console.log(this.name)
  },
  arrow: () => {
    console.log(this.name)
  }
}
heropy.normal()
heropy.arrow()

const amy = {
  name: 'Amy',
  normal: heropy.normal,
  arrow: heropy.arrow
}
amy.normal()
amy.arrow() */

/* const result = 'Hello world!'.indexOf('Heropy')
console.log(result) 

// String.prototype.indexOf() */

const str = 'eggu24@gmail.com'

console.log(str.match(/.+(?=@)/)[0])