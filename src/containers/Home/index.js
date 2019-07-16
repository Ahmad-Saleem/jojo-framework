import React from 'react'
import { connect } from 'react-redux'

import { fetchRequest } from '../../store/actions'

class Home extends React.Component {

    componentDidMount(){
        this.props.getUsers({page: 1})
    }

    render(){
        const { users } = this.props
        console.log(users)
        return(
            <div>
                <h1> Home </h1>
                <div>
                    {
                        users && users.map(item => <div key={item.id}>{`${item.first_name} ${item.last_name}, ${item.email}`}</div>)
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({home}) => ({
    users: home.users ? home.users.data : [],
})

const mapDispatchToProps = dispatch => ({
    getUsers: page => dispatch(fetchRequest({page})),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)