import React, { useState } from "react";
import styled from "styled-components";

const Select = ({ options, taskData, setTaskData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setTaskData({ ...taskData, status: option });
    setIsOpen(false);
  };

  return (
    <S.Container>
      <span>Status</span>
      <S.DropdownHeader onClick={toggleDropdown}>
        {taskData.status}
        <S.ArrowIcon isOpen={isOpen} />
      </S.DropdownHeader>
      {isOpen && (
        <S.DropdownList>
          {options.map((option) => (
            <S.OptionItem
              key={option}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </S.OptionItem>
          ))}
        </S.DropdownList>
      )}
    </S.Container>
  );
};

export default Select;

const S = {
  Container: styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    span {
      align-self: center;
      color: rgba(255, 255, 255, 0.7);
      @media (max-width: 850px) {
        color: black;
      }
    }
  `,

  DropdownHeader: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.15);

    @media (max-width: 850px) {
      border: 2px solid black;
    }
  `,

  ArrowIcon: styled.span`
    width: 0;
    height: 0;
    border: 6px solid transparent;
    margin-top: ${(props) => (props.isOpen ? null : "8px")};
    border-top-color: black;

    transition: transform 0.3s ease-in-out;
    transform: ${(props) => (props.isOpen ? "scaleY(-1)" : null)};
  `,

  DropdownList: styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
    border: 1px solid #ccc;
    border-top: none;
    border-radius: 0 0 5px 5px;
    background-color: white;
    z-index: 100;
  `,

  OptionItem: styled.li`
    padding: 10px;
    cursor: pointer;

    &:hover {
      background-color: #f0f0f0;
    }
  `,
};
