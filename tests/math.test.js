const { calculate } = require('../src/math')

test('sholud calculate total with tip' , ()=>{
    const total = calculate(10 , .3)

     expect(total).toBe(13)
})

test(' sholudd calculte total with the defalute tip' ,()=>{
    const total = calculate(10)
    expect(total).toBe(12.5)
})