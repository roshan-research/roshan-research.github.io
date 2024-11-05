import React from "react";

import LogoContainer from "./LogoContainer";
import {
  customers,
  customersRow1,
  customersRow2,
  customersRow3,
} from "@/data/dummy-data";

const Customers = () => {
  return (
    <div className=''>
      <div className='flex items-center justify-end bp1440:grid bp1440:grid-cols-3 bp768:grid-cols-2'>
        {customersRow1.map((cu, index) => {
          return <LogoContainer key={index} cu={cu} />;
        })}
      </div>
      <div className='flex items-center justify-end bp1440:grid bp1440:grid-cols-3 bp768:grid-cols-2'>
        {customersRow2.map((cu, index) => {
          return <LogoContainer key={index} cu={cu} />;
        })}
      </div>
      <div className='flex items-center justify-end bp1440:grid bp1440:grid-cols-3 bp768:grid-cols-2'>
        {customersRow3.map((cu, index) => {
          return <LogoContainer key={index} cu={cu} />;
        })}
      </div>
    </div>
  );
};

export default Customers;
