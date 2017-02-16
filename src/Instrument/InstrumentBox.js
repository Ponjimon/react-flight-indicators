import React, { PureComponent, PropTypes } from 'react';
import StyledInstrumentBox from './StyledInstrumentBox';
import StyledInstrumentImg from './StyledInstrumentImg';
import FiBox from '../../assets/fi_box.svg';
import FiCircle from '../../assets/fi_circle.svg';
import FiNeedle from '../../assets/fi_needle.svg';
import FiNeedleSmall from '../../assets/fi_needle_small.svg';
import AltitudePressure from '../../assets/altitude_pressure.svg';
import AltitudeTicks from '../../assets/altitude_ticks.svg';
import Yaw from '../../assets/heading_yaw.svg';
import HeadingMechanics from '../../assets/heading_mechanics.svg';

export default function InstrumentBox({ type, values, rotation }) {
    switch (type) {
        case 'pressure':
            return (
                <StyledInstrumentBox style={{ transform: `rotate(${rotation}deg)` }}>
                    <StyledInstrumentImg>
                        <AltitudePressure className="svg" />
                    </StyledInstrumentImg>
                </StyledInstrumentBox>
            );
        case 'needleSmall':
            return (
                <StyledInstrumentBox style={{ transform: `rotate(${rotation}deg)` }}>
                    <StyledInstrumentImg>
                        <FiNeedleSmall className="svg" />
                    </StyledInstrumentImg>
                </StyledInstrumentBox>
            );
        case 'needle':
            return (
                <StyledInstrumentBox style={{ transform: `rotate(${rotation}deg)` }}>
                    <StyledInstrumentImg>
                        <FiNeedle className="svg" />
                    </StyledInstrumentImg>
                </StyledInstrumentBox>
            );
        case 'circle':
            return (
                <StyledInstrumentBox>
                    <StyledInstrumentImg>
                        <FiCircle className="svg" />
                    </StyledInstrumentImg>
                </StyledInstrumentBox>
            );
        case 'yaw':
            return (
                <StyledInstrumentBox style={{ transform: `rotate(${rotation}deg)` }}>
                    <StyledInstrumentImg>
                        <Yaw className="svg" />
                    </StyledInstrumentImg>
                </StyledInstrumentBox>
            );
        case 'headingMechanics':
            return (
                <StyledInstrumentBox>
                    <StyledInstrumentImg>
                        <HeadingMechanics className="svg" />
                    </StyledInstrumentImg>
                    <StyledInstrumentImg>
                        <FiCircle className="svg" />
                    </StyledInstrumentImg>
                </StyledInstrumentBox>
            );
        case 'ticks':
            return (
                <StyledInstrumentImg>
                    <AltitudeTicks className="svg" />
                </StyledInstrumentImg>
            );
        default:
            return (
                <StyledInstrumentImg>
                    <FiBox className="svg" />
                </StyledInstrumentImg>
            );
    }
}

InstrumentBox.propTypes = {
    type: PropTypes.string,
    values: PropTypes.shape(PropTypes.oneOfType([PropTypes.number])),
    rotation: PropTypes.number,
};
