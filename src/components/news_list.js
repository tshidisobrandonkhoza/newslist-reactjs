import React from 'react'
import Newslistitem from './news_list_item'
const Newslist = (props) => {
    const items = props.news.map(item => {

        return (
            <Newslistitem key={item.id} item={item} >
                <h3>News list item</h3>
            </Newslistitem>
        )
    })
    return (
        <div>
            {items}
        </div>
    )
}

export default Newslist
