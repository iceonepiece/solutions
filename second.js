function reverseString(text) {
  return text.split('').reverse().join('')
}

function second(text) {
  const stack = []
  let newtext = ''

  for (let i = 0; i < text.length; i += 1) {
    if (text[i] === '(') {
      stack.push('')
      continue
    }

    let toAdd = text[i]

    if (text[i] === ')') {
      toAdd = reverseString(stack.pop())
    }

    const length = stack.length
    if (length > 0) {
      stack[length - 1] += toAdd
    } else {
      newtext += toAdd
    }
  }

  return newtext;
}

console.log(second('foo(bar)'))
console.log(second('(bar)'))
console.log(second('foo(bar)blim'))
console.log(second('foo(foo(bar))blim'))
