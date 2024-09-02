import React from "react";
import styled from "styled-components";
import WaggleListItem from "./WaggleListItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60.41vw;
  border-radius: 14px;
  background: #1c1c1c;
  gap: 0.52vw;
`;
const Date = styled.div`
  font-family: "Pretendard";
  color: #fff;
  font-width: bold;
  font-size: 1.35vw;
  margin: 1.04vw;
`;
function WaggleList(props) {
  const { posts } = props;
  console.log(posts);
  return (
    <Wrapper>
      {posts.map((post, idx) => {
        const isSameDateAsPrevious =
          idx > 0 && post.date === posts[idx - 1].date;

        return (
          <React.Fragment key={post.id}>
            {!isSameDateAsPrevious && <Date>{post.date}</Date>}
            <WaggleListItem post={post} />
          </React.Fragment>
        );
      })}
    </Wrapper>
  );
}

export default WaggleList;