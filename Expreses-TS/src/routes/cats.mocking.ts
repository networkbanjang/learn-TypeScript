export type CatType = {
  id: string;
  name: string;
  age: number;
  species: string;
  justBool: boolean;
  friends: string[];
}

export const Cat: CatType[] = [{
  id: 'string',
  name: '이름 스트링',
  age: 33,
  species: '스페셜 스트링',
  justBool: false,
  friends: ['일이삼']
},
{
  id: 'ifowo234',
  name: 'som',
  age: 4,
  species: 'Spal Cat',
  justBool: true,
  friends: ['what', 'i mean', 'so easy']
},
{
  id: '212the',
  name: 'thirdImpact',
  age: 11,
  species: 'Sham Cat',
  justBool: true,
  friends: ['askasd', 'qweklqjwke', 'asdqwkj']
},
{
  id: 'weju0fj20qj',
  name: 'red',
  age: 2,
  species: 'Sharm',
  justBool: false,
  friends: [],
},

]