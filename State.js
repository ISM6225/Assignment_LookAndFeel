import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import StateChart from "./StateChart";
import DeleteModal from "../Shared/DeleteModal/DeleteModal";
import CreateModal from "./CreateModal";
import UpdateModal from "./UpdateModal";
import { useParams } from "react-router-dom";

const State = () => {
  const { code, stateName } = useParams();
  const [state,setState] = useState()
  const [deleteModal, setDeleteModal] = useState(false);
  const [createModal, setCreateModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [selected, setSelected] = useState({});
  useEffect(()=>{
    if (code == "AK"){
      setState("Alaska")
    }
    if (code == "AR"){
      setState("Arkansas")
    }
    if (code == "AZ"){
      setState("Arizona")
    }
    if (code == "CA"){
      setState("California")
    }
    if (code == "CO"){
      setState("Colorado")
    }
    if (code == "CT"){
      setState("Connecticut")
    }
    if (code == "AL"){
      setState("Alabama")
    }
    
  },[code])

  const handleDelete = () => {};
  return (
    <div>
      <Container>
        <div>
          <div>
            <h3 className="text-center mt-5 mb-4">
              Covid News of Albama on January, 2021
            </h3>
          </div>
        </div>
        <div>
          <h4 className="text-start mt-5 mb-4">Chart View For January, 2021</h4>
          <StateChart />
        </div>
        <div className=" mt-5 mb-4">
          <div className="d-flex justify-content-between items-start mb-3">
            <h4 className="text-start">Tabular View For January, 2021</h4>
            <button
              className="view-details-btn d-block"
              onClick={() => {
                setCreateModal(true);
              }}
            >
              + New Entry
            </button>
          </div>

          <Table className="mb-5" responsive striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>State Name</th>
                <th>Date</th>
                <th>Positive</th>
                <th>Recovered</th>
                <th>Death</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>{state}</td>
                <td>01/10/2023</td>
                <td>2000</td>
                <td>1405</td>
                <td>10</td>
                <td>
                  <button
                    onClick={() => {
                      setSelected({});
                      setUpdateModal(true);
                    }}
                    className="view-details-btn"
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      setSelected({});
                      setDeleteModal(true);
                    }}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>{state}</td>
                <td>01/20/2023</td>
                <td>2000</td>
                <td>1405</td>
                <td>10</td>
                <td>
                  <button
                    onClick={() => {
                      setSelected({});
                      setUpdateModal(true);
                    }}
                    className="view-details-btn"
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      setSelected({});
                      setDeleteModal(true);
                    }}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>{state}</td>
                <td>01/30/2023</td>
                <td>2000</td>
                <td>1405</td>
                <td>10</td>
                <td>
                  <button
                    onClick={() => {
                      setSelected({});
                      setUpdateModal(true);
                    }}
                    className="view-details-btn"
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      setSelected({});
                      setDeleteModal(true);
                    }}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>{state}</td>
                <td>01/25/2023</td>
                <td>2000</td>
                <td>1405</td>
                <td>10</td>
                <td>
                  <button
                    onClick={() => {
                      setSelected({});
                      setUpdateModal(true);
                    }}
                    className="view-details-btn"
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      setSelected({});
                      setDeleteModal(true);
                    }}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>{state }</td>
                <td>02/09/2023</td>
                <td>2000</td>
                <td>1405</td>
                <td>10</td>
                <td>
                  <button
                    onClick={() => {
                      setSelected({});
                      setUpdateModal(true);
                    }}
                    className="view-details-btn"
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      setSelected({});
                      setDeleteModal(true);
                    }}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
      {/* delete */}
      <DeleteModal
        show={deleteModal}
        handleClose={() => setDeleteModal(false)}
        deleteFunc={handleDelete}
      />

      {/* CreateModal */}
      <CreateModal
        show={createModal}
        handleClose={() => setCreateModal(false)}
      />

      {/* update */}
      <UpdateModal
        show={updateModal}
        handleClose={() => setUpdateModal(false)}
      />
    </div>
  );
};

export default State;