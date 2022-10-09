import { Fragment } from "react";
import { Table, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import Employees from "./Employees";

const Home = () => {
  let history = useNavigate();

  const handleDelete = (id) => {
    let index = Employees.map((e) => {
      return e.id;
    }).indexOf(id);
    console.log(index);
    Employees.splice(index, 1);
    history("/");
  };

  const handleEdit = (id, name, age) => {
    localStorage.setItem('id', id)
    localStorage.setItem('name', name)
    localStorage.setItem('age', age)
  }

  return (
    <Fragment>
      <div className="text-center" style={{ padding: 60 }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Employees && Employees.length > 0 ? (
              Employees.map((employee) => {
                return (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.age}</td>
                    <td>
                      <Link to="/edit">
                        <Button
                          variant="primary"
                          onClick={() =>
                            handleEdit(employee.id, employee.name, employee.age)
                          }
                        >
                          EDIT
                        </Button>
                      </Link>
                      &nbsp;
                      <Button
                        variant="danger"
                        onClick={() => handleDelete(employee.id)}
                      >
                        DELETE
                      </Button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={4}>No data</td>
              </tr>
            )}
          </tbody>
        </Table>
        <Link to="/create">
          <Button className="w-100" variant="success">
            Create
          </Button>
        </Link>
      </div>
    </Fragment>
  );
};

export default Home;
