import React from 'react'
import styled from 'styled-components'
import instagram from '../../../static/img/instagram.png'
import facebook from '../../../static/img/facebook.png'
const Banner = () => {
  return (
    <BannerContainer>
      <TextBannerContainer>
        <TextBanner>🍔 Síguenos para más promociones! 🌭</TextBanner>
      </TextBannerContainer>

      <ImgBannerContainer>
        <a href="https://www.instagram.com/" rel="noreferrer" target="_blank">
          <ImgBanner src={instagram} alt="instagram" />
        </a>
        <a href="https://www.facebook.com/" rel="noreferrer" target="_blank">
          <ImgBanner src={facebook} alt="facebook" />
        </a>
      </ImgBannerContainer>
    </BannerContainer>
  )
}

export default Banner
const BannerContainer = styled.div`
  width: 100%;
  background-color: #fef7e5;
  display: flex;
  flex-direction: column;
`
const TextBannerContainer = styled.div`
  margin: auto;
`
const TextBanner = styled.h3`
  color: #f21923;
  margin: 15px 0px 0px;
  font-family: cursive;
  font-size: 25px;
`
const ImgBannerContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
`
const ImgBanner = styled.img`
  width: 50px;
  border-radius: 10px;
  border: 1px solid #f1f1f1;
  background-color: white;
  margin: 0px 10px 30px;
`
