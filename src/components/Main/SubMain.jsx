import React from 'react';

const SubMain = () => {
  const main = [
    {
      id: 1,
      img: '5.jpg',
      name: 'Luxurious Eyewear',
      descrip:
        'See the beauty of exotic world with the luxurious glasses  our wooden watches  our atches',
    },
    {
      id: 2,
      img: 'reloj1.jpg',
      name: 'Comfortable Watches',
      descrip:
        'Feels the balancing function and beauty in our wooden watches  our wooden watches',
    },
  ];

  let containerStyle = {
    width: '540px',
    height: '250px',
  };
  let imgStyle = {
    width: '240px',
    height: '115px',
  };
  return (
    <div className="row container w-100 " style={containerStyle}>
      {main.map((data) => (
        <div
          className="container w-100 h-100 d-flex col bg-white my-6 mx-2 text-dark position-relative flex-column justify-content-start "
          key={data.id}
        >
          <h4 className="mt-5 mx-3">{data.name}</h4>
          <p className="mt-3">{data.descrip}</p>
          <div className=" z-index position-absolute bottom-0 end-0 d-flex justify-content-end align-items-end h-50 w-100">
            <img src={data.img} alt="" className="bg-img" style={imgStyle} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubMain;
