// type Print = {
//   <T>(arr: T[]): T  //Generic 지정
// }

// const superPrint: Print = (arr) => arr[0]
// const a =superPrint([1])    //number
// const b =superPrint(['21', '222', '333',false]); //string
// const c = superPrint([true,false,22,'하이']) //boolean
// const d = superPrint<string>(['하이']);  //타입추론을 사용하지않고 타입을 직접 지정해줌,


/* type Print = {
  <T, K>(arr: T[], second: K): T
}

const superPrint: Print = (arr, second) => {
  console.log(typeof arr[0]);
  console.log(typeof second);
  return arr[0]
}
const a = superPrint([1], 2)
const b = superPrint(['21', '222', '333', false], true);
const c = superPrint([true, false, 22, '하이'], '문자열')

const d = superPrint<string, number>(['하이'], 23);  //타입추론을 사용하지않고 타입을 직접 지정해줌,  */

function superPrint<T, K>(a: T[], b: K) {
  return a[0];
}
const a = superPrint([1], 2)
const b = superPrint(['21', '222', '333', false], true);
const c = superPrint([true, false, 22, '하이'], '문자열')

const d = superPrint<string, number>(['하이'], 23);  //타입추론을 사용하지않고 타입을 직접 지정해줌,

type Player2<T> = {
  name: string,
  extraInfo: T
}


const me: Player2<{ favFood: string }> = {
  name: 'me',
  extraInfo: {
    favFood: 'kimchi'
  }
}
const you: Player2<null> = {
  name: 'you',
  extraInfo: null
}

const noType  = <K>(name: string, exreaInfo:K): void => {
  console.log(exreaInfo)
 }
 
 noType('하이',{favFood:'하이'})
 noType<string>("하이",'하이')