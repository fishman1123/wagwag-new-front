// Upload.js

import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import UnlockIcon from '../assets/svg/unlock.svg';
import LockIcon from '../assets/svg/lock.svg';
import {VideoUploadModal} from '../components/VideoUploadModal';
import {CustomModal} from '../components/CustomModal';

const Wrapper = styled.div`
    width: 100vw;
    display: flex;
    font-family: 'Pretendard-Medium';
    justify-content: center;
`;

const UploadWrap = styled.div`
    position: absolute;
    top: 11.6vw;
    left: 24.8vw;
`;

const UploadPageTitle = styled.div`
    padding-left: 0.52vw;
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
    cursor: pointer;
    font-size: 1vw;
    position: relative;
    overflow: hidden;
`;

const UploadContent = styled.div`
    position: absolute;
    display: flex;
`;

const UploadImageContainer = styled.div``;

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
    display: flex;
    margin-bottom: 0.89vw;
    padding-left: 0.83vw;
    font-size: 1.25vw;
`;

const UploadText = styled.div`
    display: flex;
    margin-top: 1.55vw;
    margin-bottom: 0.89vw;
    padding-left: 0.83vw;
    font-size: 1.25vw;
`;

const WarningTitle = styled.span`
    color: #ff7777;
    font-size: 1vw;
    padding-top: 0.2vw;
    margin-left: 0.3vw;
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

const TitleCountCheck = styled.span`
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
            background-color: #2b2b2b;
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
    min-width: 3.64vw;
    font-size: 1.04vw;
    margin-left: 0.52vw;
    padding-right: 1.04vw;
    border-right: 1.5px solid #2b2b2b;
`;

const FileName = styled.div`
    color: white;
    max-width: 8.85vw;
    font-size: 1.04vw;
    margin-left: 0.93vw;
`;

const FileNameContainer = styled.div`
    display: flex;
    margin-top: 2.24vw;
    height: 1.25vw;
    max-width: 13.17vw;
`;

const SaveButton = styled.button`
    margin-top: 30vw;
    margin-left: 53.8vw;
    width: 7vw;
    height: 3.4vw;
    background-color: rgba(255, 255, 255, 0.8);
    color: #080808;
    font-family: 'Pretendard-Medium';
    border-radius: 0.8vw;
    border: 1px solid #787878;
    transition: 0.5s ease;
    text-align: center;
    font-size: 1.14vw;
    cursor: pointer;

    &:hover {
        border: 1px solid white;
        color: #080808;
        background-color: white;
        transition: 0.5s ease;
    }
`;

export const Upload = () => {
    const [titleText, setTitleText] = useState('');
    const [descriptionText, setDescriptionText] = useState('');
    const [fileName, setFileName] = useState('');
    const [videoSrc, setVideoSrc] = useState(null);
    const videoRef = useRef(null);
    const maxTitleLength = 40;
    const maxDescriptionLength = 180;
    const [isPublic, setIsPublic] = useState(true);
    const [selectedFile, setSelectedFile] = useState(null);
    const [showWarnings, setShowWarnings] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false);

    // State for the alert modal
    const [alertModalMessage, setAlertModalMessage] = useState('');
    const [showAlertModal, setShowAlertModal] = useState(false);

    const togglePublicStatus = () => {
        setIsPublic((prevState) => !prevState);
    };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const fileURL = URL.createObjectURL(file);
            setVideoSrc(fileURL);
            setFileName(file.name);
            setSelectedFile(file);
        }
    };

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.onloadedmetadata = () => {
                if (videoRef.current.duration > 60) {
                    // Clear the video attachment
                    setVideoSrc(null);
                    setFileName('');
                    setSelectedFile(null);

                    // Show the modal
                    setShowModal(true);
                }
            };
        }
    }, [videoSrc]);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };

    const handleSave = async () => {
        setShowWarnings(true);

        if (!titleText || !descriptionText) {
            setAlertModalMessage('제목과 설명을 모두 입력해주세요.');
            setShowAlertModal(true);
            return;
        }

        if (!selectedFile) {
            setAlertModalMessage('업로드할 파일을 선택해주세요.');
            setShowAlertModal(true);
            return;
        }

        setUploading(true);
        setError('');

        try {

            // // Step 1: Request a presigned URL from the server
            // const presignedUrlResponse = await fetch('/api/getPresignedUploadUrl', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //         // Include authentication headers if necessary
            //     },
            //     body: JSON.stringify({
            //         fileName: selectedFile.name,
            //         fileType: selectedFile.type,
            //     }),
            // });
            //
            // if (!presignedUrlResponse.ok) {
            //     throw new Error('Failed to get presigned URL');
            // }
            //
            // const { presignedUrl, fileKey } = await presignedUrlResponse.json();
            //
            // // Step 2: Upload the file to S3 using the presigned URL
            // const uploadResponse = await fetch(presignedUrl, {
            //     method: 'PUT',
            //     headers: {
            //         'Content-Type': selectedFile.type,
            //     },
            //     body: selectedFile,
            // });
            //
            // if (!uploadResponse.ok) {
            //     throw new Error('Failed to upload file to S3');
            // }
            //
            // // Step 3: Send metadata to the server
            // const metadataResponse = await fetch('/api/saveVideoMetadata', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //         // Include authentication headers if necessary
            //     },
            //     body: JSON.stringify({
            //         title: titleText,
            //         description: descriptionText,
            //         isPublic: isPublic,
            //         fileKey: fileKey, // The key or identifier of the uploaded file in S3
            //     }),
            // });
            //
            // if (!metadataResponse.ok) {
            //     throw new Error('Failed to save video metadata');
            // }

            // Success
            setAlertModalMessage('업로드가 완료되었습니다.');
            setShowAlertModal(true);
            // Optionally, reset the form or redirect the user
            // Reset the form
            setTitleText('');
            setDescriptionText('');
            setFileName('');
            setVideoSrc(null);
            setSelectedFile(null);
            setShowWarnings(false);
        } catch (error) {
            console.error(error);
            setError('업로드 중 오류가 발생했습니다.');
            setAlertModalMessage('업로드 중 오류가 발생했습니다.');
            setShowAlertModal(true);
        } finally {
            setUploading(false);
        }
    };

    return (
        <>
            <VideoUploadModal show={showModal} onClose={() => setShowModal(false)} />

            <CustomModal show={showAlertModal} onClose={() => setShowAlertModal(false)}>
                <div>{alertModalMessage}</div>
            </CustomModal>

            <Wrapper>
                <UploadWrap>
                    <UploadPageTitle>와글 썸네일</UploadPageTitle>
                    <UploadContent>
                        <UploadImageContainer>
                            <UploadPreviewContent
                                onClick={() => document.getElementById('fileInput').click()}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                {videoSrc ? (
                                    <video
                                        ref={videoRef}
                                        src={videoSrc}
                                        style={{ width: '100%', height: '100%' }}
                                        muted
                                        loop
                                        playsInline
                                    ></video>
                                ) : (
                                    <div style={{ display: 'flex', justifyContent: 'center' }}></div>
                                )}
                                <input
                                    id="fileInput"
                                    type="file"
                                    accept="video/*"
                                    style={{ display: 'none' }}
                                    onChange={handleFileUpload}
                                />
                            </UploadPreviewContent>
                            <FileNameContainer>
                                <FileNameTag>파일이름</FileNameTag>
                                <FileName>{fileName || '파일이 없습니다'}</FileName>
                            </FileNameContainer>
                        </UploadImageContainer>
                        <UploadDescription>
                            <UploadTitleContainer>
                                <UploadTitle>
                                    <h1>제목</h1>
                                    {showWarnings && !titleText && (
                                        <WarningTitle>*제목을 입력해주세요!</WarningTitle>
                                    )}
                                </UploadTitle>
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
                                <UploadText>
                                    <h1>설명</h1>
                                    {showWarnings && !descriptionText && (
                                        <WarningTitle>*내용을 입력해주세요!</WarningTitle>
                                    )}
                                </UploadText>
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
                                <button onClick={togglePublicStatus}>
                                    <div style={{ marginRight: '0.5vw' }}>
                                        {isPublic ? (
                                            <img
                                                src={UnlockIcon}
                                                alt="Unlock Icon"
                                                style={{ width: '0.68vw', height: '0.94vw' }}
                                            />
                                        ) : (
                                            <img
                                                src={LockIcon}
                                                alt="Lock Icon"
                                                style={{ width: '0.68vw', height: '0.94vw' }}
                                            />
                                        )}
                                    </div>
                                    <div
                                        style={{
                                            justifyContent: isPublic ? 'flex-start' : 'center',
                                            marginLeft: isPublic ? '0' : '0.36vw',
                                        }}
                                    >
                                        {isPublic ? '전체공개' : '비공개'}
                                    </div>
                                </button>
                            </RevealButton>
                        </UploadDescription>
                    </UploadContent>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <SaveButton onClick={handleSave} disabled={uploading}>
                        {uploading ? '업로드 중...' : '확인'}
                    </SaveButton>
                </UploadWrap>
            </Wrapper>
        </>
    );
};