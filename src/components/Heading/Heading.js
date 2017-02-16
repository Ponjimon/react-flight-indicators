import React, { PropTypes } from 'react';
import { Instrument, InstrumentBox } from '../../Instrument';

export default function Heading({ heading }) {
    return (
        <Instrument>
            <InstrumentBox />
            <InstrumentBox type="yaw" rotation={-heading}/>
            <InstrumentBox type="headingMechanics"/>
            <InstrumentBox type="circle"/>
        </Instrument>
    )
};

Heading.propTypes = {
    heading: PropTypes.number.isRequired,
};

Heading.defaultProps = {
    heading: 45,
};
