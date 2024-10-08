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
    font-size: 1.25vw;
    margin-bottom: 0.83vw;
`;

const UploadPreviewContent = styled.div`
    color: white;
    width: 16.35vw;
    height: 21.7vw;
    background-color: #222222;
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

const TitleCountCheck = styled.div`
    width: 4.9vw;
    color: ${(props) => (props.isOverLimit ? '#FF7777' : '#5E5E5E')};
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
        margin-right: 0.8vw;
        background: transparent;
        border: none;
        outline: none;
        width: 100%;
        height: 100%;
        padding: 1.44vw 1vw 1.2vw 1.9vw;
        font-size: 1.14vw;
        resize: none;
        overflow-y: auto;
        box-sizing: border-box;

        &::placeholder {
            color: #5e5e5e;
            font-size: 1.14vw;
        }
        &::-webkit-scrollbar {
            width: 0.31vw;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #898989;
            border-radius: 0.4vw;
        }

        &::-webkit-scrollbar-track {
            background-color: #2B2B2B;
            border-radius: 0.4vw;
            margin-top: 1vw;
            margin-bottom: 1vw;
        }
    }
`;

const UserTypedTitle = styled.span`
    color: ${(props) => (props.isOverLimit ? '#FF7777' : 'white')};
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
    width: 8.33vw;
    height: 3.12vw;

    button {
        padding: 0.98vw 1vw 0.98vw 1.51vw;
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

const FileNameTag = styled.div`
    color: #787878;
    font-size: 1.04vw;
    margin-left: 0.52vw;
    padding-right: 1.04vw;
    border-right: 1.5px solid #2B2B2B;
`
const FileName = styled.div`
    color: white;
    font-size: 1.04vw;
    margin-left: 0.93vw;
`

const FileNameContainer = styled.div`
    display: flex;
    margin-top: 2.24vw;
    height: 1.25vw;
    max-width: 13.17;

`
const testFileName = "케인사과영상.MOV";

export const Upload = () => {
    const [titleText, setTitleText] = useState('');
    const [descriptionText, setDescriptionText] = useState('');
    const maxTitleLength = 40;
    const maxDescriptionLength = 180;

    const [isPublic, setIsPublic] = useState(true);

    const togglePublicStatus = () => {
        setIsPublic(prevState => !prevState);
    };

    return (
        <>
            <Wrapper>
                <UploadWrap>
                    <UploadPageTitle>와글 썸네일</UploadPageTitle>
                    <UploadContent>
                        <UploadImageContainer>
                            <UploadPreviewContent>
                                <h1>여기다 기능구현</h1>
                            </UploadPreviewContent>
                            <FileNameContainer>
                                <FileNameTag>파일이름</FileNameTag>
                                <FileName>{testFileName}</FileName>
                            </FileNameContainer>
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
                                <button
                                    onClick={togglePublicStatus}
                                    // style={{ justifyContent: isPublic ? 'flex-start' : 'center' }}
                                >
                                    <div style={{ marginRight: '0.5vw' }}>
                                        {isPublic ? (
                                            <img src={UnlockIcon} alt="Unlock Icon" style={{ width: '0.68vw', height: '0.94vw' }} />
                                        ) : (
                                            <img src={LockIcon} alt="Lock Icon" style={{ width: '0.68vw', height: '0.94vw' }} />
                                        )}
                                    </div>
                                    <div style={{
                                        justifyContent: isPublic ? 'flex-start' : 'center',
                                        marginLeft: isPublic ? '0' : '0.36vw',
                                    }}>
                                        {isPublic ? '전체공개' : '비공개'}
                                    </div>
                                </button>
                            </RevealButton>
                        </UploadDescription>
                    </UploadContent>
                </UploadWrap>
            </Wrapper>
        </>
    );
};
