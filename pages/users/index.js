import React from 'react'

const index = ({ users }) => {
    return (
        <div>
            <h2>This is users main page{users.length}</h2>
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