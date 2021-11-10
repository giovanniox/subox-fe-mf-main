import React from 'react';
import styled from 'styled-components';
import img from '../../../static/img/banner.jpg';
import ShippingType from './components/ShippingType';
import Banner from './Banner';
import DiscountSales from './DiscountSales';
const SectionMain = () => {



    return (
        <>
            <Section>
                <SubSection>
                    <ShippingType />
                </SubSection>
            </Section>
            <DiscountSales/>
            <Banner />
 
        </>
    );
}

export default SectionMain;



const Section = styled.div`
    background-image: url(${img});
    width: 100%;
    height: 715px;
`;

const SubSection = styled.div`
    width: 50vh;
    height: 400px;
    margin: auto;
    padding-top: 100px;
`



