const expectedSolution = `
BBBB..Y...Y.EEEE
B...B..Y.Y..E...
BBBB....Y...EEE.
B...B...Y...E...
BBBB....Y...EEEE
`

console.log(expectedSolution)

function encrypt(char){
  return char.charCodeAt(0)
}


const splitTo2DArr = expectedSolution.split('\n').filter( el => el.length>0).map(el => el.split(''))

console.log('stage1', splitTo2DArr)


const encrypted2DArr = splitTo2DArr.map(row => {
  return row.map(el => encrypt(el))
})

// === SKIP ======

function splitIntoNineParts(n) {
  const result = [];
  let sum = 0;

  // Generate 8 random parts
  for (let i = 0; i < 8; i++) {
    const remaining = n - sum;
    const maxPart = Math.floor(remaining / 2); // avoid overflows
    const part = Math.floor(Math.random() * (maxPart + 1));
    result.push(part);
    sum += part;
  }

  // The 9th part completes the total
  result.push(n - sum);

  return result;
}
function generate3x3Matrix(n) {
  const flat = splitIntoNineParts(n);

  // Optionally shuffle the values for randomness
  for (let i = flat.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [flat[i], flat[j]] = [flat[j], flat[i]];
  }

  // Build 3x3 matrix
  return [
    flat.slice(0, 3),
    flat.slice(3, 6),
    flat.slice(6, 9)
  ];
}

function createExplodedRowFromString(str){
  const characters = str.split('')

  const numChars = characters.map(el => encrypt(el))

  console.log('numChars', numChars)

  let result = []

  const explodedNumChars = numChars.map(el => generate3x3Matrix(el))

  for(let i=0; i<3; i++){
    let row = []
    explodedNumChars.forEach(el => {
      row.push(el[i])
    })
    result.push(row)
  }

  console.log('exploded:', result)
}

createExplodedRowFromString('BBBB..Y...Y.EEEE')