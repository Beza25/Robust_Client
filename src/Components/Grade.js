import React, { Component } from 'react'

 class Grade extends Component {
    render() {
        return (
            <div>
                Grade

                <i class="check square outline icon"></i>

                <table class="ui celled table">
                    <thead>
                        <tr>
                        <th>Student</th>
                        <th>Assignment</th>
                        <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>No Name Specified</td>
                        <td>Unknown</td>
                        <td class="negative">None</td>
                        </tr>
                    </tbody>
                    </table>
                                    
            </div>
        )
    }
}
export default Grade
