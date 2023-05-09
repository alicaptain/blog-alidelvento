import React from "react";

export default function WriteTale() {
  return (
    <main className="write-tale main">
      <form className="write-tale-form">
        <label htmlFor="file-input">
          <span class="write-tale-image-upload">add photo</span>
        </label>
        <input type="file" id="file-input" />
        <input
          type="text"
          placeholder="Tale Title"
          className="write-tale-title-input"
          autoFocus={true}
        />

        <textarea
          placeholder="Tale here..."
          type="text"
          className="write-tale-tale"
        ></textarea>
        <button className="write-tale-submit">Tale!</button>
      </form>
    </main>
  );
}
