import React, { PropTypes } from 'react';
import { Instrument, InstrumentBox } from '../../Instrument';

export default function Altimeter({ altitude, pressure }) {
    pressure = (2 * pressure) - 1980;
    const needle = 90 + altitude % 1000 * 360 / 1000;
    const needleSmall = altitude / 10000 * 360;
    return (
        <Instrument>
            <InstrumentBox />
            <InstrumentBox type="pressure" rotation={pressure}/>
            <InstrumentBox type="ticks"/>
            <InstrumentBox type="needleSmall" rotation={needleSmall}/>
            <InstrumentBox type="needle" rotation={needle}/>
            <InstrumentBox type="circle"/>
        </Instrument>
    );
};

Altimeter.propTypes = {
    altitude: PropTypes.number.isRequired,
    pressure: PropTypes.number.isRequired,
};

Altimeter.defaultProps = {
    altitude: 10000,
    pressure: 1000,
};