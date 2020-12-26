import React, { useState } from "react";
import Data from "./AccordianData";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";

const AccordianSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 50vh;
`;

const Container = styled.div`
  position: absolute;
  top: 30%;
  box-shadow: 2px 10px 35px rgba(0, 0, 0, 0.3);
  width: 70%;
`;
const Wrap = styled.div`
  background: rebeccapurple;
  color: #e3c6ff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;

  h1 {
    padding: 2rem;
    font-size: 1.5rem;
  }
  span {
    margin-right: 1.5rem;
  }
`;
const DropDown = styled.div`
  background: #efdfff;
  color: rebeccapurple;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 5px solid #cd9bff;
  border-top: 5px solid #cd9bff;
  text-align: center;

  h3 {
    padding: 10px;
    font-size: 15px;
    font-weight: 500;
  }
`;

const Accordian = () => {
  const [click, setClick] = useState(false);
  const toggled = (index) => {
    if (click === index) {
      return setClick(null);
    }
    setClick(index);
  };
  return (
    <IconContext.Provider value={{ color: "fefdff", size: "30px" }}>
      <AccordianSection>
        <Container>
          {Data.map((singleData, indexOfData) => {
            return (
              <>
                <Wrap
                  onClick={() => {
                    toggled(indexOfData);
                  }}
                  key={indexOfData}
                >
                  <h1>{singleData.question}</h1>
                  <span>
                    {click === indexOfData ? <FiMinus /> : <FiPlus />}
                  </span>
                </Wrap>
                {click === indexOfData ? (
                  <DropDown>
                    <h3>{singleData.answer}</h3>
                  </DropDown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordianSection>
    </IconContext.Provider>
  );
};
export default Accordian;
