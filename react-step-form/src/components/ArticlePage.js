
import React from 'react'

function ArticlePage(props) {
    const displayArticle = (props) =>{

    const {articles,handleData} = props;
    
    if(articles){
        return (
        articles.map((article,index)=>{
        console.log(article);
        return (
            
            <div key={article.id}>
                <h4>{article.title}</h4>
                <h4>{article.body}</h4>
                <h4>{index.body}</h4>
                <div>
            <button onClick={handleData} >Article</button>
            </div>
        
            </div>
        )
        })
    )}else{
        return (<h4>NO article</h4>)
    }
}
return (
    <>
   {displayArticle(props)}
    </>
)
}

export default ArticlePage
