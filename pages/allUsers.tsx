import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../styles.css"


const AllUsers = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [userDetails, setUserDetails] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/getUser`, {
          method: "GET",
        });

        if (!response.ok) {
          console.error("Error fetching user data:");
          window.location.href = "/";
          return;
        }

        const user = await response.json();
        console.log("user", user);  

        if (user.result.role !== "admin") {
          window.location.href = "/";
        }
      } catch (error) {
        console.error("Error handling result fetch:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/getFullDetails`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          // Handle response data if needed
          const userData = await response.json();
          setUserDetails(userData.result);
        }
      } catch (error) {
        console.error("Error getting user:", error);
      }
    }
      fetchData();
  }, []);
  console.log("userDetails", userDetails);

  const handleDelete = async (email: string) => {
    try {
      const response = await fetch(`/api/deleteUser?email=${email}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        // Handle response data if needed
        const userData = await response.json();
        setUserDetails(userData.result);
        window.location.reload();
      }
    } catch (error) {
      console.error("Error getting user:", error);
    }
  }


  

  return (
    <div className="table-page">
      
          <h2>All Users Info</h2>
          <table className="custom-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Balance</th>
                <th>UPI Id</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
                {userDetails && userDetails.map((user)=>{
                    return(
                        <tr key={user.email}>
                            <td>{user.name}</td>
                            <td>{user.phoneNumber}</td>
                            <td>{user.balance}</td>
                            <td>{user.upiId}</td>
                            <td><button 
                            onClick={() => handleDelete(user.email)}>Delete</button></td>
                        </tr>
                    )
                })}
            </tbody>

       
         
          </table>
        
    </div>
  );
};

export default AllUsers;
