// import class Person from person module
// import { Person } from './person'
// import { testFunction } from './person'

import { Person, testFunction } from './person'
 
const p1 = new Person('person2', 'mumbai', 30, '+9134454', 'person2@test.com')
p1.canVote()
p1.printInfo()

testFunction()