const Blog = () => {
    return (
      <div>
        <h1 className="text-4xl text-[#00B0FF] text-center my-3">Blog</h1>
        <h1 className="text-xl text-center">
          Question No.1 -What is an access token and refresh token ?How do they
          work and where should we store them on the client-side?
        </h1>
        <hr className="my-4 mx-96 border-[#00B0FF]" />
        <div className="mx-20">
          <p className="italic">
            <h1 className="text-[#00B0FF] ">Access Token:</h1>A short-lived
            token used for authorizing and accessing specific resources.
            Typically lasts for minutes to hours. Used for authentication and
            access control, sent in HTTP headers or query parameters in API
            requests.
          </p>
          <p className="italic">
            <h1 className="text-[#00B0FF] ">Refresh Token:</h1>A A long-lived
            token issued alongside an access token during authentication. Can
            last for days or weeks. Used to obtain a new access token after the
            original token expires. Kept even more secure than access tokens
            because it can be used to get new access tokens.
          </p>
          <p className="italic">
            <h1 className="text-[#00B0FF] ">Client-Side Storage:</h1>A A Store
            access tokens in browser cookies, session storage, or local storage,
            depending on security needs. Secure cookies with HttpOnly and Secure
            attributes are a common choice for refresh tokens. Consider security
            implications, such as XSS attacks, when choosing storage options.
          </p>
        </div>
        <hr className="my-4 mx-96 border-[#00B0FF]" />

        <div className="text-center">
          <h1 className="text-xl">
            Question No-2 What is express js? What is NestJS
          </h1>
          <p className="mx-10 italic">
            <h1 className="text-[#00B0FF] ">Express.js</h1> A minimal and
            flexible web application framework for Node.js, often used for
            building web applications and APIs.
          </p>
          <p className="mx-10 italic">
            <h1 className="text-[#00B0FF] ">NestJS</h1> A modern, structured
            Node.js framework inspired by Angular, designed for building
            scalable and maintainable server-side applications, including
            RESTful APIs, GraphQL, and microservices, with an emphasis on
            modularity and organization.
          </p>
        </div>
        <hr className="my-4 mx-96 border-[#00B0FF]" />
        <div className="text-center">
          <h1 className="text-2xl">
            <span className="text-[#00B0FF]">Explainig</span> My Code
          </h1>
          <div className="italic space-y-3 mx-10">
            <p className="mx-10">
              <h1 className="text-[#00B0FF]">Home</h1>
              First of all, I design Home page and there have some features
              after banner section you will see some buttons . If you click the
              button, you will be able to see that some cards are given
              categorically if you click all button , all card will be shown
              after that there have a service card iy you hover that card it
              will show more details about services ,after that you can see that
              a hot deal section and a footer section
            </p>
            <p>
              <h1 className="text-[#00B0FF]">All Jobs</h1>
              There are a more section named all jobs if you got to that route
              you can see that all jobs are given in a tabular form and there
              have a search field if you search there according to title it will
              show jobs by your search
            </p>
            <p>
              <h1 className="text-[#00B0FF]">Add A job</h1>
              If you go to add a job route, there you can see some input fields for adding a card , you can also add a card, the card is about to job related , if you select a category for your card,,the card will be add your category wise
            </p>
            <p>
              <h1 className="text-[#00B0FF]">Applied job</h1>
              Applied job is a route , where you can see All the applied job of yours 
            </p>
            <p>
              <h1 className="text-[#00B0FF]">My Jobs</h1>
              My jobs is a another route, there you can see all the adding cards of yours that you added from add a job page there also you can see delete and update button If you want you can delete or update
            </p>
          </div>
        </div>
      </div>
    );
};

export default Blog;