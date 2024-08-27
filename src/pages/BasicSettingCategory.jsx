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
    position: absolute;
    top: 3.4vw;
    left: 3.5vw;
    width: 9.2vw;
    height: 1.5vw;
`;

const SettingTitle = styled.p`
    text-align: center;
    color: white;
    font-size: 1.3vw;
    top: 12vh;
    margin: 0;
    padding: 0;
`;

const SettingSubTitle = styled.p`
    text-align: center;
    color: #898989;
    font-size: 1vw;
    top: 14.6vw;
    margin: 0;
    padding: 0.8vw 0 0 0;
`;

const NickName = styled.span`
    color: #57F98E;
`

const CategoryList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 6vw;
    width: 26%;
`;

const CategoryItem = styled.div`
    background-color: transparent;
    width: auto;
    color: ${({ selected }) => (selected ? '#57F98E' : '#898989')};
    border: 0.2px solid ${({ selected }) => (selected ? '#57F98E' : '#898989')};
    border-radius: 50vh;
    padding: 1vw 2.6vw;
    margin-bottom: 2vw;
    font-size: 1.2vw;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
    
    &:hover {
        border-color: #57F98E;
        color: #57F98E;
    }
`;

const DoneButton = styled.button`
    background-color: #FFF;
    color: black;
    border-radius: 0.7vw;
    border: none;
    font-size: 1vw;
    margin-top: 6.5vh;
    padding: 1vw 2.6vw;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
    
    &:hover {
        background-color: #DDD;
    }

    &:disabled {
        background-color: #898989;
        cursor: default;
    }
`;
