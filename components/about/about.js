import classes from './about.module.css'
export default function About() {
  return (
    <div className={`${classes.about} p-5`} >
      <main style={{ maxWidth: '50rem' }} id="about" role="main" className="main inner cover h-100 p-3 mx-auto text-center">
        <h1 className="mb-4">ABOUT</h1>
        <div style={{ textAlign: 'left', fontSize: '1rem' }} className="lead">
          <h6 style={{ fontSize: '1.1rem' }}>Hi, my name is Mostafa Farag. I'm a React Developer and i have some experience in :</h6>
          <ul style={{ listStyleType: 'circle' }}>
            <li>Creating reusable and scalable React components</li>
            <li>Working with Hooks, Redux and Context API</li>
            <li>Working with REST APIs</li>
            <li>Client-side routing using React-router</li>
            <li>Working with styling libraries like Bootstrap , React Semantic UI and Material UI</li>
            <li>Working with Styled-Components and CSS modules</li>
            <li>Creating responsive apps using Grids and Flex-Box</li>
            <li>Using Headless CMS like Strapi</li>
          </ul>
          <h6 style={{ fontSize: '1.1rem' }}>I'm also familiar with :</h6>
          <ul style={{ listStyleType: 'circle' }}>
            <li>NextJs including SSR, SSG and file-based routing</li>
            <li>NodeJS and Express to create API endpoints</li>
            <li>Firebase including authentication and firestore</li>
            <li>Mobile development using React Native</li>
            <li>Using Formik for handling form data, validation and submission</li>
            <li>AWS basics</li>
            <li>GraphQL</li>
          </ul>
          Finally,
          I'm a graduate of Ain shams computer engineering, past 3-months DevOps intern at ITI and
           i have a certificate of React Developer Nanodegree from udacity.
        </div>
        <div className="mt-4">
          <a href="https://drive.google.com/file/d/1dEG8OFDMHr0dtxm5CnKTxo-pUaOyGWGn/view" target="_blank" className="btn btn-lg btn-info">View CV</a>
        </div>
      </main>
    </div>
  )
}


