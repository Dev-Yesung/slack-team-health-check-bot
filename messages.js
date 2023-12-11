require("dotenv").config();
const teamChannel = process.env.SLACK_CHANNEL;

const missionListMessage = `\n>*🎯 Mission*\n>\n
  1. CS 공부하고 정리하기\n
  2. 알고리즘 하루 한 문제 이상 문제풀기\n
  3. 개인 프로젝트`;

const howToDoMessage = `\n>*아래와 같이 진행해주세요!*\n>\n
  스레드 댓글에 항목별로 체크를 해주세요!\n
  해당 미션을 수행하셨다면, ✅를 해주세요🥳\n
  만일 수행하지 못했다면 ❌로 체크해주세요🥲\n
  Ex)\n
  1. CS 공부하고 정리하기✅\n
  2. 알고리즘 한 문제 이상 문제풀기❌\n
  3. 개인 프로젝트✅`;

const cheerUpMessageFrom = "요송봇🤖";

const cheerUpMessageAt13 = `\n>*📮 오늘의 메시지*\n>\n
  다들 밥은 먹고 하는 거지?\n
  취업도 좋지만 건강도 중요해😄\n
  에프팀 오늘도 다들 가보자구~💪\n
  *From ${cheerUpMessageFrom}*`;

const cheerUpMessageAt20 = `\n>*📮 오늘의 메시지*\n>\n
  오늘 하루도 다들 수고했어!\n
  모두들 오늘도 잘 해냈을 거라 믿어~🤩\n
  아쉬운게 있더라도 무리하지말고\n
  쉬어야 할때는 쉬자고😴\n
  끝까지 다들 화이팅!💪\n
  *From ${cheerUpMessageFrom}*`;

const messageBlocksAt13 = [
  {
    type: "section",
    text: {
      type: "mrkdwn",
      text: `
        \n>*☀️ 데일리 미션 알림 ☀️*\n>@here
      `,
    },
  },
  {
    type: "section",
    text: {
      type: "mrkdwn",
      text: `
        ${missionListMessage}
      `,
    },
    accessory: {
      type: "button",
      text: {
        type: "plain_text",
        text: "🤨 어떻게 진행하나요?",
      },
      action_id: "how_to_button",
    },
  },
  {
    type: "section",
    text: {
      type: "mrkdwn",
      text: `
        ${cheerUpMessageAt13}
      `,
    },
  },
];

const messageBlocksAt20 = [
  {
    type: "section",
    text: {
      type: "mrkdwn",
      text: `
        \n>*🌙 리마인드 알림 🌙*\n>@here
      `,
    },
  },
  {
    type: "section",
    text: {
      type: "mrkdwn",
      text: `
        ${missionListMessage}
      `,
    },
    accessory: {
      type: "button",
      text: {
        type: "plain_text",
        text: "🤨 어떻게 진행하나요?",
      },
      action_id: "how_to_button",
    },
  },
  {
    type: "section",
    text: {
      type: "mrkdwn",
      text: `
        ${cheerUpMessageAt20}
      `,
    },
  },
];

const messageAt13 = {
  channel: teamChannel,
  text: "에프팀 오후 1시 미션 알림",
  blocks: messageBlocksAt13,
};

const messageAt20 = {
  channel: teamChannel,
  text: "에프팀 오후 8시 미션 알림",
  blocks: messageBlocksAt20,
};

module.exports = {
  howToDoMessage: howToDoMessage,
  messageAt13: messageAt13,
  messageAt20: messageAt20,
};
