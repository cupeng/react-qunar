import React from "react"
import './index.styl'

class Header extends React.Component {
    render () {
        return (
            <div className="clearFix header-wrap">
                <div className="header-left"><i className="iconfont icon-fanhui"></i></div>
                <div className="header-input">
                    <i className="iconfont icon-search"></i>
                    <input placeholder="输入城市/景点/游玩主题" type="text" />
                </div>
                <div className="header-right">
                    郑州
                    <i className="iconfont icon-jiantou"></i>
                </div>
            </div>
        )
    }
}

export default Header