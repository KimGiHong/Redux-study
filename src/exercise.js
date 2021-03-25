import { createStore } from 'redux';

// createStore는 스토어를 만들어주는 함수이다.
// 리액트 프로젝트에서는 단 하나의 스토어를 만든다.

/* 리덕스에서 관리 할 상태 정의 */
const initialState = {
    counter: 0,
    text: '',
    list: [],
};


/* 액션 타입 정의 */
// 액션의 타입은 주로 대문자로 작성한다.
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'GHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';


/* 액션 함수 정의*/
// 액션 함수는 주로 CamelCase로 작성한다.

const increase = () => ({
    type: INCREASE, // action 객체에는 type 값이 필수이다.
});

const decrease = () => ({
    type: DECREASE,
});

const changeText = text => ({
    type: CHANGE_TEXT,
    text // 액션 객체 안에는 type 외에 추가적인 필드를 마음대로 넣을 수 있다.
});

const addToList = item => ({
    type: ADD_TO_LIST,
    item
});


/* 리듀서 만들기 */
// 위 액션 생성함수를 통해 만들어진 객체들을 참조하여
// 새로운 상태를 만드는 함수이다.
// *주의 : 리듀서에서는 불변성을 꼭 지켜주어야한다.
function reducer(state = initialState, action) {
    switch(action.type) {
        case INCREASE:
            return{
                ...state,
                counter: state.counter+1
            };
        case DECREASE:
            return{
                ...state,
                counter: state.counter-1
            };
        case CHANGE_TEXT:
            return{
                ...state,
                text: action.text
            };
        case ADD_TO_LIST:
            return{
                ...state,
                list: state.list.concat(action.item)
            };
        default:
            return state;
    }
}

const store = createStore(reducer);
console.log(store.getState());

const listener = () => {
    const state = store.getState();
    console.log(state);
};

const unsubscribe = store.subscribe(listener);

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText("안녕하세요."));
store.dispatch(addToList({ id: 1, text:'wow'}));

window.store = store;
window.unsubscribe = unsubscribe; // 이 unsubscribe()를 호출하고 나면 액션을 dispatch를 해주어도 변화가 없다. 사실 변화는 있는 콘솔에 찍히지 않음