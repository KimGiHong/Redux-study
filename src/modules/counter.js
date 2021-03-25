/* 액션 타입 만들기 */
// Ducks 패턴을 따를땐 액션의 이름에 접두사를 넣자.
// 이렇게 하면 다른 모듈과 액션 이름이 중복되는 것을 방지 할 수 있다.
const SET_DIFF = 'counter/SET_DIFF'; //몇 씩 더할지 정하는 액션
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

/* 액션 생성 함수 만들기 */
// 액션 생성 함수를 만들고 export로 내보내도록 하자.
export const setDiff = diff => ({ type: SET_DIFF,diff});
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

/* 초기 상태 선언 */
const initialState = {
    number: 0,
    diff: 1
};

export default function counter(state = initialState,action) {
    switch(action.type){
        case SET_DIFF:
            return{
                ...state,
                diff: action.diff
            };
        case INCREASE:
            return{
                ...state,
                number: state.number + state.diff
            }
        case DECREASE:
            return{
                ...state,
                number: state.number - state.diff
            }
        default:
            return state;
    }
}