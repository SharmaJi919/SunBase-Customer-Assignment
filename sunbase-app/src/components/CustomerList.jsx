import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function CustomerList() {
    const [arr,setArr]=useState([])

    function getData() {
        fetch(
          `https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=get_customer_list`
        )
          .then((res) => res.json())
          .then((res) => setArr(res))
          .catch((err) => console.log(err));
    }

    async function Deleting(id) {
        console.log(id);
        try {
            let res = await fetch(
              `https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=get_customer_list/${id}`,
              {
                method: "DELETE",
              }
            );
            
            // let data = await res.json();
            // console.log(data)
            getData();
        } catch (error) {
            console.log(error)
        }
     }

    useEffect(() => {
       getData() 
    },[])


  return (
    <div>
      {/* <h1>Customer List will be shown here</h1> */}
      <div>
              <Link to={`/addCustomer`}>
                  <button
          style={{
            float: "left",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            lineHeight: "2",
          }}
        >
          Add a Customer
              </button>
        </Link>
        <h2>Customer List</h2>
      </div>

      <table width={"100%"}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
              <tbody>
                  {
                      arr.map((el) => {
                          return (
                              <tr key={el.id}>
                                  <td>{ el.first_name}</td>
                                  <td>{ el.last_name}</td>
                                  <td>Address</td>
                                  <td>City</td>
                                  <td>State</td>
                                  <td>Email</td>
                                  <td>Phone</td>
                                  <td>
                                      <span onClick={() => {
                                         Deleting(el.id); 
                                      }} style={{ color: 'red', cursor: "pointer", marginRight: '10px' }}>X</span>
                                      <Link to={`/editCustomer/${el.id}`} el={el} >
                                          
                                      <span style={{color:"blue"}} >/</span> 
                                      </Link>
                                  </td>
                              </tr>
                          )
                      })
                  }
        </tbody>
      </table>
    </div>
  );
}
