"use client";
import React, { useState } from "react";

const Shorten = () => 
    {
    const [url, setUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [generated, setGenerated] = useState(false);
  return (
    <div className="mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4">
      <h1 className=" font-bold text-lg ">Generate Your Short URL</h1>
      <div className="flex flex-col gap-5 ">
        <input 
          type="text"
          value={url}
          className=" p-4 focus:outline-purple-600 py-2 rounded-md bg-amber-50 "
          placeholder="Enter Your URL"
          onChange= {(e) =>setUrl(e.target.value)} />
        <input type="text"
        value={shortUrl} 
        className=" p-4 focus:outline-purple-600 py-2 rounded-md  bg-amber-50 "
        placeholder="Enter Your Short URL Text"
        onChange = {(e) =>setUrl(e.target.value)} />
        <button className=" bg-purple-500 rounded-lg shadow-lg p-3 py-1 text-white my-4">Generate</button>
      </div>
    </div>
  );
};

export default Shorten;
