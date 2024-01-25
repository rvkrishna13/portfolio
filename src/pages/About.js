import '../css/about.css';

function About() {

    
    return ( 
            <div className='about'>
                <div className='image'>
                    <img  src={process.env.PUBLIC_URL+'/profile.jpg'} alt="profile pic"></img>
                </div>

                <div className='info'>
                    s<p>Hello, I'm Ravi Venkata Krishna, a passionate software engineer currently navigating the realms of academia as a master's student in Computer Science at Stony Brook University. My expertise encompasses a broad spectrum of technologies, with a focus on React.js, JavaScript, C++, Python, Java. Holding a Bachelor's degree in Computer Science and Engineering from the prestigious Indian Institute of Technology, Hyderabad, I bring a solid foundation to my work.</p>

                    <p>In my previous role as a Software Development Engineer at Jio, I played a vital role in crafting and implementing innovative software solutions. This professional experience not only honed my technical skills but also instilled in me a commitment to delivering high-quality software products.</p>

                    <p>Now, in the academic sphere, I'm dedicated to expanding my horizons and staying at the forefront of cutting-edge developments in computer science. Beyond my technical acumen, I bring a creative flair to problem-solving, always seeking elegant and efficient solutions.</p>

                    <p>As I continue this journey, my goal remains unchanged — to leverage my passion for technology and creativity to contribute meaningfully to the ever-evolving landscape of software development.</p>
                    <p style={{ fontWeight: 'bold' }}>
                        Let's collaborate and bring ideas to life. Feel free to explore my portfolio and get in touch!
                    </p>
                </div>
                <div className='contact'>
                    <a href="mailto:rvkrishna13@outlook.com">
                        <img src={process.env.PUBLIC_URL+'/email.png'} alt="Email" className="icon" />
                    </a>

                    <a href="https://www.linkedin.com/in/venkata-krishna-ravi-b6903a195/">
                        <img src={process.env.PUBLIC_URL+'/linkedin.svg'} alt='Linkedin' className="icon" />
                    </a>

                    <a href="https://github.com/rvkrishna13">
                        <img src={process.env.PUBLIC_URL+'/github.png'} alt="GitHub"  className="icon" />
                    </a>
                </div>
            </div>
    );
}

export default About;