// 외부 공유 상수, 함수 선언
const conHello = '안녕!';
const fnPlusNumbers = (pNum1, pNum2) => pNum1 + pNum2;

// 외부에서 사용을 위해 내보내기
export { conHello, fnPlusNumbers }

// 앞에 export를 붙여서 내보내기를 쉽기할 수 있어!
// export const fnPlusNumbers = (pNum1, pNum2) => pNum1 + pNum2;
