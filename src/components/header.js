import React, { Component } from 'react'

// const Header = () => {
//     return (
//         <header >
//             <div className='logo'>Logo</div>
//             <input type='text' />
//         </header>
//     )
// }

class Header extends Component {
    state = {
        active: false,
        keywords: ''
    }
    onChangeHandler = (event) => {
        const value = event.target.value === '' ? false : true;


        this.setState({
            active: value,
            keywords: event.target.value
        })
    }


    render() {
        //default color
        const style = {
            background: 'red'
        }
 


        return (
            <header style={{ background: `${this.state.active ? 'blue' : 'red'}` }} >
                <div className='logo'>Logo</div>
                <input type='text' onChange={this.onChangeHandler} />
            </header>
        )
    }
}

export default Header
