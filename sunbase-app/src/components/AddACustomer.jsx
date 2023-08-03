import { useState } from "react"


const obj = {
    "first_name": "",
    "last_name": "",
    "street": "",
    "address": " ",
    "city": "",
    "state": "",
    "email": "",
    "phone": ""
}
export default function AddACustomer() {
    const [form, setform] = useState(obj);

    let handleChange = (e) => {
        setform({...form, [e.target.name]:e.target.value})
    }
    
    let handlesubmit = async(event) => {
        event.preventDefault();
    try {
      let res = await fetch(
        `https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );
      let data = await res.json();
        console.log(form)
    } catch (error) {
      console.log(error);
    }
    }
    

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
            />
            <input
              type="text"
              placeholder="Last Name"
              name="last_name"
              onChange={handleChange}
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
            />
            <input
              type="text"
              placeholder="Address"
              name="address"
              onChange={handleChange}
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
            />
            <input
              type="text"
              placeholder="State"
              name="state"
              onChange={handleChange}
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
            />
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              onChange={handleChange}
            />
          </div>
          <br />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
}