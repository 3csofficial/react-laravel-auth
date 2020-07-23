import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

class Table extends React.Component{

	/**
     * The function renders the data on the web page.
     * @return {React.ReactElement} 
     */
    render() {
    	const { columns, propData } = this.props;

    	return (
            <div>
            	<BootstrapTable 
            		keyField='id' 
            		data={ propData } 
            		columns={ columns }
            		pagination={ paginationFactory() }
            	/>
            </div>
        );
    }
}
export default Table;