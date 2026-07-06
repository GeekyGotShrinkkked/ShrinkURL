"use client";
import React, { useState } from "react";

const Shorten = () => 
    {
    const [url, setUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [generated, setGenerated] = useState(false);
    const handleChange = (first) => {second};
  return (
    <div className="mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4">
      <h1 className=" font-bold text-lg ">Generate Your Short URL</h1>
      <div className="flex flex-col ">
        <input 
          type="text"
          className=" p-4 focus:outline-purple-600 "
          placeholder="Enter Your URL"
          onChange={handleChange}/>
        <input type="text" placeholder="Enter Your Short URL Text" />
        <button>Generate</button>
      </div>
    </div>
  );
};

export default Shorten;
