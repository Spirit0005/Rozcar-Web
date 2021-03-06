import React, { Component } from "react";
// eslint-disable-next-line
import { Redirect } from "react-router-dom";
import firebase from "firebase/app";
import { Modal } from 'react-bootstrap';

class UserCompleteData extends Component{
    constructor(){
        super();
        this.state = {
            User : null
        }   
    }

    componentDidMount(){
        firebase
        .database()
        .ref("User2/UserInfo")
        .child(this.props.match.params.id)
        .on('value', snap => {
            this.setState({
                User : snap.val()
            })
            console.log("User",snap.val()["Email"])
        });
    }


    render(){
        return(
            <div className="container mb-3">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <h3>User Complete Data</h3>

                <div className="col-12">
                    <div className="row">
                        <div className="col-md-2 col-lg-2 mt-3">
                            <h6>First Name: </h6>        
                        </div>
                        <div className="col-md-4 col-lg-4 mt-3">
                            <input type="text" id="firstname" className="form-control" 
                            defaultValue={this.state.User !== null ? this.state.User["Name"]: null} ></input>
                        </div>
                        

                        <div className="col-md-2 col-lg-2 mt-3">
                            <h6>Last Name: </h6>        
                        </div>
                        <div className="col-md-4 col-lg-4 mt-3">
                            <input type="text" id="lastname" className="form-control" 
                            defaultValue={this.state.User !== null ? this.state.User["LastName"]: null} ></input>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-2 col-lg-2 mt-3">
                            <h6>Email: </h6>        
                        </div>
                        <div className="col-md-4 col-lg-4 mt-3">
                            <input type="text" className="form-control" 
                            defaultValue={this.state.User !== null ? this.state.User["Email"]: null} readOnly></input>
                        </div>

                        <div className="col-md-2 col-lg-2 mt-3">
                            <h6>Gender: </h6>        
                        </div>
                        <div className="col-md-4 col-lg-4 mt-3">
                            <input type="text" id="gender" className="form-control" 
                            defaultValue={this.state.User !== null ? this.state.User["Gender"]: null}></input>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-md-2 col-lg-2 mt-3">
                            <h6>Phone Number: </h6>        
                        </div>
                        <div className="col-md-4 col-lg-4 mt-3">
                            <input type="text" id="PhoneNumber" className="form-control" 
                            defaultValue={this.state.User !== null ? this.state.User["Phone"]: null} ></input>
                        </div>

                        <div className="col-md-2 col-lg-2 mt-3">
                            <h6>Member Number: </h6>        
                        </div>
                        <div className="col-md-4 col-lg-4 mt-3">
                            <input type="text" id="MemberNo"  className="form-control" 
                            defaultValue={this.state.User !== null ? this.state.User["MemberNo"]: null} ></input>
                        </div>
                    </div>

                    


                    <div className="row">
                        <div className="col-md-2 col-lg-2 mt-3">
                            <h6>Occupation: </h6>        
                        </div>
                        <div className="col-md-4 col-lg-4 mt-3">
                            <input type="text" id="occupation" className="form-control" 
                            defaultValue={this.state.User !== null ? this.state.User["Occupation"]: null}></input>
                        </div>

                        <div className="col-md-2 col-lg-2 mt-3">
                            <h6>Institute Name: </h6>        
                        </div>
                        <div className="col-md-4 col-lg-4 mt-3">
                            <input type="text" id="institutename" className="form-control"
                            defaultValue={this.state.User !== null ? this.state.User["InstituteName"]: null} ></input>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-md-2 col-lg-2 mt-3">
                            <h6>Office Address: </h6>        
                        </div>
                        <div className="col-md-4 col-lg-4 mt-3">
                            <input type="text" id="officeaddress" className="form-control" 
                            defaultValue={this.state.User !== null ? this.state.User["OfficeAddress"]: null} ></input>
                        </div>

                        <div className="col-md-2 col-lg-2 mt-3">
                            <h6>Residential Address: </h6>     
                        </div>
                        <div className="col-md-4 col-lg-4 mt-3">
                            <input type="text" id="residentialaddress" className="form-control" 
                            defaultValue={this.state.User !== null ? this.state.User["ResidentialAddress"]: null} ></input>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-md-2 col-lg-2 mt-3">
                            <h6>Group ID: </h6>        
                        </div>
                        <div className="col-md-4 col-lg-4 mt-3">
                            <input type="text" id="groupID" className="form-control" 
                            defaultValue={this.state.User !== null ? this.state.User["GroupID"]: null} ></input>
                        </div>

                        <div className="col-md-2 col-lg-2 mt-3">
                            <h6>Drop Area: </h6>        
                        </div>
                        <div className="col-md-4 col-lg-4 mt-3">
                            <input type="text" className="form-control" 
                            defaultValue={this.state.User !== null ? this.state.User["DropArea"]: null} readOnly></input>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-md-2 col-lg-2 mt-3">
                            <h6>Drop Leader: </h6>        
                        </div>
                        <div className="col-md-4 col-lg-4 mt-3">
                            <select type="text" id="dropleader" className="form-control" 
                            defaultValue={this.state.User !== null ? this.state.User["DropLeader"]: null} >
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>
                        </div>

                        <div className="col-md-2 col-lg-2 mt-3">
                            <h6>Date: </h6>        
                        </div>
                        <div className="col-md-4 col-lg-4 mt-3">
                            <input type="text" className="form-control" 
                            defaultValue={this.state.User !== null ? this.state.User["Date"]: null} readOnly></input>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-2 col-lg-2 mt-3">
                            <h6>Starting Date: </h6>        
                        </div>
                        <div className="col-md-4 col-lg-4 mt-3">
                            <input type="text" id="startingdate" className="form-control" 
                            defaultValue={this.state.User !== null ? this.state.User["StartingDate"]: null} ></input>
                        </div>

                        <div className="col-md-2 col-lg-2 mt-3">
                            <h6>Time: </h6>        
                        </div>
                        <div className="col-md-4 col-lg-4 mt-3">
                            <input type="text" className="form-control" 
                            defaultValue={this.state.User !== null ? this.state.User["Time"]: null} readOnly></input>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-2 col-lg-2 mt-3">
                            <h6>Form One: </h6>   
                        </div>
                        <div className="col-md-4 col-lg-4 mt-3">
                            <select type="select" id="formone" className="form-control" 
                            defaultValue={this.state.User !== null ? this.state.User["FormOne"]: null} >
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>
                        </div>

                        <div className="col-md-2 col-lg-2 mt-3">
                            <h6>Form Two: </h6>   
                        </div>
                        <div className="col-md-4 col-lg-4 mt-3">
                            <select type="select" id="formtwo" className="form-control" 
                            defaultValue={this.state.User !== null ? this.state.User["FormTwo"]: null} >
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md-2 col-lg-2 mt-3">
                            <h6>Form Three: </h6>   
                        </div>
                        <div className="col-md-4 col-lg-4 mt-3">
                            <select type="select" id="formthree" className="form-control" 
                            defaultValue={this.state.User !== null ? this.state.User["FormThree"]: null} >
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>
                        </div>

                        <div className="col-md-2 col-lg-2 mt-3">
                            <h6>Leader: </h6>   
                        </div>
                        <div className="col-md-4 col-lg-4 mt-3">
                            <select type="select" className="form-control" 
                            defaultValue={this.state.User !== null ? this.state.User["LeaderBool"]: null} >
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md-2 col-lg-2 mt-3">
                            <h6>Package: </h6>   
                        </div>
                        <div className="col-md-4 col-lg-4 mt-3">
                            <select type="select" id="package" className="form-control" 
                            defaultValue={this.state.User !== null ? this.state.User["Package"]: null} >
                                <option value="R1">R1</option>
                                <option value="R2">R2</option>
                                <option value="R3">R3</option>
                                <option value="R4">R4</option>
                                <option value="R5">R5</option>
                                <option value="R6">R6</option>
                                <option value="R7">R7</option>
                            </select>
                        </div>

                        <div className="col-md-2 col-lg-2 mt-3">
                            <h6>Pick Leader: </h6>   
                        </div>
                        <div className="col-md-4 col-lg-4 mt-3">
                            <select type="select" id="pickleader" className="form-control" 
                            defaultValue={this.state.User !== null ? this.state.User["PickLeader"]: null} >
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>
                        </div>

                    </div>


                    <div className="row">
                        <div className="col-md-2 col-lg-2 mt-3">
                            <h6>Reject Message: </h6>   
                        </div>
                        <div className="col-md-4 col-lg-4 mt-3">
                            <textarea type="text" className="form-control" 
                            defaultValue={this.state.User !== null ? this.state.User["RejectMessage"]: null} >
                            </textarea>
                        </div>

                        <div className="col-md-2 col-lg-2 mt-3">
                            <h6>Transcribed: </h6>   
                        </div>
                        <div className="col-md-4 col-lg-4 mt-3">
                            <select type="select" id="transcribed" className="form-control" 
                            defaultValue={this.state.User !== null ? this.state.User["Transcribed"]: null} >
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>
                        </div>
                    </div>
                    


                    <div className="row">
                        <div className="col-md-12 col-lg-12 mt-3">
                            <button type="button" onClick={(e) => this.UpdateFields()} className="btn btn-primary float-right ml-2">Update</button>
                            <button type="button" className="btn btn-danger float-right ml-2"><i className="fa fa-ban mr-2"></i>Block</button>
                            <button type="button" className="btn btn-warning float-right"><i className="fa fa-close mr-2"></i>Reject</button>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        )
    };

    UpdateFields = () => {
        //yahan update krny per saari fields update hungi
        console.log("IDD",this.props.match.params.id);
        var userupdateddata = {
            Name: document.getElementById("firstname").value,
            LastName : document.getElementById("lastname").value,
            LeaderBool : document.getElementById("firstname").value,
            Phone : document.getElementById("PhoneNumber").value,
            MemberNo : document.getElementById("MemberNo").value,
            Occupation : document.getElementById("occupation").value,
            OfficeAddress: document.getElementById("officeaddress").value,
            ResidentialAddress : document.getElementById("residentialaddress").value,
            InstituteName : document.getElementById("institutename").value,
            LeaderBool : document.getElementById("firstname").value,
            StartingDate : document.getElementById("PhoneNumber").value,
            PickLeader : document.getElementById("MemberNo").value,
            DropLeader : document.getElementById("dropleader").value,
            GroupID : document.getElementById("groupID").value,
            FormOne : document.getElementById("formone").value,
            FormTwo : document.getElementById("formtwo").value,
            FormThree : document.getElementById("formthree").value,
            Gender : document.getElementById("gender").value,
            Package : document.getElementById("package").value,
            Transcribed : document.getElementById("transcribed").value,
        }
        console.log("USerDaat",userupdateddata)
        // firebase.database()
        // .ref()
        // .child("User2/UserInfo")
        // .child(this.props.match.params.id)
        // .update({     
        //     Name: document.getElementById("firstname").value,
        //     LastName : document.getElementById("lastname").value,
        //     LeaderBool : document.getElementById("firstname").value,
        //     Phone : document.getElementById("PhoneNumber").value,
        //     MemberNo : document.getElementById("MemberNo").value,
        //     Occupation : document.getElementById("occupation").value,
        //     OfficeAddress: document.getElementById("officeaddress").value,
        //     ResidentialAddress : document.getElementById("residentialaddress").value,
        //     InstituteName : document.getElementById("institutename").value,
        //     LeaderBool : document.getElementById("firstname").value,
        //     StartingDate : document.getElementById("PhoneNumber").value,
        //     PickLeader : document.getElementById("MemberNo").value,
        //     DropLeader : document.getElementById("dropleader").value,
        //     GroupID : document.getElementById("groupID").value,
        //     FormOne : document.getElementById("formone").value,
        //     FormTwo : document.getElementById("formtwo").value,
        //     FormThree : document.getElementById("formthree").value,
        //     Gender : document.getElementById("gender").value,
        //     Package : document.getElementById("firstnampackagee").value,
        //     Transcribed : document.getElementById("transcribed").value,
        // })
    }
}

export default UserCompleteData