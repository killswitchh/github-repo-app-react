import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSearchString } from '../../features/user/userSlice'

function UserSearch() {
    const dispatch = useDispatch()
    const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault()
        dispatch(setSearchString(userName))
    }
    const [userName, setUserName] = useState<string | null>(null)

    return (
        <section>
            <form onSubmit={event => event.preventDefault()}>
                <label>
                    Github Username:
                    <input
                        type="text"
                        name="name"
                        onChange={(e: React.BaseSyntheticEvent) =>
                            setUserName(e.target.value)
                        }
                    />
                </label>
                <input
                    type="button"
                    value="Find"
                    onClick={event => handleSubmit(event)}
                />
            </form>
        </section>
    )
}

export default UserSearch
