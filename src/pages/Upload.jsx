import logoImage from "../assets/wagwagLogo.png";
import styled from "styled-components";



const Wrapper = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
`;

const UploadWrap = styled.div`
    position: absolute;
    top: 11.6vw;
    left: 24.8vw;
`

const Uploadtitle = styled.div`
    color: white;
`
const UploadContent = styled.div`
    position: absolute;
    color: white;
    
`

export const Upload = () => {
    return (
        <>
            <Wrapper>
                <UploadWrap>
                    <Uploadtitle>
                        <h1>hello</h1>
                    </Uploadtitle>
                    <UploadContent>
                        <h1>hello?</h1>
                    </UploadContent>

                </UploadWrap>
            </Wrapper>
        </>
    )
}