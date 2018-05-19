import React, { Component } from 'react'
import Swiper from 'react-swipe'
import './index.styl'

class Banner extends Component {
    render() {
        return (
            
            <div>
                <Swiper className="swiper" swipeOptions={{continuous: true}}>
                    {this.props.list.map(e => {
                        return (<div key={e.id}><img src={e.imgUrl} /></div>)
                    })}
                </Swiper>
            </div>
        )
    }
}

export default Banner
        