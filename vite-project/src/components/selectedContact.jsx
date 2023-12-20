import React, { useState, useEffect } from "react";

function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${selectedContactId}`
      );
      const data = await response.json();
      setContact(data);
    }
    fetchContact();
  }, [selectedContactId]);

  console.log(contact);

  return (
    <div>
      {contact ? (
        <tr>
          <td>{contact.name}</td>
          <td>{contact.email}</td>
          <td>{contact.phone}</td>
          <button onClick={() => setSelectedContactId(null)}>
            Go back to list view
          </button>
        </tr>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
