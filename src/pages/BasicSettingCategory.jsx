import React, { useState } from 'react';
import styled from 'styled-components';
import logoImage from '../assets/wagwagLogo.png';

const nickname = '와글와글';

const categories = [
    '뷰티', '운동', '노래',
    '게임', '산책', '음식',
    '일상생활', '타 지역 인기 와글'
];

const BasicSettingCategory = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);

    const toggleCategory = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter(item => item !== category));
        } else if (selectedCategories.length < 3) {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const isCategorySelected = (category) => selectedCategories.includes(category);

    return (
        <Wrapper>
            <LogoImg />
            <SettingTitle><NickName>{nickname}</NickName>님이 관심있는 주제를 알려주세요</SettingTitle>
            <SettingSubTitle>* 내 취향에 맞는 와글을 더 편리하게 볼 수 있어요</SettingSubTitle>
            <CategoryList>
                {categories.map((category, index) => (
                    <CategoryItem
                        key={index}
                        onClick={() => toggleCategory(category)}
                        selected={isCategorySelected(category)}
                    >
                        {category}
                    </CategoryItem>
                ))}
            </CategoryList>
            <DoneButton disabled={selectedCategories.length !== 3}>
                완료
            </DoneButton>
            <NavWrapper>
                    <NavItem />
                    <NavItem />
                    <NavItem />
                </NavWrapper>
        </Wrapper>
    );
}

export default BasicSettingCategory;

// Styled components
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const LogoImg = styled.img.attrs({
    src: logoImage,
    alt: "",
  })`
    top: 3.4vw;
    left: 3.6vw;
    position: absolute;
    width: 9.2vw;
    height: 1.5vw;
  `;

const SettingTitle = styled.h1`
    font-family: "Pretendard-Medium";
    position: absolute;
    text-align: center;
    color: white;
    font-size: 1.35vw;
    top: 12vw;
`;

const SettingSubTitle = styled.p`
    position: absolute;
    text-align: center;
    color: #898989;
    font-size: 1vw;
    top: 14.2vw;
`;

const NickName = styled.span`
    color: #57F98E;
`

const CategoryList = styled.div`
    position: absolute;
    top: 22vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 25%;
`;

const CategoryItem = styled.div`
    background-color: transparent;
    width: auto;
    color: ${({ selected }) => (selected ? '#57F98E' : '#898989')};
    border: solid ${({ selected }) => (selected ? '#57F98E' : '#898989')};
    border-radius: 50vh;
    padding: 1vw 2.6vw;
    margin-bottom: 2vw;
    font-size: 1.1vw;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
`;

const DoneButton = styled.button`
    position: absolute;
    top: 43.4vw;
    width: 7vw;
    height: 3.4vw;
    background-color: white;
    color: #080808;
    font-family: "Pretendard-Medium";
    border-radius: 0.8vw;
    border: 1px solid #787878;
    transition: 0.5s ease;
    text-align: center;
    font-size: 1.14vw;
    cursor: pointer;

    &:disabled {
        background-color: #898989;
        cursor: default;
    }
`;

const NavWrapper = styled.div`
    position: absolute;
    display: flex;
    top: 50vw;
`;

const NavItem = styled.div`
    width: 2.4vw;
    padding: 0.1vw;
    display: flex;
    margin: 0.5vw;
    background: ${(props) => (props.active ? "#D9D9D9" : "#474747")};
    justify-content: space-around;
    border-radius: 5px;
`;