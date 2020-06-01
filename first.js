function bar (wordList) {
  const x = {}
  const signatures = []

  for (let i = 0; i < wordList.length; i += 1) {
    const sortedWord = wordList[i].split('').sort().join('')

    if (!x[sortedWord]) {
      x[sortedWord] = []
      signatures.push(sortedWord)
    }

    x[sortedWord].push(wordList[i])
  }

  for (let i = 0; i < signatures.length; i += 1) {
    console.log(x[signatures[i]].join(' - '))
  }
}

const wordList = [
  'AMOR', 'XISELA', 'JAMON', 'ROMA', 'OMAR', 'MORA', 'ESPONJA', 'RAMO',
  'JAPONES', 'ARMO', 'MOJAN', 'MARO', 'ORAM', 'MONJA', 'ALEXIS'
]

bar(wordList)
