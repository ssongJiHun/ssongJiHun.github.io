/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import styled from "@emotion/styled"

const thumbnailStyle = css`
  min-width : var(--post-card-height);
  margin-right : 45px;
  overflow : hidden;
`
const wrapperStyle = css`
  width : 100%;
  height : 100%;
  position: relative;
   top: calc(0px - 100%);
   .post-card a:hover & {
    transform: translateY(100%);
    transition-duration: 0.4s;
  }
`

const DateView = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size : 80px;
  line-height: 1;
`

const PreView = styled.div`
  width: 100%;
  height: 100%;
  background-color : #9c1111;
`

const PostCardThumbnail = ({ created, imagePath }) => {
  const d = new Date(created);
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div css={thumbnailStyle}>
      <div css={wrapperStyle}>
        <DateView>
          {d.getDate()}
          <span style={{ fontSize: '13px' }}>
            {monthNames[d.getMonth()]}
          </span>
        </DateView>
        <PreView />
      </div>
    </div>
  );
}

export default PostCardThumbnail;