    import React from 'react';
import '../css/education.css';


    class EducationLevel extends React.Component{
        constructor(props) {
            super(props);
            let filename = '';
            if(props.level==='masters')
            filename = 'masters.json';
            else
            filename = 'bachelors.json';
            this.state = {data:'null',filename:filename};
        }

        async componentDidMount() {
            try {
                const fetchData = async () => {
                    const data = await import(`../json_files/education/${this.state.filename}`);
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
            <div className='education'>
            <h2 className='animated fadeIn'>Education</h2>
            <div className='education-details animated slideInUp'>
              <h3>{data.Degree}</h3>
              <p>{data.Major}</p>
              <p>{data.University}</p>
              <p>{data.EnrollmentPeriod}</p>
              <p>Cumulative GPA: {data.CumulativeGPA}</p>
              {Array.isArray(data.Coursework) && (
                    <ul>
                    <strong>Relevant Coursework:</strong>
                    {data.Coursework.map((element) => (
                        <li key={element}>{element}</li>
                    ))}
                    </ul>
                )}
              <p>{data.City}, {data.State}, {data.Country}</p>
            </div>
          </div>
            );
        };
    }

    function Education() {
        return (
            <div className='education'>
                <EducationLevel level='masters' />
                <br></br>
                <EducationLevel level='bachelors' />
            </div>
        );
    }
    export default Education;