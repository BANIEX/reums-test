import { useState } from "react"


const Input = () => {


  const [details, setDetails] = useState({
    username: "",
    password: ""

  })


  const changeHandler = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);

    let name = event.target.name;
    let value = event.target.value;

    setDetails({...details, [name]: value})

  }

  console.log(details)


  return(
    <>
    <div>
      <h3>Username</h3><input type="text" name="username" onChange={changeHandler} />
      <h3>Password</h3><input type="password" name="password" onChange={changeHandler}/>
      <button>Submit</button>
    </div>
    </>
  )
}


export default Input