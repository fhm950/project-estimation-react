import React from 'react';

class DisplayTable extends React.component {
    constructor(props){
        super(props)
        this.state = {
            list: []
        }

        this.callAPI = this.callAPI.bind(this)
        this.callAPI();
    }

    callAPI() {
        fetch("http://dummy.restapiexample.com/api/v1/employees").then(
            (response) => response.json()
        ).then((data) => {
            console.log(data)
        })
    }
    
    render() {
        return(
            <div>

            </div>
        )
    }

}
export default DisplayTable;