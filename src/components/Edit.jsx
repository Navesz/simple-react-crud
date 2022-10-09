import Employees from "./Employees";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap"
import { useState, useEffect } from "react";

const Edit = () => {
  const [name, setName] = useState("")
  const [age, setAge] = useState()
  const [id, setId] = useState()

  let history = useNavigate()

  const handleUpdate = (e) => {
    e.preventDefault();

    let employee = Employees[id - 1]
    employee.name = name
    employee.age = age

    history("/");
  };

  useEffect(() => {
    setName(localStorage.getItem("name"))
    setAge(localStorage.getItem("age"))
    setId(localStorage.getItem("id"))
  }, [])

  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAge">
          <Form.Control
            type="text"
            placeholder="Enter age"
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </Form.Group>
        <Button onClick={(e) => handleUpdate(e)} type="submit">
          Update
        </Button>
      </Form>
    </div>
  )
}

export default Edit