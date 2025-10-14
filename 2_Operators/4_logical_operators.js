/** 
 *  OR: ||
 *  AND: &&
 *  NOT: !
 *  Nullish caolescing operator
 * 
 */

console.log(true || true); //true
console.log(true || false); //true

console.log(false || false); //false 
console.log(false || true); //true

console.log(false && true); //false


const age = 16;
const passDMVExam = true;
const getDriverLicense = age >= 16 && passDMVExam;
console.log(getDriverLicense);


// nullish coalescing operator: ??
// provide a default value if the opearnd before the ?? is false
// return the right hand side value if the left-hand value is null or undefined

let user = null;
const username = user ?? 'default user';
const dummyUsername = (user != null && user !== undefined) ? user : 'default user';
console.log(`${username}`);


