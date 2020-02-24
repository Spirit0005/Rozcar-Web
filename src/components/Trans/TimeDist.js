import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class TimeDist extends Component{
    
    constructor(){
        super();
        this.state = {
            tableContent : []
        }
    }
    
    
    componentWillMount(){
        console.log("TimeDis",this.props.UserProfile);
        console.log("PickUpSchedule",this.props.PickUpSchedule)
        console.log("DropOffSchedul",this.props.DropOffSchedul)
        console.log("PickupLocation",this.props.PickupLocation)
        console.log("DropOffLocation",this.props.DropOffLocation)
        for(let i = 0; i < this.props.UserProfile.length; i++){
            this.state.tableContent.push(this.props.UserProfile[i].Name);
        }
    }

    printValue = (User) => {
        console.log("User",User);
    }
    TableContent = () => {
        var table = [];
        for(let i = 0; i < this.state.tableContent.length; i ++){
            table.push(
                <option key={i} onChange={this.printValue(this.props.UserProfile[i])} value={this.props.UserProfile[i]}>{this.state.tableContent[i]}</option>
            )
        }
        return table;
    }

    setTextBoxesForRoute = () => {
        
        var table = [];
        var StrClassName = "";
        var OtherdivClassname = "";
        var index = 1;
        for(let i = 0; i < (this.props.PickupLocation.length * 2); i++){
            if((i % 2) === 0){
                StrClassName = "content-left-container";
                OtherdivClassname = "content-left"
            }else{
                StrClassName = "content-right-container";
                OtherdivClassname = "content-right"
            }
            table.push(
                <div key={i} className="timeline-article">
                    <div className={StrClassName}>
                        <div className={OtherdivClassname}>
                            <p>
                                <span className="article-number">
                                    <select className="form-control"
                                    name={"M"+(i+1)}>
                                        {this.TableContent()}
                                    </select>
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="meta-date">             
                        <div className="date">                       
                            <a href="www.facebook.com" target="_blank">
                                <i className="fa fa-map-marker">Click here</i></a>
                        </div>
                    </div>
                </div>
            )
        }
        return table;
    }

    render(){
        return(
            <div className="container">

                {/* PICK UP TABLE AND TIMELINE STARTS */}
                <div className="row">

                    {/* TABLE STARTS HERE */}
                    <div className="col-md-6 col-lg-6 mt-5">
                        <div className="card">
                        <div className="card-header">
                            <h1>Pick Up</h1>
                        </div>
                        <div className="card-body">
                            <div className="input-group pb-4">
                                <div className="col-2">
                                    <h6>Total</h6>
                                </div>
                                <div className="col-5">
                                    <input className="form-control"
                                    type="text"
                                    name="totalTime"
                                    id="totalTime"
                                    placeholder="60 (in mins)" required/>
                                </div>

                                <div className="col-5">
                                    <input className="form-control"
                                    type="text"
                                    name="totalDistance"
                                    id="totalDistance"
                                    placeholder="50 (in meters)" required/>
                                </div>
                            </div>



                            <div className="input-group pb-4">
                                <div className="col-2">
                                    <h6>M1-M2</h6>
                                </div>
                                <div className="col-5">
                                    <input className="form-control"
                                    type="text"
                                    name="t1"
                                    id="t1"
                                    placeholder="60 (in mins)" required/>
                                </div>

                                <div className="col-5">
                                    <input className="form-control"
                                    type="text"
                                    name="d1"
                                    id="d1"
                                    placeholder="50 (in meters)" required/>
                                </div>
                            </div>


                            <div className="input-group pb-4">
                                <div className="col-2">
                                    <h6>M2-M3</h6>
                                </div>
                                <div className="col-5">
                                    <input className="form-control"
                                    type="text"
                                    name="t2"
                                    id="t2"
                                    placeholder="60 (in mins)" required/>
                                </div>

                                <div className="col-5">
                                    <input className="form-control"
                                    type="text"
                                    name="d2"
                                    id="d2"
                                    placeholder="50 (in meters)" required/>
                                </div>
                            </div>


                            <div className="input-group pb-4">
                                <div className="col-2">
                                    <h6>M3-M4</h6>
                                </div>
                                <div className="col-5">
                                    <input className="form-control"
                                    type="text"
                                    name="t3"
                                    id="t3"
                                    placeholder="60 (in mins)" required/>
                                </div>

                                <div className="col-5">
                                    <input className="form-control"
                                    type="text"
                                    name="d3"
                                    id="d3"
                                    placeholder="50 (in meters)" required/>
                                </div>
                            </div>
                        </div>

                        <div className="card-footer">
                            <button type="button" className="btn btn-primary float-right mt-2">Submit</button>
                        </div>
                        </div>
                    </div>
                    {/* PICKUP TABLE ENDS */}


                    {/* TIMELINE STARTS HERE */}
                    <div className="col-md-6 col-lg-6 mb-5 mt-5">
                    
                        {/* RADIO BUTTONS START */}
                        <span className="mr-2">
                            <input type="radio" id="routeChoice1"
                            name="route" value="up" checked />
                            <label htmlFor="routeChoice1">Up Route</label>
                        </span>

                        <span>
                            <input type="radio" id="routeChoice2"
                            name="route" value="down" />
                            <label htmlFor="routeChoice2">Down Route</label>
                        </span>
                        {/* RADIO BUTTONS END */}
                        
                        <section id="conference-timeline">
                            <div className="timeline-start">Route</div>

                            <div className="conference-center-line"/>
                            <div className="conference-timeline-content"></div>

                                {/* FIRST SEVEN SELECTS */}

                                {
                                    this.setTextBoxesForRoute()
                                }
                        </section>
                        
                            <button className="btn btn-primary float-right" type="submit">Done</button>
                            {/*Link to generate the complete route*/}
                            <a href="www.facebook.com" target="_blank"
                            rel="noopener noreferrer" className="btn btn-primary float-right mr-2">Generate</a>
                            <button type="button" className="btn btn-danger float-right mr-2">Reject</button>
                    </div>

                </div>
                {/* PICKUP TABLE AND TIMELINE ENDS */}


                {/* DROP OFF TABLE AND TIMELINE STARTS */}
                <div className="row">
                <div className="col-md-6 col-lg-6 mt-5">
                        <div className="card">
                        <div className="card-header">
                            <h1>Drop Off</h1>
                        </div>
                        <div className="card-body">
                            <div className="input-group pb-4">
                                <div className="col-2">
                                    <h6>Total</h6>
                                </div>
                                <div className="col-5">
                                    <input className="form-control"
                                    type="text"
                                    name="totalTime"
                                    id="totalTime"
                                    placeholder="60 (in mins)" required/>
                                </div>

                                <div className="col-5">
                                    <input className="form-control"
                                    type="text"
                                    name="totalDistance"
                                    id="totalDistance"
                                    placeholder="50 (in meters)" required/>
                                </div>
                            </div>



                            <div className="input-group pb-4">
                                <div className="col-2">
                                    <h6>M1-M2</h6>
                                </div>
                                <div className="col-5">
                                    <input className="form-control"
                                    type="text"
                                    name="t1"
                                    id="t1"
                                    placeholder="60 (in mins)" required/>
                                </div>

                                <div className="col-5">
                                    <input className="form-control"
                                    type="text"
                                    name="d1"
                                    id="d1"
                                    placeholder="50 (in meters)" required/>
                                </div>
                            </div>


                            <div className="input-group pb-4">
                                <div className="col-2">
                                    <h6>M2-M3</h6>
                                </div>
                                <div className="col-5">
                                    <input className="form-control"
                                    type="text"
                                    name="t2"
                                    id="t2"
                                    placeholder="60 (in mins)" required/>
                                </div>

                                <div className="col-5">
                                    <input className="form-control"
                                    type="text"
                                    name="d2"
                                    id="d2"
                                    placeholder="50 (in meters)" required/>
                                </div>
                            </div>


                            <div className="input-group pb-4">
                                <div className="col-2">
                                    <h6>M3-M4</h6>
                                </div>
                                <div className="col-5">
                                    <input className="form-control"
                                    type="text"
                                    name="t3"
                                    id="t3"
                                    placeholder="60 (in mins)" required/>
                                </div>

                                <div className="col-5">
                                    <input className="form-control"
                                    type="text"
                                    name="d3"
                                    id="d3"
                                    placeholder="50 (in meters)" required/>
                                </div>
                            </div>
                        </div>

                        <div className="card-footer">
                            <button type="button" className="btn btn-primary float-right mt-2">Submit</button>
                        </div>
                        </div>
                    </div>
                </div>


                

                {/* DROPOFF TABLE ENDS */}


            </div>
        );
    }
}
export default withRouter(TimeDist)