interface Config{
  url:string;
}
declare module "myPackage"{
  function init(config:Config):boolean;
  function exit(code:number):number;
}  //호출 시그니쳐를 설정한다.

