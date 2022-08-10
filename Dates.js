let date="25/02/2020"
console.log(typeof(date))
let an=date.split("/")
console.log(an)

let temp=an[0]
an[0]=an[1]
an[1]=temp

console.log(an)
console.log(an.join(''))
let andd=an.join('')
let newandd=andd.slice(0,2)+"/"+andd.slice(2,4)+"/"+andd.slice(4)
console.log(newandd)

let newDate=new Date(newandd).getTime()
let secondsinoneandhalfweek=604800000
console.log(newDate)


let futuredate=secondsinoneandhalfweek+newDate
console.log(futuredate)
console.log(new Date(futuredate))
