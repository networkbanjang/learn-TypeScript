//타입스크립트 파일에게 JS 파일을 확인하라고 알리는것, //@ts-check을 기입한다.

//@ts-check 
/**
 * 설명을 해줄수있다.
 * @param {object} config 
 * @param {string} config.url
 * @returns {boolean}
 * 
 */
export function init(config) {
  return true;
}
/**
 * 
 * @param {number} code
 * @return {number}
 */
export function exit(code) {
  return code + 1;
}