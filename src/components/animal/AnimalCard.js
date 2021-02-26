import React from "react"
import "./Animal.css"

export const AnimalCard = ({animals}) => (
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <address className="location__address">{animal.location.name}</address>
    </section>
)