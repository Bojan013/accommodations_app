import React from 'react';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ProductAdd = (props) => {

    let navigate = useNavigate();

    const [formData, updateFormData] = React.useState({
        name: "",
        category: "ROOM",
        hostId: 1,
        numRooms: 0
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name;
        const category = formData.category;
        const hostId = formData.hostId;
        const numRooms = formData.numRooms;

        props.onAddAccommodation(name, category, hostId, numRooms);
        navigate('/accommodations');
    }

    return(
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Accommodation name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder="Enter accommodation name"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <select name="category" className="form-control" onChange={handleChange}>
                            <option value="ROOM">ROOM</option>
                            <option value="HOUSE">HOUSE</option>
                            <option value="FLAT">FLAT</option>
                            <option value="APARTMENT">APARTMENT</option>
                            <option value="HOTEL">HOTEL</option>
                            <option value="MOTEL">MOTEL</option>
                            {/*{props.categories.map((term) =>*/}
                            {/*    <option value={term.name}> {term} </option>//*/}
                            {/*)}*/}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Host</label>
                        <select name="hostId" className="form-control" onChange={handleChange}>
                            {props.hosts.map((term) =>
                                <option value={term.id}> {term.name} </option>
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="numRooms">Number Of Rooms</label>
                        <input type="text"
                               className="form-control"
                               id="numRooms"
                               name="numRooms"
                               required
                               placeholder="Enter number of rooms"
                               onChange={handleChange}
                        />
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ProductAdd;