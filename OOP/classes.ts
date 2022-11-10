abstract class User {  //추상클래스
  constructor(
    private first_name: string,
    private last_name: string,
    protected nickname: string,
  ) { }
  abstract getNickname(): void //추상매소드
  getFullName() {
    return `${this.first_name} ${this.last_name}`
  }
}


class Plaryer extends User {
  getNickname() {
    console.log(this.nickname);
  }
}

const seong = new Plaryer('SeungYoung', 'Seong', 'netban');
seong.getFullName();


//사전
type Words = { [key: string]: string }  //Hash Key - Value

class Dict {
  private words: Words
  constructor() {
    this.words = {}
  }
  add(word: Word) {       //넣기
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {        //찾기
    return this.words[term];
  }
  delete(term: string) {  //지우기
    if (this.words[term]) {
      delete this.words[term];
    }
  }
  all() { //전부보기
    for (let i in this.words){
      console.log(`${i} : ${this.words[i]}`)
    }
  }
}

class Word {
  constructor(
    public term: string,
    public def: string,
  ) { }
}
const express = new Word("express", "JS기반 백엔드 프레임워크");
const next = new Word('next.js', 'JS기반 프런트 프레임워크');
const spring = new Word("spring","JAVA기반 백엔드 프레임워크")

const dict = new Dict();

dict.add(express);  //넣기
dict.add(next);  //넣기
dict.add(spring);  //넣기
dict.def('express') //찾기
dict.delete('spring') //지우기
dict.all(); //전부 보기