const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map((title)=>
{ var t=title.split(" ")
let arr=[]
for(var f=0; f<=t.length-1;f++){
arr.push(t[f].charAt(0).toUpperCase()+t[f].split("").splice(1,t[f].length).join(''))

}

return arr.join(' ')

})
}
