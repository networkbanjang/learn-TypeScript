// type Team = 'red' | 'blue' | 'yellow'
// type Heaalth = 1 | 5 | 10

interface Human {
  name: string
}

interface Human {
  age: number,
}
interface Human {
  first_name: string
}

interface Person extends Human {
  nickname: string,
  // team: Team,
  // health: Heaalth
}

const test: Person = {
  name: 'seong',
  age: 25,
  first_name: 'SeungYoung',
  nickname: "netban",
  // team: "yellow",
  // health: 10
}

interface Name {
  firstName: string,
  lastName: string,
  sayHi(name: string): string;
  fullName(): string
}

class Myname implements Name {
  constructor(
    public readonly firstName: string,
    public readonly lastName: string
  ) { }
  sayHi(name: string): string {
    return `hi ${name}, I'm ${this.fullName()}`
  }
  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

function makeName(name: Name): Name {
  return name
}
makeName({
  firstName: 'kim',
  lastName: "duckbae",
  sayHi: (name: string): string => {
    return `hi ${name}`
  },
  fullName: (): string => {
    return `hi`
  }
})