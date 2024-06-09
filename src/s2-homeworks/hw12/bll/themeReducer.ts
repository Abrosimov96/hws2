const initState = {
    themeId: 1,
}

type InitialStateType = typeof initState

export const themeReducer = (state = initState, action: ActionType): InitialStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {
                ...state,
                themeId: +action.id
            }
        default:
            return state
    }
}

type ChangeThemeIdType = ReturnType<typeof changeThemeId>
export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID' as const, id }) // fix any
type ActionType = ChangeThemeIdType

