import { Helmet } from "react-helmet-async";


const Blogs = () => {
    return (
        <div>
            <Helmet>
                <title>Career Hunt | Blogs</title>
            </Helmet>
            <div className="md:w-2/3 mx-auto my-10">
                <div className="collapse collapse-arrow bg-transparent">
                    <input type="radio" name="my-accordion-2" checked="checked" />
                    <div className="collapse-title text-xl text-sky-400 font-medium">
                        Explaining my code?
                    </div>
                    <div className="collapse-content">
                        <p>I have built this job hunting website by using react, nodejs, expressjs and mongodb. Here I have used crud operation like get, put, delete and patch. I have used react router to make this app working. For styling, I have used tailwindcss and daisyUI as a framework. I have also used firebase as the login/signup auth storage.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-transparent">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl text-sky-400 font-medium">
                        What is an access token and refresh token? How do they work and where should we
                        store them on the client-side?

                    </div>
                    <div className="collapse-content">
                        <p><span className="text-red-400 font-semibold">Access Token:</span> An access token is a tiny piece of code that contains a large amount of data. Information about the user, permissions, groups, and timeframes is embedded within one token that passes from a server to a user device. Plenty of websites use access tokens.</p>
                        <p><span className="text-blue-400 font-semibold">Refresh Token:</span> A refresh token is a special token that is used to obtain more access tokens. This allows you to have short-lived access tokens without having to collect credentials every time one expires. You request a refresh token alongside the access and/or ID tokens as part of a user initial authentication and authorization flow. Applications must then securely store refresh tokens since they allow users to remain authenticated.</p>
                        <p>
                            <span className="text-green-400 text-lg font bold">Working Process:</span>
                            <br />
                            <span className="text-red-400 font-semibold">Access Token:</span> Access tokens are used in token-based authentication to allow an application to access an API. The application receives an access token after a user successfully authenticates and authorizes access, then passes the access token as a credential when it calls the target API.
                            <br />
                            <span className="text-blue-400 font-semibold">Refresh Token:</span> A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources.
                        </p>
                        <p>
                            <span className="text-green-400 text-lg font bold">Where to store them:</span>
                            <br />
                            <span className="text-red-400 font-semibold">Access Token:</span> There are three common options: local storage, session storage, and cookies. Each one has its pros and cons, but none of them is completely safe from attacks. Local storage and session storage are vulnerable to cross-site scripting (XSS) attacks, where malicious scripts can access and steal your tokens. Cookies are vulnerable to cross-site request forgery (CSRF) attacks, where malicious requests can use your tokens without your consent. To mitigate these risks, you should choose a storage option that suits your use case, use secure and http-only flags for cookies, and implement anti-CSRF measures.
                            <br />
                            <span className="text-blue-400 font-semibold">Refresh Token:</span> As a web developer, you typically have two options for client-side token storage: localStorage and cookies. The two have different purposes, and hence different strengths and weaknesses. Cookies are intended to be read by the server, whereas localStorage can only be read by the browser.
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-transparent">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl text-sky-400 font-medium">
                        What is express js?
                    </div>
                    <div className="collapse-content">
                        <p>Express.js is the most popular web framework for Node.js. It is designed for building web applications and APIs and has been called the de facto standard server framework for Node.js.
                            <br />

                            Building a backend from-scratch for an application in Node.js can be tedious and time consuming. From setting up ports to route handlers, writing all of the boilerplate code takes away from what really matters, which is writing the business logic for an application. By using web frameworks like Express.js, developers can save time and focus on other important tasks. </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-transparent">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl text-sky-400 font-medium">
                        What is Nest JS?
                    </div>
                    <div className="collapse-content">
                        <p>Nest.js is one of the fastest-growing Node.js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node.js. It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript and TypeScript.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;