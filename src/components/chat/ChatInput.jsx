import React from "react";
import styled from "styled-components";
import { IoSend } from "react-icons/io5";
import { BsEmojiSmileFill } from "react-icons/bs";
import { Button, Input } from "@mui/material";

function ChatInput() {
  return (
    <Container>
      <div className="button-container">
        <div className="emoji">
          <BsEmojiSmileFill />
          {/* {showEmojiPicker && <Picker onEmojiClick={handEmojiClick} />} */}
        </div>
      </div>
      <form className="input-container">
        <Input
          type="text"
          placeholder="type your message here"
          sx={{ width: "100%" }}
        />
        <Button type="submit" variant="contained">
          <IoSend />
        </Button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  background-color: #d4d4d4;
  display: grid;
  grid-template-columns: 5% 95%;
  align-items: center;
  /* background-color: #080420; */
  padding: 0 2rem;
  .button-container {
    display: flex;
    align-items: center;
    color: white;
    gap: 1rem;
    .emoji {
      position: relative;
      svg {
        font-size: 1.5rem;
        color: #ffff00c8;
        cursor: pointer;
      }
      .emoji-picker-react {
        position: absolute;
        top: -350px;
      }
    }
  }
  .input-container {
    width: 100%;
    height: 130%;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }
`;
export default ChatInput;
