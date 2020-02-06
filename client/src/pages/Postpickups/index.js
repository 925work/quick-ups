import React, { Component } from "react";
import Navbar from "../../components/NavBar";
import axios from "axios";
import Footer from "../../components/Footer";
import ClipLoader from "react-spinners/PulseLoader";
import { css } from "@emotion/core";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
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
            pickUpFloor: this.state.pickUpFloor,
            userName: this.state.userName,
            dropOffAddress: this.state.dropOffAddress,
            dropOffCity: this.state.dropOffCity,
            dropOffState: this.state.dropOffState,
            dropOffZip: this.state.dropOffZip,
            dropOffFloor: this.state.dropOffFloor,
            payOut: this.state.payOut,
            phoneNumber: this.state.phoneNumber,
            merchandise: this.state.merchandise
        };
        event.preventDefault();
        console.log(tempData);
        axios ('/api/postQuickup', {
            method: 'POST',
            data: {
                tempData
            }
        })
            .then(function (response) {
                return response
            }).then(function (body) {
                console.log(body);
            });
            
    };
    constructor(props) {
        super(props);
        this.state = {
          loading: true
        };
      }
  
      componentDidMount() {
        this.timerHandle = setTimeout(() => this.setState({ loading: false }), 1000); 
      }
    
      componentWillUnmount(){
        if (this.timerHandle) {
          clearTimeout(this.timerHandle);
          this.timerHandle = 0;
        }
      }
          
         

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };


    render() {
        return (
            <div className="postpickupscontainer">
                <div className="sweet-loading">
            <ClipLoader
              size={20}
              css={override}
              size={"50px"} this also works
              color={"#248232"}
              margin={"10px"}
              loading={this.state.loading}
            />
            </div>
                <div className="emptydiv"></div>
                <div className='horizontalline'></div>
                <Navbar />
                <form className="formscontainer">
                    <div className="container allforms">
                    <h1 className="display-4" className="text-center mt-2 mb-4">POST A PICK UP</h1>
                        <div className="form-group">
                            <label for="formGroupExampleInput">Pick up address</label>
                            <input onChange={this.handleInputChange} type="text" name="storeName" className="form-control" id="storeName" placeholder="Store Name" required/>
                        </div>
                        <div className="form-group">
                            <input onChange={this.handleInputChange} type="text" name="pickUpAddress" className="form-control" id="pickUpAddress" placeholder="Street Address" required/>
                        </div>
                        <div className="form-row">
                            <div className="col">
                                <input onChange={this.handleInputChange} type="text" name="pickUpCity" className="form-control" id="pickUpCity" placeholder="City" required/>
                            </div>
                            <div className="col">
                                <input onChange={this.handleInputChange} type="text" name="pickUpState" className="form-control" id="pickUpState" placeholder="State" required/>
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <input onChange={this.handleInputChange} type="text" name="pickUpZip" className="form-control" id="pickUpZip" placeholder="Zip Code" required/>
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <input onChange={this.handleInputChange} type="text" name="pickUpFloor" className="form-control" id="pickUpFloor" placeholder="Floor" required/>
                            </div>
                        </div>
                        <br />
                        <hr></hr>
                        <br />
                        <div className="form-group">
                            <label for="formGroupExampleInput">Drop off address</label>
                            <input onChange={this.handleInputChange} type="text" name="userName" className="form-control" id="userName" placeholder="Your Name" required/>
                        </div>
                        <div className="form-group">
                            <input onChange={this.handleInputChange} type="text" name="dropOffAddress" className="form-control" id="dropOffAddress" placeholder="Street Address" required/>
                        </div>
                        <div className="form-row">
                            <div className="col">
                                <input onChange={this.handleInputChange} type="text" name="dropOffCity" className="form-control" id="dropOffCity" placeholder="City" required/>
                            </div>
                            <div className="col">
                                <input onChange={this.handleInputChange} type="text" name="dropOffState" className="form-control" id="dropOffState" placeholder="State" required/>
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <input onChange={this.handleInputChange} type="text" name="dropOffZip" className="form-control" id="dropOffZip" placeholder="Zip Code" required/>
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <input onChange={this.handleInputChange} type="text" name="dropOffFloor" className="form-control" id="dropOffFloor" placeholder="Floor" required/>
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <input onChange={this.handleInputChange} type="text" name="payOut" className="form-control" id="payOut" placeholder="Pay Out (Minimum $15)" required/>
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <input onChange={this.handleInputChange} type="text" name="phoneNumber" className="form-control" id="phoneNumber" placeholder="Phone Number" required/>
                            </div>
                        </div>
                        <br />
                        <hr></hr>
                        <br />
                        <div className="form-group">
                            <label for="formGroupExampleInput">List of merchandise</label>
                            <input onChange={this.handleInputChange} type="text" name="merchandise" className="form-control" id="merchandise" placeholder="Refrigerator, Stove, Freezer" required/>
                        </div>
                        <div className="form-row">
                            <div className="col">
                                <button onClick={this.handleFormSubmit} type="submit" className="mb-2 postpickupsubmitbutton">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
                <Footer />
            </div>
        )
    }
}
export default Postpickups;