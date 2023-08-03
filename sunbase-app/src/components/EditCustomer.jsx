import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// const obj = {
//   first_name: "",
//   last_name: "",
//   street: "",
//   address: " ",
//   city: "",
//   state: "",
//   email: "",
//   phone: "",
// };


export default function EditCustomer() {
    const [Obj, setObj] = useState({});
    
    const { id} = useParams();
    console.log(id) 
    
    function getObj(id) {
      fetch(
        `https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=get_customer_list/${id}`
      )
        .then((res) => res.json())
        .then((res) => {
          setObj(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
    useEffect(() => {
        getObj(id)
    },[id])

  let handleChange = (e) => {
      setObj({ ...Obj, [e.target.name]: e.target.value });
  };

    let handlesubmit = async (event) => {
        event.preventDefault();
        try {
        let res = await fetch(
          `https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=get_customer_list/${id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(Obj),
          }
        );
        let data = await res.json();
            console.log(Obj);
            console.log("updated successful")
        } catch (error) {
        console.log(error);
        }
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <h1> Customer Details </h1>
        <div style={{ display: "flex", gap: "20px" }}>
          <input
            type="text"
            placeholder="First Name"
            name="first_name"
            onChange={handleChange}
            value={Obj.first_name}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="last_name"
            onChange={handleChange}
            value={Obj.last_name}
          />
        </div>
        <br />
        <br />
        <div style={{ display: "flex", gap: "20px" }}>
          <input
            type="text"
            placeholder="Street"
            name="street"
            onChange={handleChange}
            value={Obj.street}
          />
          <input
            type="text"
            placeholder="Address"
            name="address"
            onChange={handleChange}
            value={Obj.address}
          />
        </div>
        <br />
        <br />
        <div style={{ display: "flex", gap: "20px" }}>
          <input
            type="text"
            placeholder="City"
            name="city"
            onChange={handleChange}
            value={Obj.city}
          />
          <input
            type="text"
            placeholder="State"
            name="state"
            onChange={handleChange}
            value={Obj.state}
          />
        </div>
        <br />
        <br />
        <div style={{ display: "flex", gap: "20px" }}>
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={Obj.email}
          />
          <input
            type="text"
            placeholder="Phone"
            name="phone"
            onChange={handleChange}
            value={Obj.phone}
          />
        </div>
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
