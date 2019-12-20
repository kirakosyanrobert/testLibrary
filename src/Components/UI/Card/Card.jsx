import React from 'react';

const Card = ({book, take, index}) => {
    return (
        <div className="card text-center" style={{width: '18rem', marginBottom: '30px'}}>
            <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                {
                    !book.busy
                    ?
                        <button 
                            type="button"
                            className="btn btn-primary"
                            onClick={() => take(book.id, index)}
                        >
                            Take
                        </button>
                    :
                    <button 
                        type="button" 
                        className="btn btn-secondary"
                        title="The book has already ordered!"
                        disabled
                     >
                         Not Aviable
                    </button>
                }
              
            </div>
        </div>
    )
}

export default Card;