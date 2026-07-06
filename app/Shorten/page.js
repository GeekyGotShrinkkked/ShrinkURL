"use client";
import React, { useState } from "react";

const shorten = () => 
    {
    const [url, setUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [generated, setGenerated] = useState("");

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shortUrl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

            fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`)
                setUrl("")   
                setshortUrl("")
                console.log(result)
                alert(result.message)})
                .catch((error) => console.error(error));
      }
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
        onChange = {(e) =>setShortUrl(e.target.value)} />
        <button onClick = {generate}className=" bg-purple-500 rounded-lg shadow-lg p-3 py-1 text-white my-4">
          Generate</button>
      </div>

      {generated && <> <span className='font-bold text-lg'>Your Link </span><code><Link target="_blank" href={generated}>{generated}</Link> 
      </code></>}
    </div>
  );
};

export default shorten;
