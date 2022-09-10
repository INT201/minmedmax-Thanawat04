const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  if (n1>n2&&n3)
    return`max: ${n1}`
  else if (n2>n3)
    return `med: ${n2},min: ${n3}`
  else 
    return `med: ${n3},min: ${n2}`

  

}
module.exports = minMedMax
