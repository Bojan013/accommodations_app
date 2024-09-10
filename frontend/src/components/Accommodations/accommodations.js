import React from "react";
import {Link} from "react-router-dom";

const accommodations = (props) => {
    return (
        <div className={"container mm-4 mt-5"}>
            <div className={"row"}>
                <div className={"table-responsive"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Name</th>
                            <th scope={"col"}>Category</th>
                            <th scope={"col"}>Host name</th>
                            <th scope={"col"}>Number of rooms left</th>
                            {/*<th scope={"col"}>Is accommodation fully rented</th>*/}
                        </tr>
                        </thead>
                        <tbody>
                        {props.accommodations.map((accommodation) => {
                            return (

                                <tr>
                                    <td>{accommodation.name}</td>
                                    <td>{accommodation.category}</td>
                                    <td>{accommodation.host.name}</td>
                                    <td>{accommodation.numRooms}</td>
                                    {/*<td>{accommodation.isRented}</td>*/}

                                    <td className={"text-right"}>
                                        <a title={"Delete"} className={"btn btn-danger m-1"}
                                           onClick={() => props.onDeleteAccommodation(accommodation.id)}>
                                            Delete
                                        </a>
                                        <Link className={"btn btn-primary "}
                                              onClick={() => props.onEdit(accommodation.id)}
                                              to={`/accommodations/edit/${accommodation.id}`}>
                                            Edit
                                        </Link>
                                        {accommodation.numRooms > 0 && (<a className={"btn btn-warning m-1"}
                                                                           onClick={() => props.onRent(accommodation.id)}>Rent</a>)}

                                    </td>

                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="col mb-3">
                <div className="row">
                    <div className="col-sm-12 col-md-12">
                        <Link className={"btn btn-block btn-dark"} to={"/accommodations/add"}>Add new
                            accommodation</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default accommodations;