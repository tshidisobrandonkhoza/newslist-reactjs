import React from 'react'

const Newslistitem = (props,) => {
    return (
        <div className='news-list-item' >
            {props.children}
            <h5>{props.item.title}</h5>
            <p>{props.item.feed}</p>
        </div>
    )
}

export default Newslistitem
