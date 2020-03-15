import React from 'react';
import Pivot from '../Pivot';
import Navigation from '../Navigation';

export default function HomePage() {
    return (
        <div className="bg-img" style={{backgroundImage: 'url(img/clouds.jpg)'}}>
            <Pivot title={['Ryan', 'Vandersmith']} delay={3} caret/>
            <Navigation/>
        </div>
    );
};
