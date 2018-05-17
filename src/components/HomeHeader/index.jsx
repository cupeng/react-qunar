import React from "react"
import './index.styl'

class Header extends React.Component {
    render () {
        return (
            <div className="clearFix header-wrap">
                <div className="header-left fl"><i className="iconfont icon-fanhui"></i></div>
                <div className="header-right fr">
                    城市
                    <i className="iconfont icon-jiantou"></i>
                </div>
                <div className="header-input ac">
                    <div className="input-wrap">
                        <i className="iconfont icon-search"></i>
                        <input type="text" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Header