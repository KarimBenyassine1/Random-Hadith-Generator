import React from 'react'
import "./Card.css"

const Card = ({hadith, error, loading}) => {
    if(error){
        return(
            <div className="card-container">
                <div className="error-body">
                    ERROR: Try refreshing or try again later.
                </div>
            </div>
        )
    }else if(hadith==null || loading){
        return(
            <div className="card-container">
                <div className="error-body">
                    <div class="loader"></div>
                </div>
            </div>
        )
    }else{
        return (
            <div className="card-container">
                <div className="card-body">
                    <h4>{`Chapter Title: ${hadith.chapterTitle}`}</h4>
                    <div className="hadith">
                    {`Hadith: ${hadith.body.replace( /(<([^>]+)>)/ig, '')}`}
                    </div>
                </div>
            </div>
        )
    }
}

export default Card
