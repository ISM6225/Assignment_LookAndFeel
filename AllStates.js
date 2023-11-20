import React from "react";
import { Container, Table } from "react-bootstrap";
import "./AllStates.css";
import { useNavigate } from "react-router-dom";
const AllStates = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Container>
        <div>
          <div>
            <h3 className="text-start mt-5 mb-4">All The States</h3>
          </div>
        </div>
        <Table className="mb-5" responsive striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Country</th>
              <th>State Name</th>
              <th>State Code</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>USA</td>
              <td>Alaska</td>
              <td>AK</td>
              <td>
                <button
                  onClick={() => navigate(`/state/AK`)}
                  className="view-details-btn"
                >
                  View Covid-19 Details
                </button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>USA</td>
              <td>Alabama</td>
              <td>AL</td>
              <td>
                <button
                  onClick={() => navigate(`/state/AL`)}
                  className="view-details-btn"
                >
                  View Covid-19 Details
                </button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>USA</td>
              <td>Arkansas</td>
              <td>AR</td>
              <td>
                <button
                  onClick={() => navigate(`/state/AR`)}
                  className="view-details-btn"
                >
                  View Covid-19 Details
                </button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>USA</td>
              <td>Arizona</td>
              <td>AZ</td>
              <td>
                <button
                  onClick={() => navigate(`/state/AZ`)}
                  className="view-details-btn"
                >
                  View Covid-19 Details
                </button>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>USA</td>
              <td>California</td>
              <td>CA</td>
              <td>
                <button
                  onClick={() => navigate(`/state/CA`)}
                  className="view-details-btn"
                >
                  View Covid-19 Details
                </button>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>USA</td>
              <td>Colorado</td>
              <td>CO</td>
              <td>
                <button
                  onClick={() => navigate(`/state/CO`)}
                  className="view-details-btn"
                >
                  View Covid-19 Details
                </button>
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>USA</td>
              <td>Connecticut</td>
              <td>CT</td>
              <td>
                <button
                  onClick={() => navigate(`/state/CT`)}
                  className="view-details-btn"
                >
                  View Covid-19 Details
                </button>
              </td>
            </tr>
            
            
            
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default AllStates;
