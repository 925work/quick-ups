import React, { Component } from "react";
import Navbar from "../../components/NavBar";
class Postpickups extends Component {
    state = {
        results: []
    };

    handleFormSubmit = event => {
        let tempData = {
            storeName: this.state.storeName,
            pickUpAddress: this.state.pickUpAddress,
            pickUpCity: this.state.pickUpCity,
            pickUpState: this.state.pickUpState,
            pickUpZip: this.state.pickUpZip,
            userName: this.state.userName,
            dropOffAddress: this.state.dropOffAddress,
            dropOffCity: this.state.dropOffCity,
            dropOffState: this.state.dropOffState,
            dropOffZip: this.state.dropOffZip,
            payOut: this.state.payOut,
        };
        event.preventDefault();
        console.log(tempData);
        fetch ('/postPickUp', {
            method: 'POST',
            data: {
                tempData
            }
        })
            .then(function (response) {
                return response.json()
            }).then(function (body) {
                console.log(body);
            });

    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };


    render() {
        return (
            <div>
                <div className="emptydiv"></div>
                <Navbar />
                <form>
                    <div className="container">
                        <div className="form-group">
                            <label for="formGroupExampleInput">Pick up address</label>
                            <input onChange={this.handleInputChange} type="text" name="storeName" className="form-control" id="storeName" placeholder="Store Name" />
                        </div>
                        <div className="form-group">
                            <input onChange={this.handleInputChange} type="text" name="pickUpAddress" className="form-control" id="pickUpAddress" placeholder="Street Address" />
                        </div>
                        <div className="form-row">
                            <div className="col">
                                <input onChange={this.handleInputChange} type="text" name="pickUpCity" className="form-control" id="pickUpCity" placeholder="City" />
                            </div>
                            <div className="col">
                                <input onChange={this.handleInputChange} type="text" name="pickUpState" className="form-control" id="pickUpState" placeholder="State" />
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <input onChange={this.handleInputChange} type="text" name="pickUpZip" className="form-control" id="pickUpZip" placeholder="Zip Code" />
                            </div>
                        </div>
                        <br />
                        <div className="form-group">
                            <label for="formGroupExampleInput">Drop off address</label>
                            <input onChange={this.handleInputChange} type="text" name="userName" className="form-control" id="userName" placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                            <input onChange={this.handleInputChange} type="text" name="dropOffAddress" className="form-control" id="dropOffAddress" placeholder="Street Address" />
                        </div>
                        <div className="form-row">
                            <div className="col">
                                <input onChange={this.handleInputChange} type="text" name="dropOffCity" className="form-control" id="dropOffCity" placeholder="City" />
                            </div>
                            <div className="col">
                                <input onChange={this.handleInputChange} type="text" name="dropOffState" className="form-control" id="dropOffState" placeholder="State" />
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <input onChange={this.handleInputChange} type="text" name="dropOffZip" className="form-control" id="dropOffZip" placeholder="Zip Code" />
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <input onChange={this.handleInputChange} type="text" name="payOut" className="form-control" id="payOut" placeholder="Pay Out (Minimum $15)" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="formGroupExampleInput">List of merchandise</label>
                            <input onChange={this.handleInputChange} type="text" name="storeName" className="form-control" id="merchandise" placeholder="Refrigerator, Stove, Freezer" />
                        </div>
                        <div className="form-row">
                            <div className="col">
                                <button onClick={this.handleFormSubmit} type="submit" className="btn btn-primary mb-2">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default Postpickups;