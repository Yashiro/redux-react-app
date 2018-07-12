import { createStore } from './mushroom-redux'

function counter(state=0, action) {
    switch(action.type) {
        case 'addGun':
            return state + 1
        case 'removeGun':
            return state - 1
        default:
            return 10
    }
}
const store = createStore(counter)

const init = store.getState()
console.log(init)

function listener() {
    const current = store.getState()
    console.log(`Current Gun Num => ${current}`)
}

store.subscribe(listener)

store.dispatch({type: 'addGun'})
store.dispatch({type: 'addGun'})
store.dispatch({type: 'removeGun'})
