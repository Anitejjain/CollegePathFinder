import React from 'react';
import './compare.css'; // Import your CSS file

function Compare() {
  return (
    <div className="com">
      <CompareLeft />
      <CompareRight />
    </div>
  );
}

function CompareLeft() {
  return (
    <div className="compare-container">
      <div className="left-section">
        <div className="dropdowns">
          <select>
            <option value="" disabled>College</option>
            <option value="item1">Item 1</option>
            <option value="item2">Item 2</option>
            {/* Add more items */}
          </select>
          <select>
            <option value="" disabled>Branch</option>
            <option value="item1">Item 1</option>
            <option value="item2">Item 2</option>
            {/* Add more items */}
          </select>
        </div>
        <div className="info-box">
          <h2>Information Box</h2>
          <div className="category-dropdown">
            <select>
              <option value="" disabled>Category</option>
              <option value="item1">Item 1</option>
              <option value="item2">Item 2</option>
              {/* Add more items */}
            </select>
          </div>
          <div>
            <p className="contents">a</p>
          </div>
          <div>
            <p className="contents">a</p>
          </div>
          <div>
            <p className="contents">a</p>
          </div>
          <div>
            <p className="contents">a</p>
          </div>
          <div>
            <p className="contents">a</p>
          </div>
          <div>
            <p className="contents">a</p>
          </div>
          <div>
            <p className="contents">a</p>
          </div>


        </div>
      </div>
    </div>
  );
}

function CompareRight() {
  return (
    <div className="compare-container">
      <div className="right-section">
        <div className="dropdowns">
          <select>
            <option value="" disabled>College</option>
            <option value="item1">Item 1</option>
            <option value="item2">Item 2</option>
            {/* Add more items */}
          </select>
          <select>
            <option value="" disabled>Branch</option>
            <option value="item1">Item 1</option>
            <option value="item2">Item 2</option>
            {/* Add more items */}
          </select>
        </div>
        <div className="info-box">
          <h2>Information Box</h2>
          <div className="category-dropdown">
            <select>
              <option value="" disabled>Category</option>
              <option value="item1">Item 1</option>
              <option value="item2">Item 2</option>
              {/* Add more items */}
            </select>
          </div>
          <div>
            <p className="contents">a</p>
          </div>
          <div>
            <p className="contents">a</p>
          </div>
          <div>
            <p className="contents">a</p>
          </div>
          <div>
            <p className="contents">a</p>
          </div>
          <div>
            <p className="contents">a</p>
          </div>
          <div>
            <p className="contents">a</p>
          </div>
          <div>
            <p className="contents">a</p>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Compare;