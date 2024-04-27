import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const stateCopy = state.map(user => ({...user}))
            if (action.payload === 'up') stateCopy.sort((userA, userB) => userA.name > userB.name ? 1 : -1)
            else if (action.payload === 'down') stateCopy.sort((userA, userB) => userA.name < userB.name ? 1 : -1)
            return stateCopy // need to fix
        }
        case 'check': {
            return state.filter(user => user.age >= 18) // need to fix
        }
        default:
            return state
    }
}
