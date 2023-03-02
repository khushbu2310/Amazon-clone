import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      <div className="home__row">
        <Product
          id="12321341"
          title="Clean Code Book"
          price={230}
          rating={5}
          image="https://salt.tikicdn.com/cache/w1200/ts/product/5f/d7/35/d6a086d2450d364198cd07ebef63d8a7.jpg"
        />
        <Product
          id="12321342"
          title="Alexa"
          price={500}
          rating={4}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24"
        />
      </div>

      <div className="home__row">
        <Product
          id="12321341"
          title="iPad"
          price={1000}
          rating={5}
          image="https://www.bhphotovideo.com/images/images2500x2500/apple_mgp32ll_a_128gb_ipad_mini_with_1086725.jpg"
        />
        <Product
          id="12321341"
          title="Laptop"
          price={2300}
          rating={5}
          image="https://i5.walmartimages.com/asr/cacf10df-1c26-4357-808a-87b228333227.a3113043b4d88a0cc4bd6cb7f91d6710.jpeg"
        />
        <Product
          id="12321341"
          title="Smart Watch"
          price={240}
          rating={4}
          image="https://th.bing.com/th/id/OIP.L6jO825ewz6FSvW2HGYwQAHaHa?pid=ImgDet&rs=1"
        />
      </div>

      <div className="home__row">
        <Product
          id="12321346"
          title="4K Ultra LED"
          price={3200}
          rating={5}
          image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6378/6378773_rd.jpg"
        />
      </div>
      
    </div>
  );
}

export default Home;
