import React, { useState } from 'react';
import './search.css';

const Search = () => {
  const [college, setCollege] = useState('');
  const [branch, setBranch] = useState('');
  const [history, setHistory] = useState([]);

  const handleSearch = () => {
    setHistory([...history, { college, branch }]);
    setCollege('');
    setBranch('');
  };

  const handleClear = () => {
    setHistory([]);
  };

  const handleView = () => {
   
    window.location.href = './collegeInfoReviews.jsx';
  };


  // Replace these arrays with your actual data
  const colleges = ['College 1', 'College 2', 'College 3'];
  const branches = ['Branch 1', 'Branch 2', 'Branch 3'];

  return (
    <div className="search-container">
      <div className="dropdown">
        <input
          list="colleges"
          value={college}
          onChange={(e) => setCollege(e.target.value)}
          placeholder="Select College" // Add placeholder text
        />
        <datalist id="colleges">
          {colleges.map((college, index) => (
            <option key={index} value={college} />
          ))}
        </datalist>
      </div>
      <div className="dropdown">
        <input
          list="branches"
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
          placeholder="Select Branch" // Add placeholder text
        />
        <datalist id="branches">
          {branches.map((branch, index) => (
            <option key={index} value={branch} />
          ))}
        </datalist>
      </div>
      <button onClick={handleSearch}>Search</button>
      <div className="history">
        <button className="clear" onClick={handleClear}>
          Clear
        </button>
        {history.map((item, index) => (
          <div key={index} className="history-item">
            <span>
              {item.college}, {item.branch}
            </span>
            <button onClick={handleView}>View</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;