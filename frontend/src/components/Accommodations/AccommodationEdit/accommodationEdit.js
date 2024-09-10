import React from 'react';
import {useNavigate} from 'react-router-dom';

const AccommodationEdit = (props) => {

    let navigate = useNavigate();

    const [formData, updateFormData] = React.useState({
        name: "",
        category: "ROOM",
        numRooms: 0,
        isRented : false
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name !== "" ? formData.name : props.accomodation.name;
        const category = formData.category !== null ? formData.category : props.accomodation.category;
        // const hostId = formData.hostId !== 0 ? formData.hostId : props.accomodation.hostId;
        const numRooms = formData.numRooms !== 0 ? formData.numRooms : props.accomodation.numRooms;

        props.onEditAccommodation(props.accomodation.id, name, category, numRooms);
        navigate('/accommodations');
    }

    return (
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Accommodation name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               placeholder={props.accomodation.name}
                               defaultValue={props.accomodation.name}
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
                        </select>
                        {/*<select name="category" className="form-control" onChange={handleChange}>*/}
                        {/*    {props.categories.map((term) => {*/}
                        {/*        if (props.accomodation.category !== undefined &&*/}
                        {/*            props.accomodation.category === term.name)*/}
                        {/*            return <option selected={props.accomodation.category}*/}
                        {/*                           value={term.id}>{term.name}</option>*/}
                        {/*        else return <option value={term.id}>{term.name}</option>*/}
                        {/*    })}*/}
                        {/*</select>*/}
                    </div>
                    <div className="form-group">
                        <label htmlFor="numRooms">Number Of Rooms</label>
                        <input type="text"
                               className="form-control"
                               id="numRooms"
                               name="numRooms"
                               required
                               placeholder={props.accomodation.numRooms}
                               defaultValue={props.accomodation.numRooms}
                               onChange={handleChange}
                        />
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AccommodationEdit;