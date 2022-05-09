import React from "react";

const Blogs = () => {
  return (
    <div>
      <h1>Difference between javascript and nodejs?</h1>
      <ul>
        <li>
          JavaScript is a programming language. Node js is runtime environment
        </li>
        <li>
          Javascript only run in the browser but we can run javascript outside
          of the browser with node js help.
        </li>
        <li>
          Javascript is used for front-end development. Node js is used for
          server side development.
        </li>
        <li>
          Javascript can run in any browser engine. V8 inside of node js that
          run javascript.
        </li>
      </ul>
      <h2> Differences between sql and nosql databases?</h2>
      <ul>
        <li>Sql is structured query language. nosql is not only sql.</li>
        <li>
          SqL databases are primarily called as RDBMS. NoSQL database are
          primarily called as non-relational database.
        </li>
        <li>
          SqL databases defines and manipulates data based structured query
          language. A NoSQL database has dynamic schema for unstructured data.
        </li>
        <li>
          Sql best for complex queries.Nosql is not good for complex queries
        </li>
      </ul>
      <h3> What is the purpose of jwt and how does it work?</h3>
      <p>
        We use jwt for authorization.Jwt allow us to use a website routes and
        services after log in.Jwt are a good way of securely transmitting
        information between parties. The main purpose of jwt is data security in
        a website.Its always pass encrypt data.
      </p>
    </div>
  );
};

export default Blogs;
