import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Table from '../utils/Table';

class Users extends PureComponent {

    componentWillMount() {
        this.props.fetchUsers();
    }

    getColumns() {
      
        let dataAlign = 'center';
  
        return [
            {
                columnTitle: 'Name',
                dataField: 'name',
                dataAlign:dataAlign,
                text: 'Name',
                width: "180px"            
            },
            {
                columnTitle: 'Email',
                dataField: 'email',
                dataAlign:dataAlign,
                text: 'Email',
                width: "200px"          
            }
        ];
    }

    render() {
        if (!this.props.users) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h4>Users Listing</h4>
                <ul>
                    <Table 
                        columns={this.getColumns()} 
                        propData={this.props.users.user}
                    />
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state,'state')
    return { users: state.users.users }
}

export default connect(mapStateToProps, actions)(Users);
