function About() {
  return (
    <div
      style={{
        backgroundColor: "#1f2932",
        color: "aliceblue",
      }}
      className="p-md-4 p-1"
    >
      <main
        style={{ maxWidth: "50rem" }}
        id="about"
        role="main"
        className="main inner cover h-100 p-3 mx-auto text-center"
      >
        <h1 className="mb-4">About</h1>
        <div style={{ textAlign: "left", fontSize: "1rem" }} className="lead">
          <h6 style={{ fontSize: "1.1rem" }}>
            Hi, my name is Mostafa Farag. I'm a React Developer and I have +2
            years of experience in :
          </h6>
          <ul style={{ listStyleType: "circle" }}>
            <li>Working with Typescript and React</li>
            <li>Working with Hooks, Context API and Redux</li>
            <li>NextJs SSR & routing and RTL</li>
            <li>
              Working with styling libraries like Grommet, React Semantic UI,
              NativeBase and Styled-Components
            </li>
            <li>
              Working with GraphQL APIs using Apollo Client or REST using fetch
              and axios
            </li>
            <li>
              Working with AWS Cognito authentication service through AWS
              Amplify
            </li>
            <li>Creating backend GraphQL APIs with Apollo Server</li>
            <li>
              Working with Postgres SQL using Sequelize or Prisma and AWS
              DynamoDB
            </li>
            <li>
              Creating mobile apps using React Native including React Navigation
              and native device features like camera, location and contacts
            </li>
            <li>
              Using Formik or react-hook-form for handling form data, validation
              and submission
            </li>
          </ul>
          <h6 style={{ fontSize: "1.1rem" }}>I'm also familiar with :</h6>
          <ul style={{ listStyleType: "circle" }}>
            <li>Graphql Subscriptions for realtime data</li>
            <li>Recharts react library for creating visual charts</li>
            <li>Firebase including authentication and firestore</li>
            <li>Headless CMS like Strapi</li>
          </ul>
          Finally, I'm a graduate of Ain shams computer engineering, currently
          working at Utudio for +2 years and past 3-months DevOps intern at ITI.
        </div>
        <div className="mt-4">
          <a
            href="https://drive.google.com/file/d/1dEG8OFDMHr0dtxm5CnKTxo-pUaOyGWGn/view"
            target="_blank"
            className="btn btn-lg btn-info"
          >
            View CV
          </a>
        </div>
      </main>
    </div>
  );
}

export default About;
