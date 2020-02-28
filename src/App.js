import React, { Component } from 'react';
import Resume from './Resume'
import Basics from './Basics'
import Work from './Work'
import Education from './Education'
import Skills from './Skills'
import Volunteer from './Volunteer'

class App extends Component {
    componentDidMount(){
        document.title = Resume.basics.name
    }

    render() {
        return (
            <div className="container-fluid">
                <Basics items={Resume.basics}/>
                <div className="row d-print-inline">
                    <div className="col-12 col-xl-6">
                        <Work items={Resume.work}/>
                    </div>
                    <div className="col-12 col-xl-6">
                        <Skills items={Resume.skills}/>
                    </div>
                    <div className="col-12 col-xl-6">
                        <Education items={Resume.education}/>
                    </div>
                    <div className="col-12 col-xl-6">
                        <Volunteer items={Resume.volunteer}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
