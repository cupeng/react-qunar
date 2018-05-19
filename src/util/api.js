import axios from 'axios'

export const fetchData = (callback) => {
    axios.get('api/index.json')
        .then(res => {
            callback(res)
    })
}
