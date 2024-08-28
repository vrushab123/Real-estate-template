import React from 'react';
import './PropertyTypes.css';

export default function PropertyTypes() {
    return (
        <section className="property-types">
            <h2 className="property-types-title">Explore Our Property Types</h2>
            <div className="cards-container">
                <div className="property-card">
                    <img src={require('./commercial.jpg')} alt="Commercial Flats" className="property-image" />
                    <h3 className="property-title">Commercial Flats</h3>
                    <p className="property-description">Ideal for businesses and offices in prime locations.</p>
                </div>
                <div className="property-card">
                    <img src={require('./residential.png')} alt="Villas" className="property-image" />
                    <h3 className="property-title">Residential Flats</h3>
                    <p className="property-description">Perfect homes for families in peaceful neighborhoods.</p>
                </div>
                <div className="property-card">
                    <img src={require('./villa.jpg')} alt="Villas" className="property-image" />
                    <h3 className="property-title">Villas</h3>
                    <p className="property-description">Luxurious villas with spacious living and modern amenities.</p>
                </div>
            </div>
        </section>
    )
}
