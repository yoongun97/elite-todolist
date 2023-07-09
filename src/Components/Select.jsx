import React from "react";
import { styled } from "styled-components";
import { useState } from "react";

const DropdownWrapper = styled.div`
  width: 200px;
  height: 40px;
  border: 1px solid #ccc;
  margin: 20px;
`;

const DropdownHeader = styled.div`
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

const DropdownList = styled.div`
  border-top: 1px solid #ccc;
  width: 200px;
  border: 1px solid #ccc;
  background-color: #ffffff;
`;

const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;

const SelectedValue = styled.p`
  margin-left: 30px;
`;

function Select() {
  const options = ["선택하세요", "빨간색바지", "파란색바지", "검은색바지"];
  const [isActive, setIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsActive(false);
  };
  return (
    <>
      <DropdownWrapper>
        <DropdownHeader
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          <span>{selectedOption ? selectedOption : "선택하세요"}</span>
          <span>🔽</span>
        </DropdownHeader>
        {isActive && (
          <DropdownList>
            {options.map((option) => (
              <DropdownItem
                key={option}
                onClick={() => {
                  handleOptionClick(option);
                }}
              >
                {option}
              </DropdownItem>
            ))}
          </DropdownList>
        )}
      </DropdownWrapper>
      {selectedOption !== "선택하세요" ? (
        <SelectedValue>{selectedOption}</SelectedValue>
      ) : null}
    </>
  );
}

export default Select;
