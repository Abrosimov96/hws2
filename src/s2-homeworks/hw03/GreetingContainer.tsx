import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void  // need to fix any
}

const INVALID_NAME: string = 'Ошибка! Введите имя!'
const EMPTY_STRING: string = ''

const isNotEmptyOrSpaces = (string: string) => /\S/.test(string)

export const pureAddUser = (name: string, setError: (error: string) => void, setName: (name: string) => void, addUserCallback: (name: string) => void) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
    if (isNotEmptyOrSpaces(name)) {
        addUserCallback(name)
        setName(EMPTY_STRING)
    } else {
        setError(INVALID_NAME)
    }
}

export const pureOnBlur = (name: string, setError: (error: string) => void) => { // если имя пустое - показать ошибку
    if (!isNotEmptyOrSpaces(name)) setError(INVALID_NAME)
}

export const pureOnEnter = (e: KeyboardEvent, addUser: () => void) => { // если нажата кнопка Enter - добавить
    if (e.key === 'Enter') addUser()
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                     users,
                                                                     addUserCallback,
                                                                 }) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>(EMPTY_STRING) // need to fix any
    const [error, setError] = useState<string>(EMPTY_STRING) // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value) // need to fix

        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: any) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length // need to fix
    const lastUserName = users.length > 0 ? users[users.length - 1].name : EMPTY_STRING  // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
