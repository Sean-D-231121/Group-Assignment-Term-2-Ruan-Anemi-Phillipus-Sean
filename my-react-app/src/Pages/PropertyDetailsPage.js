import React from "react";
import "./PropertyDetailsPage.css";

const houses = [
  {
    HouseName: "Cozy Cottage",
    HousePrice: 350000,
    Bedrooms: 2,
    Bathrooms: 1.5,
    Garages: 1,
    SquareMeters: 120,
    ImageUrl:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
  },
  {
    HouseName: "Modern Mansion",
    HousePrice: 1200000,
    Bedrooms: 5,
    Bathrooms: 4.5,
    Garages: 3,
    SquareMeters: 450,
    ImageUrl:
      "https://www.tennessean.com/gcdn/presto/2019/10/11/PNAS/adf1101a-0f8c-404f-9df3-5837bf387dfd-1_Exterior_House_Beautiful_Whole_Home_Concept_House_Castle_Homes_Photo_Reed_Brown_Photography.jpg?crop=5619,3161,x0,y104&width=3200&height=1801&format=pjpg&auto=webp",
  },
  {
    HouseName: "Charming Bungalow",
    HousePrice: 500000,
    Bedrooms: 3,
    Bathrooms: 2,
    Garages: 2,
    SquareMeters: 180,
    ImageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIbajG_axiUlQ0DN10vOyqlXzqp2p7I2BY2Va61b6uTw&s",
  },
  {
    HouseName: "Spacious Townhouse",
    HousePrice: 700000,
    Bedrooms: 4,
    Bathrooms: 3,
    Garages: 1,
    SquareMeters: 220,
    ImageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8U-78WohbghTPLC7SscjeoaFFM7QTzink5btLVlZVY6MJZRaNpQcpP2iGpQZJ94OoMVA&usqp=CAU",
  },
  {
    HouseName: "Luxury Apartment",
    HousePrice: 850000,
    Bedrooms: 2,
    Bathrooms: 2.5,
    Garages: 0,
    SquareMeters: 150,
    ImageUrl:
      "https://www.livehome3d.com/assets/img/articles/design-house/how-to-design-a-house.jpg",
  },
];

const PropertyDetailsCard = ({
  HouseName,
  HousePrice,
  Bedrooms,
  Bathrooms,
  Garages,
  SquareMeters,
  ImageUrl,
}) => {
  const HouseName1 = HouseName;
  const HousePrice1 = HousePrice;
  const Bedrooms1 = Bedrooms;
  const Bathrooms1 = Bathrooms;
  const Garages1 = Garages;
  const SquareMeters1 = SquareMeters;
  const imageUrl = ImageUrl;

  return (
    <div className="col">
      <div className="pdpCardElement">
        <div
          className="pdpCardImage"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        ></div>
        <div className="pdpCardContent">
          <div className="pdpCardTopText">
            <h4
              style={{
                marginRight: "10px",
                fontWeight: "bold",
              }}
            >
              R{HousePrice}
            </h4>
            <h6
              style={{
                marginTop: "7px",
              }}
            >
              {HouseName}
            </h6>
          </div>
          <div className="pdpCardHouseDetails">
            <h5>
              <strong>{Bedrooms}</strong> Bedroom
            </h5>
            <h5>
              <strong>{Bathrooms}</strong> Bathroom
            </h5>
            <h5>
              <strong>{Garages}</strong> Garage
            </h5>
            <h5>
              <strong>{SquareMeters}</strong> Square meter
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

const PropertyDetailsPage = () => {
  return (
    <div className="pdpMain">
      <div className="pdpSearchBox">
        <div className="pdpSearchTopContnent">
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Search for a property"
            style={{ float: "left", marginRight: "15px" }}
          ></input>
          <button
            type="button"
            class="btn btn-primary"
            style={{ float: "left", marginRight: "15px" }}
          >
            Search
          </button>
        </div>
      </div>

      <div
        className="pdpSearchContnent container"
        style={{ marginTop: "20px" }}
      >
        <h1 style={{ marginTop: "50px" }}>Houses for sale</h1>
        <p style={{ marginBottom: "50px" }}>
          Properties for sale - Gauteng - Pretoria
        </p>
        <div className="pdpContainer">
          {houses.map((house, index) => (
            <PropertyDetailsCard
              index={index}
              HouseName={house.HouseName}
              HousePrice={house.HousePrice}
              Bedrooms={house.Bedrooms}
              Bathrooms={house.Bathrooms}
              Garages={house.Garages}
              SquareMeters={house.SquareMeters}
              ImageUrl={house.ImageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;
