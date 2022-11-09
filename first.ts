let str = 'hello'   //string으로 추론
//a = 2  //에러

let bool: boolean = false //타입 선언

const arrayNumber: number[] = []; //number의 배열
arrayNumber.push(1)
//c.push('하이') //에러
const arrayAny: any[] = [];   //아무거나
arrayAny.push(1)
arrayAny.push('하이')

type Player = { //첫글자는 대문자로
  readonly name: string,  //리드 온리
  age?: number, // ? = optional 타입
}

const playerone: Player /*별칭을 넣는다  */ = {
  name: 'name'
}
const playertwo: Player = {
  name: 'name',
  age: 23
}

if (playerone.age && playerone.age < 10) {
  // player.age가 true일 경우 player.age<10 비교
}
function playerMaker(name: string): Player {//return값 타입선언
  return {
    name,
  }
}

// 튜플

const tuple: [string, number, boolean] = ['name', 12, false];

//언노운
let unknow: unknown;
if (typeof unknow === 'number') {   //unknow 의 type이 number인지 확인
  const total = unknow + 2;   //확인이 돼야 실행가능
}
if (typeof (unknow) === 'string') {
  unknow.toUpperCase() // string인지 확인이 돼야 toUpperCase()가능 ,
}

function hello() {
  console.log('하이')  //ts가 return이없으면  스스로 void임을 인식함
}

function err():never{
  throw new Error('xxx');  //리턴할일이 없기때문에 never
}

function never(name: string | number) {    //name은 string 또는 number
  if (typeof name == 'string') {
    name += '하이'; //이 안에있는 name은 String이된다
  } else if (typeof name == 'number'){
    name += 2;  // 이 안에 있는 name은 number가 된다
  }else {
    name  //name이 string 아니면 number라고 선언해서 작동될일 없기떄문에 never가 된다
  }
}