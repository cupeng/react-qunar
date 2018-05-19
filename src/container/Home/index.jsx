import React,{Component} from 'react'
import Header from 'components/HomeHeader/'
import Banner from 'components/HomeBanner/'
import Icon from 'components/HomeIcon/'
import { fetchData } from 'util/api.js'
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            swiperList: [],
            weekendList: [],
            iconList: [],
            recommendList: []
        }
    }
    
    componentDidMount () {
        fetchData(res=>{
            this.setState (res.data.data)
        })
    }
    render () {
        return this.state.swiperList.length > 0 ? (
            <div>
                <Header />
                <Banner list={this.state.swiperList} />
                <Icon list={this.state.iconList} />
            </div>
        ) : null
    }
}
export default Home