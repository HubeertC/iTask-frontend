import { faPenToSquare, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { styled } from "styled-components";

const EditChoiceList = ({ handleOptionSelect }) => {
  return (
    <S.ListWrapper>
      <ListContainer>
        <S.ListBox>
          <S.EditBox onClick={() => handleOptionSelect("edit")}>
            <p>Edit</p>
            <FontAwesomeIcon icon={faPenToSquare} />
          </S.EditBox>
          <S.AddBox onClick={() => handleOptionSelect("add")}>
            <p>Add</p>
            <FontAwesomeIcon icon={faPlus} />
          </S.AddBox>
        </S.ListBox>
        <S.Triangle />
      </ListContainer>

      <FontAwesomeIcon icon={faPenToSquare} size="xl" />
    </S.ListWrapper>
  );
};

export default EditChoiceList;

const ListContainer = styled.div`
  display: none;
`;

const S = {
  ListBox: styled.div`
    width: 85px;
    height: 65px;

    background-color: #282929;
    border-radius: 12px;
    position: absolute;
    top: -300%;
    left: -130%;

    color: white;
    font-size: 14px;
  `,

  ListWrapper: styled.div`
    position: relative;
    &:hover ${ListContainer} {
      display: block;
    }
  `,
  Triangle: styled.div`
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    position: absolute;
    top: -30%;
    left: 7%;

    border-top: 10px solid #282929;
  `,
  EditBox: styled.div`
    width: 100%;
    height: 50%;

    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 15px;
    border-radius: 12px 12px 0 0;
    border-bottom: 1px solid #d9d9d9;
    &:hover {
      background-color: rgba(255, 255, 255, 0.8);
      color: black;
      cursor: pointer;
    }
  `,
  AddBox: styled.div`
    height: 50%;
    display: flex;
    justify-content: space-around;
    gap: 15px;
    align-items: center;
    border-radius: 0 0 12px 12px;
    &:hover {
      background-color: rgba(255, 255, 255, 0.8);
      color: black;
      cursor: pointer;
    }
  `,
};
