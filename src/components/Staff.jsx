import React from 'react';
import { useState, useEffect } from 'react';

function Staff() {
  // State to manage the list of staff names
  const [staffList, setStaffList] = useState([]);
  // State to manage the input value for adding new staff names
  const [newStaffName, setNewStaffName] = useState('');

  // Function to handle adding a new staff name to the list
  const handleAddStaff = () => {
    if (newStaffName.trim() !== '') {
      setStaffList([...staffList, newStaffName]);
      setNewStaffName('');
    }
  };

  // Function to handle removing a staff name from the list
  const handleRemoveStaff = (index) => {
    const updatedStaffList = [...staffList];
    updatedStaffList.splice(index, 1);
    setStaffList(updatedStaffList);
  };

  // Save staff list to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('staffList', JSON.stringify(staffList));
  }, [staffList]);

  // Function to handle saving the staff list to local storage
  const handleSaveStaffList = () => {
    localStorage.setItem('savedStaffList', JSON.stringify(staffList));
    alert('Staff list saved successfully!');
  };

  return (
    <>
      <div className="bg-gray-100 p-8 m-1">
        <h1 className="text-2xl font-bold text-center">STAFF LIST</h1>
      </div>
      <div className="m-4">
        {/* Input field for adding new staff names */}
        <input
          type="text"
          className="border border-gray-300 rounded-md p-2 mr-2"
          placeholder="Enter staff name"
          value={newStaffName}
          onChange={(e) => setNewStaffName(e.target.value)}
        />
        {/* Button to add a new staff name */}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={handleAddStaff}
        >
          Add Staff
        </button>
        {/* Button to save the staff list */}
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md ml-2"
          onClick={handleSaveStaffList}
        >
          Save Staff List
        </button>
      </div>
      {/* List to display staff names */}
      <ul className="m-4">
        {staffList.map((staff, index) => (
          <li key={index} className="bg-gray-200 p-2 mb-2 flex justify-between items-center">
            <span>{staff}</span>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded-md"
              onClick={() => handleRemoveStaff(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Staff;
     