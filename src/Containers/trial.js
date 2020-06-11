{/* <div id="whole-grid" className="ui  grid" >
                    <div className="row">
                        <div  className="four wide black column">
                            
                             Side Bar
                            <SideBar   clickAssigns = {this.clickAssigns}/>
                        
                        </div>
                    
                        <div className="twelve wide white column">
                        <h1>MiddleContainer</h1>

                        <br/>
                        <div className= "assignments">
                            
                        <MiddleContainer klass={this.props.klass}
                                          currentUser = {this.props.currentUser}

                                        handleClick ={this.handleClick}
                                        showForm= {this.state.showForm}
                                       
                                        showAssigs = {this.state.isAssignements}
                                        displayAssigns= {this.displayAssigns}
                                         createAssign={this.props.createAssign} 
                                         assignments={this.props.assignments}
                                        handleEdit= {this.handleEdit}
                                        editForm ={this.state.editForm}
                                        editAssign = {this.state.editAssign}
                                        editAssigns = {this.props.editAssigns}
                                        handleDelete = {this.props.handleDelete}
                                    
                                         />

                        </div>
                        
                              
                             

                                            
                        </div>
                    </div>
                   
                 </div>
              

            //   middle container
            <div>
            {this.props.showAssigs === false ?
                <img className="ui medium aligned circular image" src={this.props.klass.img}/>
            : null
            }
               
        
            <div>
                <h2 className="ui center aligned icon header">
             
                {this.props.klass.name} 
                </h2>
            

            </div>
         
          
                {this.props.showAssigs && this.props.showForm=== false && this.props.editForm === false ?
                <Assignments klass ={this.props.klass }
                            assignments ={this.props.assignments} 
                            handleEdit = {this.props.handleEdit}
                            handleDelete = {this.props.handleDelete}
                            handleClick = {this.props.handleClick}
                            
                    />   : this.props.editForm? <EditAssignment assign= {this.props.editAssign} 
                                                                editAssigns={this.props.editAssigns}  
                                                                displayAssigns = {this.props.displayAssigns}  /> :
                
                    this.props.showForm ? < AssignmentForm klass = {this.props.klass}
                                                    createAssign = {this.props.createAssign}
                                                    displayAssigns = {this.props.displayAssigns}/>
                    :null
                }

     
            
            
        </div> */}