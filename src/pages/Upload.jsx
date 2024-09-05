import React, { useState } from 'react';
import styled from 'styled-components';
import UnlockIcon from '../assets/svg/unlock.svg';
import LockIcon from '../assets/svg/lock.svg';

const Wrapper = styled.div`
    width: 100vw;
    display: flex;
    font-family: "Pretendard-Medium";
    justify-content: center;
`;

const UploadWrap = styled.div`
    position: absolute;
    top: 11.6vw;
    left: 24.8vw;
`;

const UploadPageTitle = styled.div`
    color: white;
`;

const UploadPreviewContent = styled.div`
    color: white;
    width: 16.35vw;
    height: 21.7vw;
    background-color: blue;
    border-radius: 15px;
`;

const UploadContent = styled.div`
    position: absolute;
    display: flex;
`;

const UploadImageContainer = styled.div`
    //position: absolute;
`;

const UploadDescription = styled.div`
    color: white;
    width: 46.6vw;
    margin-left: 3.9vw;
`;

const UploadTitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;
    width: 40.6vw;
`;

const UploadTitle = styled.div`
    margin-bottom: 0.89vw;
    padding-left: 0.83vw;
    font-size: 1.25vw;
`;

const UploadText = styled.div`
    margin-top: 1.55vw;
    margin-bottom: 0.89vw;
    padding-left: 0.83vw;
    font-size: 1.25vw;
`;

const UploadTitleInput = styled.div`
    border: 2px solid #5e5e5e;
    border-radius: 15px;
    width: 40.6vw;
    height: 4.44vw;
    display: flex;
    align-items: center;

    input {
        color: #fff;
        background: transparent;
        border: none;
        outline: none;
        width: 100%;
        height: 100%;
        padding: 0 1.9vw 0 1.9vw;
        font-size: 1.14vw;

        &::placeholder {
            color: #5e5e5e;
            font-size: 1.14vw;
        }
    }
`;

// Styled component that accepts the `isOverLimit` prop
const TitleCountCheck = styled.div`
    width: 4.9vw;
    color: ${(props) => (props.isOverLimit ? '#FF7777' : '#5E5E5E')};  // Use the prop for conditional styling
    text-align: end;
    font-size: 0.93vw;
    padding-bottom: 0.47vw;
    padding-right: 1.14vw;
`;

const UploadDescriptionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;
    width: 40.6vw;
`;

const UploadDescriptionInput = styled.div`
    border: 2px solid #5e5e5e;
    border-radius: 15px;
    width: 40.6vw;
    height: 11vw;
    display: flex;

    textarea {
        color: #fff;
        background: transparent;
        border: none;
        outline: none;
        width: 100%;
        height: 100%;
        padding: 1.44vw 1.9vw 1.2vw 1.9vw;
        font-size: 1.14vw;
        resize: none;
        overflow-y: auto;
        box-sizing: border-box;

        &::placeholder {
            color: #5e5e5e;
            font-size: 1.14vw;
        }
    }
`;

// Styled component that accepts the `isOverLimit` prop
const UserTypedTitle = styled.span`
    color: ${(props) => (props.isOverLimit ? '#FF7777' : 'white')};  // Use the prop for conditional styling
`;

const TextCheck = ({ currentText, maxValue }) => {
    const isOverLimit = currentText.length > maxValue;

    return (
        <TitleCountCheck isOverLimit={isOverLimit}>
            <UserTypedTitle isOverLimit={isOverLimit}>{currentText.length}</UserTypedTitle> / {maxValue}
        </TitleCountCheck>
    );
};

const RevealButton = styled.div`
    margin-top: 1.35vw;
    width: 9.06vw;
    height: 3.12vw;

    button {
        padding-left: 1.51vw;
        display: flex;
        align-items: center;
        color: white;
        background-color: black;
        cursor: pointer;
        border: 1.5px solid #5e5e5e;
        height: 100%;
        width: 100%;
        border-radius: 50px;
        font-size: 1.04vw;
    }
`;

// Main Upload Component
export const Upload = () => {
    const [titleText, setTitleText] = useState('');
    const [descriptionText, setDescriptionText] = useState('');
    const maxTitleLength = 40;
    const maxDescriptionLength = 180;

    const StatusIcon = () => {
        return (
            <div>
                <img src={UnlockIcon} alt="Unlock Icon" width="10" height="10" />
            </div>
        );
    };

    return (
        <>
            <Wrapper>
                <UploadWrap>
                    <UploadPageTitle><h1>hello</h1></UploadPageTitle>
                    <UploadContent>
                        <UploadImageContainer>
                            <UploadPreviewContent>
                                <h1>hello?</h1>
                            </UploadPreviewContent>
                        </UploadImageContainer>

                        <UploadDescription>
                            <UploadTitleContainer>
                                <UploadTitle><h1>제목</h1></UploadTitle>
                                <TextCheck currentText={titleText} maxValue={maxTitleLength} />
                            </UploadTitleContainer>
                            <UploadTitleInput>
                                <input
                                    type="text"
                                    placeholder="제목을 입력하세요"
                                    value={titleText}
                                    onChange={(e) => {
                                        if (e.target.value.length <= maxTitleLength + 1) {
                                            setTitleText(e.target.value);
                                        }
                                    }}
                                />
                            </UploadTitleInput>
                            <UploadDescriptionContainer>
                                <UploadText><h1>설명</h1></UploadText>
                                <TextCheck currentText={descriptionText} maxValue={maxDescriptionLength} />
                            </UploadDescriptionContainer>
                            <UploadDescriptionInput>
                                <textarea
                                    placeholder="시청자에게 이 와글에 대해 설명해 주세요"
                                    value={descriptionText}
                                    onChange={(e) => {
                                        if (e.target.value.length <= maxDescriptionLength + 1) {
                                            setDescriptionText(e.target.value);
                                        }
                                    }}
                                />
                            </UploadDescriptionInput>
                            <RevealButton>
                                <button><StatusIcon />전체공개</button>
                            </RevealButton>
                        </UploadDescription>
                    </UploadContent>
                </UploadWrap>
            </Wrapper>
        </>
    );
};
