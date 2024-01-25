import React from 'react';
import '../css/experience.css';

class Experience extends React.Component{
    constructor(props) {
        super(props);
        const filename = props.filename+'.json';
        this.state = {data:'null',filename:filename};
    }

    async componentDidMount() {
        try {
            const fetchData = async () => {
                const data = await import(`../json_files/experience/${this.state.filename}`);
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
            <div className="experience">
                <div className='heading'>
                    <p className="title">{data.title}</p>
                    <p className="date">{data.date}</p>
                </div>
                <div className='place'>
                    <p>{data.place}</p>
                    <p>{data.location}</p>
                </div>
                <div className='work'>
                    <ul>
                        {
                            Array.isArray(data.work) &&
                            data.work.map((element) => <li>{element}</li>)
                        }
                    </ul>
                </div>
            </div>
        );
    };
}

function Experiences() {
    return (
        <div className='experiences'>
            <Experience filename='jio' />
            <Experience filename='tata' />
        </div>
    );
}

export default Experiences;