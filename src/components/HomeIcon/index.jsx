import React, { Component } from 'react'
import './index.styl'

class Icon extends Component {
    constructor (props) {
        super (props)
        this.state = {
            pages: []
        }
    }
    render() {
        const pages = []
        this.props.list.map((e,i) => {
            const page = Math.floor(i / 8)
            if (!pages[page]) {
                pages[page] = []
            }
            pages[page].push(e)
        })
        return (
            <div className="icon-wrap">
                { pages.map((page,index) => {
                    page.map(item => {
                        <div key={item.id}>
                            <img src={item.imgUrl} />
                            <p className="icon-title">{item.desc}</p>
                        </div>
                    })
                }) }
            </div>
        );
    }
}
export default Icon