import React from 'react';
import '../css/project.css';

class Project extends React.Component {
    constructor(props) {
        super(props);
        const filename = props.filename+'.json';
        this.state = {data:'null',filename:filename};
    }

    async componentDidMount() {
        try {
            const fetchData = async () => {
                const data = await import(`../json_files/projects/${this.state.filename}`);
                return data.default;
            };

            const result = await fetchData();
            this.setState({ data: result });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    render () {
        const {data} = this.state;
        return (
            <div className="project">
                <div id='title'>
                    <h3>{data.title}</h3>
                </div>
                <div id='summary'>
                    <p>{data.summary}</p>
                </div>
            </div>
        );
    };
}

function Projects() {
    return (
        <Project filename='flight_delay' />
    );
}

export default Projects;