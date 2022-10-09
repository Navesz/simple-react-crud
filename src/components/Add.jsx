import Employees from "./Employees";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap"
import { useState } from "react";

const add = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const uniqueId = Employees.length + 1

    Employees.push({ id: uniqueId, name: name, age: age });

    history("/");
  };

  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAge">
          <Form.Control
            type="text"
            placeholder="Enter age"
            required
            onChange={(e) => setAge(e.target.value)}
          />
        </Form.Group>
        <Button onClick={(e) => handleSubmit(e)} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default add;
