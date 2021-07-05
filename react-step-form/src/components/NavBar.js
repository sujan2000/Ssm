import React from 'react'

const NavBar = ({handleLogout,articles,username}) => {
    return username ? (
        <h1>Articles</h1>
    ):(
        <section>
            {articles.map((article)=>(
                <h1>{article.body}</h1>
            ))}
        </section>
    )
}

export default NavBar