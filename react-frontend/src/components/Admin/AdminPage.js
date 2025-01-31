import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import welcomeImg from "../../assets/media/welcome-banner.png";
import { Galleria } from 'primereact/galleria';

const AdminPage = (props) => {
    const history = useHistory();
    useEffect(() => {}, []);

    const itemTemplate = (item) => {
        return (
          <div className="p-grid p-nogutter p-align-center">
            <div className="p-col-fixed">
              <img src={item.imageUrl} alt={item.name} className="product-image" />
            </div>
            <div className="p-col">
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <p>{item.price}</p>
            </div>
          </div>
        );
      };

    return (
        
        <div className="col-12 flex flex-column align-items-center">
            <div className="flex w-10">
                <div className=" w-8">
                    <h4 className="ml-4">Microservices Ready</h4>
                    <div className="w-full flex justify-content-center flex-wrap ">
                        <></>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/users'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>Users</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/products'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>Products</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/payments'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>Payments</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/delivery'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>Delivery</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/shoppingorder'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>Shoppingorder</div></div></Link></div>
                        {/* ~cb-add-services-card~ */}
                    </div>
                </div>
                <div className="w-4 flex flex-column align-items-center">
                    <img src={welcomeImg} alt="welcome image" className="h-30rem" role="lady-image" />
                    <p className="text-7xl m-0" role="welcome-text">
                        Welcome!
                    </p>
                    <p>You are ready to go!</p>
                </div>
            </div>
            {/* <div className="card w-10 my-6">
                <h4>REST API Ready</h4>
                <p className="underline m-0">e.g. Authentication</p>
                <p>POST http://localhost:3030/authentication {`{ "email": "example@email.com",    "password": "123456" }`}</p>
                <p className="underline m-0">e.g. CRUD</p>
                <p className="m-0">
                    GET {`=>`} GET http://localhost:3030/users/{`<userId>`}
                </p>
                <p className="m-0">
                    CREATE {`=>`} POST http://localhost:3030/users` {`{ "email": "example2@email.com",    "password": "456789" }`}
                </p>
                <p className="m-0">
                    PATCH {`=>`} PATCH http://localhost:3030/users/{`<userId>`}` {`{ "name": "Thomas Smith" }`}
                </p>
                <p className="m-0">
                    DELETE {`=>`} DELETE http://localhost:3030/users/{`<userId>`}
                </p>
            </div> */}
        </div>
    );
};
const mapState = (state) => {
    //
    return {};
};
const mapDispatch = (dispatch) => ({
    //
});

export default connect(mapState, mapDispatch)(AdminPage);
