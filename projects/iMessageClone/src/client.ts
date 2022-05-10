import {StreamChat} from 'stream-chat';
import {
  STREAM_API_KEY,
  STREAM_USER_TOKEN,
  STREAM_USER_ID,
} from 'react-native-dotenv';

// export const userToken = STREAM_USER_TOKEN;
// export const user = {id: STREAM_USER_ID};
//
// export const chatClient = StreamChat.getInstance(STREAM_API_KEY);



export const userToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoic3RldmVuYXRjb21wYXNzaW9uIn0.yHyb34QZ8vdEvUD35SMgeSbYJ3AuNiUKSw32mZq28l4';
export const user = {id: 'stevenatcompassion'};

// export const user = {id: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidGVzdF91c2VyXzEifQ.weYoNQTE7C1qpC2IpVCbE56FhZ3iPcNCdQJ14f-FLmg'};

console.log(userToken, user);

export const chatClient = new StreamChat(STREAM_API_KEY);
