import React from "react";

import LogoContainer from "./LogoContainer";
import { customers } from "@/data/dummy-data";
import EmptyContainer from "./EmptyContainer";

const Customers = () => {
  return (
    <div className=''>
      <div className='flex items-center justify-end bp1440:grid bp1440:grid-cols-3 bp768:grid-cols-2'>
        {customers.map((cu, index) => {
          return index < 5 ? (
            <LogoContainer key={index} cu={cu} />
          ) : index === 5 ? (
            <EmptyContainer key='a' topBorder={false} rightBorder={false} />
          ) : null;
        })}
      </div>
      <div className='flex items-center justify-end bp1440:grid bp1440:grid-cols-3 bp768:grid-cols-2'>
        {customers.map((cu, index) => {
          return index < 10 && index > 4 ? (
            <LogoContainer key={index} cu={cu} />
          ) : index === 4 ? (
            <EmptyContainer
              key='b'
              leftBorder={false}
              topBorder={false}
              bottomBorder={false}
            />
          ) : null;
        })}
      </div>
      <div className='flex items-center justify-end bp1440:grid bp1440:grid-cols-3 bp768:grid-cols-2'>
        {customers.map((cu, index) => {
          return index < 15 && index > 9 ? (
            <LogoContainer key={index} cu={cu} />
          ) : index === 15 ? (
            <EmptyContainer key='c' rightBorder={false} />
          ) : null;
        })}
      </div>
      <div className='flex items-center justify-end bp1440:grid bp1440:grid-cols-3 bp768:grid-cols-2'>
        {customers.map((cu, index) => {
          return (
            index < 21 && index > 14 && <LogoContainer key={index} cu={cu} />
          );
        })}
      </div>
      <div className='flex items-center justify-start bp1440:grid bp1440:grid-cols-3 bp768:grid-cols-2'>
        {customers.map((cu, index) => {
          return index < 25 && index > 20 ? (
            <LogoContainer key={index} cu={cu} />
          ) : index === 20 ? (
            <EmptyContainer key='d' leftBorder={false} bottomBorder={false} />
          ) : null;
        })}
        <EmptyContainer key='e' rightBorder={false} bottomBorder={false} />
      </div>
    </div>
  );
};

export default Customers;
