
//                     <div id="right-side">
//                     <div id="list">
//                         {this.state.currentSection === "MyAssignments"?
//                         <ShowAssignments klass={klass}
//                         currentUser = {currentUser}
//                         // show detail
//                         getAssign = {this.getAssign}
//                         showDetail = {this.state.showDetail}
//                         detailAssign = {this.state.detailAssign}
//                         // create props
//                         createAssign={createAssign} 
//                         assignments={filtered}
//                         //  edit props
//                         editAssigns = {editAssigns}
//                         // delete props
//                         handleDelete = {handleDelete}
//                         //   back
//                         handleBack = {this.handleBack} 
//                         /> : this.state.currentSection === 'MyGrades'? 
//                         <GradeContainer grades= {this.state.grades} klass={klass}  assignments={filtered} />
//                         : this.state.currentSection === "Syllabus" ?
//                         <Syllabus/>: null}
//                     </div>
//                  </div>


// <div id="left-side">
// <div onClick={()=> this.setCurrentSection('MyAssignments')}>All Assignments</div>
// <div  onClick={()=> this.setCurrentSection('MyGrades')}>Grades</div>
// <div  onClick={()=> this.setCurrentSection('Syllabus')}>Syllabus</div>
// </div>