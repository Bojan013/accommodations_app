import './App.css';
import React, {Component} from "react";
import Hosts from "../Hosts/hosts";
import AppRepository from "../../repository/appRepository";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Countries from "../Countries/countries";
import Accommodations from "../Accommodations/accommodations";
import Header from "../Header/header";
import AccommodationsAdd from "../Accommodations/AccommodationAdd/accommodationAdd";
import AccommodationEdit from "../Accommodations/AccommodationEdit/accommodationEdit";
import Categories from "../Categories/categories";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            hosts: [],
            accommodations: [],
            selectedAccommodation: {}
        }
    }

    render() {
        return (
            <Router>
                <Header/>
                <Routes>
                    <Route path="/countries" element={<Countries hosts={this.state.countries}/>}/>
                    <Route path="/categories" element={<Categories categories={["ROOM", "HOUSE", "FLAT", "APARTMENT", "HOTEL", "MOTEL"]}/>}/>
                    <Route path="/hosts" element={<Hosts hosts={this.state.hosts}/>}/>
                    <Route path="/" element={<Accommodations accommodations={this.state.accommodations}
                                                             onEdit={this.getAccommodation}
                                                             onRent={this.rent}
                                                             onDeleteAccommodation={this.deleteAccommodation}/>}/>
                    <Route path="/accommodations/add" element={<AccommodationsAdd
                        categories={["ROOM", "HOUSE", "FLAT", "APARTMENT", "HOTEL", "MOTEL"]} hosts={this.state.hosts}
                        onAddAccommodation={this.addAccommodation}/>}/>
                    <Route path="/accommodations/edit/:id" element={<AccommodationEdit
                        categories={["ROOM", "HOUSE", "FLAT", "APARTMENT", "HOTEL", "MOTEL"]}
                        accomodation={this.state.selectedAccommodation}
                        onEditAccommodation={this.editAccommodation}/>}/>
                    <Route path="/accommodations" element={<Accommodations accommodations={this.state.accommodations}
                                                                           onEdit={this.getAccommodation}
                                                                           onRent={this.rent}
                                                                           onDeleteAccommodation={this.deleteAccommodation}/>}/>

                </Routes>
            </Router>
        )
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        this.loadCountries();
        this.loadHosts();
        this.loadAccommodations();
    }

    loadCountries = () => {
        AppRepository.fetchCountries()
            .then((data) => {
                this.setState({countries: data.data})
            })
    }

    loadHosts = () => {
        AppRepository.fetchHosts()
            .then((data) => {
                this.setState({hosts: data.data})
            })
    }

    loadAccommodations = () => {
        AppRepository.fetchAccommodations()
            .then((data) => {
                this.setState({accommodations: data.data})
            })
    }

    addAccommodation = (name, category, hostId, numRooms) => {
        AppRepository.addAccommodation(name, category, hostId, numRooms)
            .then(() => {
                this.loadAccommodations();
            });
    }

    editAccommodation = (id, name, category, numRooms) => {
        AppRepository.editAccommodation(id, name, category, numRooms)
            .then(() => {
                this.loadAccommodations();
            });
    }

    deleteAccommodation = (id) => {
        AppRepository.deleteAccommodation(id)
            .then(() => {
                this.loadAccommodations();
            });
    }

    getAccommodation = (id) => {
        AppRepository.getAccommodation(id)
            .then((data) => {
                this.setState({selectedAccommodation: data.data})
            })
    }

    rent = (id) => {
        AppRepository.rent(id)
            .then((data) => {
                this.loadAccommodations();
            })
    }
}

export default App;
