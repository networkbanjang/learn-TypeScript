//Call Signatures

// type Add = (a: number, b: number) => number;

// type Add = {
//   (a: number, b: number): number,
//   (a: number, b: string): number
// }

// const add: Add = (a, b) => {
//   if (typeof b === 'string') return a;
//   return a + b;
// }

// const add: Add = (a, b) => {
//   if (typeof b === 'string') return a;
//   return a + b;
// }

//선언부
function normal(num: number): void;
function normal(str: string, arr: string): void;

//구현부
function normal(a: any, b?: string): void {
  console.log(typeof (a), typeof (b));

}
normal(1)
normal('하이', '하이');
// normal(1,'하이'); 인자의 타입이 일치하지않아서 에러

type Add = {
  (a: number, b: number, c: number): number,
  (a: number, b: number): number
}

const add: Add = (a, b, c?: number) => {   //추가 파라미터는 옵션임
  if (c) return a + b + c;
  return a + b;
}

add(1,2)  //3
add(1,2,3) //6
// add(1,2,3,4) 인자의 수가 맞지 않아서 에러

type Config = {
  path: string,
  state: object,
}

type Push = {
  (path: string): void,
  (config: Config): void
}

const push: Push = (config) => {
  if (typeof config === 'string') console.log(config)
  else console.log(config.path);
}

push('하이')   //하이
push({ path: '경로', state: { 오브젝트: '출력' } })  //경로
// push({path:'경로'});   인자가 string도 아니고 Config타입도 아니여서 에러