import React from "react"
import "./Animal.css"

export const AnimalCard = ({ location, customer, animal}) => (
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <p className="location__name">Location: {location.name}</p>
        {/*<address className="location__address">Address: {animal.location.name}</address>*/}
        <p className="customer__name">Owner: {customer.name}</p>
    </section>
)