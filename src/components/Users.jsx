import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function Users() {
  return (
    <div className="px-5 pt-9 max-w-full text-[#000]">
      <div>
        <h2 className="font-bold text-3xl mb-4">How to use it</h2>
        <p className="w-[700px] mb-4">
          DummyJSON can be used with any type of front end project that needs
          products, carts, users, todos or any dummy data in JSON format. You
          can use examples below to check how DummyJSON works. Feel free to
          enjoy it in your awesome projects!
        </p>
        <div className="h-[5px] w-[830px] bg-[#d3d3d3] mb-5"></div>
        <div>
          <h4 className=" text-2xl font-bold   intro">Intro</h4>
          <h5 className="text-1xl font-bold text-[18px] mb-1">
            Authorizing Resources
          </h5>
          <span className="text-[14px] mb-1">
            Go to auth module and generate an auth token to get data as an
            authorized user
          </span>
          <SyntaxHighlighter language="javascript" style={oneDark}>
            {`
          /* providing token in bearer */
          fetch('https://dummyjson.com/auth/RESOURCE', {
            method: 'GET', /* or POST/PUT/PATCH/DELETE */
            headers: {
              'Authorization': 'Bearer /* YOUR_TOKEN_HERE */', 
              'Content-Type': 'application/json'
            }, 
          })
          .then(res => res.json())
          .then(console.log);
          `}
          </SyntaxHighlighter>
          <div className="h-[5px] w-[830px] bg-[#d3d3d3] mb-5 mt-7"></div>
        </div>
      </div>
    </div>
  );
}

export default Users;
