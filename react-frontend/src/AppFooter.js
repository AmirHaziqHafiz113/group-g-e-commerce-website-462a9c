import React from "react";
import { Link } from "react-router-dom";

export const AppFooter = (props) => {
  return (
    <div className="layout-footer" style={{ backgroundColor: '#65C7CE', color: '#fff', position: 'fixed', bottom: 0, width: '100%' }}>
      <div className="flex justify-center space-x-4 px-4 py-2">
        <Link to="/about" className="text-gray-100 hover:text-gray-200">
          About Us
        </Link>
        <div className="mx-4" style={{ borderRight: '1px solid #fff', height: '24px' }}></div>
        <Link to="/contact" className="text-gray-100 hover:text-gray-200">
          Contact Us
        </Link>
      </div>
    </div>
  );
};
