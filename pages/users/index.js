import React from 'react'
import Link from 'next/link'

const index = ({ users }) => {
    return (
        <div>
            <h2>This is users main page{users.length}</h2>
            {
                users.map(user => <div
                    key={user.id}
                >
                    <h3>Name: {user.name}
                        <li>
                            <Link href={`/users/${user.id}`}>
                                <button>Explore</button>
                            </Link>
                        </li></h3>
                </div>)
            }
        </div>
    )
}

export default index

export async function getStaticProps(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return {
        props: { users: data },
    }
}