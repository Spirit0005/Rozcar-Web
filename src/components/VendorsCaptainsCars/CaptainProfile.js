import React, { Component } from "react";
// eslint-disable-next-line
import { Redirect } from "react-router-dom";
import firebase from "firebase/app";

class CaptanProfiles extends Component{
    constructor(){
        super();
        this.state = {
            captain : null
        }   
    }

    componentDidMount(){
        firebase
        .database()
        .ref("Driver2/Captain")
        .child(this.props.match.params.id)
        .once('value', snap => {
            this.setState({
                captain : snap.val()
            })
            console.log("User",snap.val()["email"])
        });
    }

    render(){
        return(
            <div className="container">
                <h3>Captain Details</h3>

                <div className="col-12">
                <div className="row">
                    <div className="col-md-3 col-lg-3 mt-3">
                        <h6>ID: </h6>        
                    </div>
                    <div className="col-md-6 col-lg-6 mt-3">
                        <input type="text" className="form-control" 
                        defaultValue={this.state.captain !== null ? this.state.captain["ID"]: null} readOnly></input>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3 col-lg-3 mt-3">
                        <h6>Email: </h6>        
                    </div>
                    <div className="col-md-6 col-lg-6 mt-3">
                        <input type="text" className="form-control" 
                        defaultValue={this.state.captain !== null ? this.state.captain["email"]: null} readOnly></input>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3 col-lg-3 mt-3">
                        <h6>Full Name: </h6>        
                    </div>
                    <div className="col-md-6 col-lg-6 mt-3">
                        <input type="text" className="form-control" 
                        defaultValue={this.state.captain !== null ? this.state.captain["name"]: null}></input>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3 col-lg-3 mt-3">
                        <h6>Phone Number: </h6>        
                    </div>
                    <div className="col-md-6 col-lg-6 mt-3">
                        <input type="text" className="form-control" 
                        defaultValue={this.state.captain !== null ? this.state.captain["phone"]: null}></input>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3 col-lg-3 mt-3">
                        <h6>Alternate Phone Number: </h6>        
                    </div>
                    <div className="col-md-6 col-lg-6 mt-3">
                        <input type="text" className="form-control" 
                        defaultValue={this.state.captain !== null ? this.state.captain["alternatePhone"]: null}></input>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3 col-lg-3 mt-3">
                        <h6>Current Car: </h6>        
                    </div>
                    <div className="col-md-6 col-lg-6 mt-3">
                        <input type="text" className="form-control" ></input>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3 col-lg-3 mt-3">
                        <h6>Registered By: </h6>        
                    </div>
                    <div className="col-md-6 col-lg-6 mt-3">
                        <input type="text" className="form-control" 
                        defaultValue={this.state.captain !== null ? this.state.captain["RegisteredBy"]: null} readOnly></input>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-9 col-lg-9 mt-3">
                        <button type="button" className="btn btn-primary float-right">Update</button>
                    </div>
                </div>
                </div>
            </div>
        )
    };

}

export default CaptanProfiles