const { App } = require("@slack/bolt");
const schedule = require("node-schedule");
const { howToDoMessage, messageAt13, messageAt20 } = require("./messages");

const slackApp = new App({
  token: process.env.SLACK_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.APP_TOKEN,
});

(async () => {
  await slackApp.start(process.env.PORT || 3000);
  console.log("Team Foo의 취준 도우미 : 요송봇🤖을 시스템을 가동합니다...");
})();

// 테스트용 메서드
// slackApp.client.chat.postMessage(messageAt13);
// slackApp.client.chat.postMessage(messageAt20);

schedule.scheduleJob("0 0 13 * * *", async () => {
  try {
    slackApp.client.chat.postMessage(messageAt13);
  } catch (error) {
    console.log(error.message);
  }
});

schedule.scheduleJob("0 0 20 * * *", async () => {
  try {
    slackApp.client.chat.postMessage(messageAt20);
  } catch (error) {
    console.log(error.message);
  }
});

slackApp.action("how_to_button", async ({ body, ack, say, client }) => {
  await ack();
  try {
    await client.views.open({
      trigger_id: body.trigger_id,
      view: {
        type: "modal",
        callback_id: "how_to_modal",
        title: {
          type: "plain_text",
          text: "📢 이렇게 진행해주세요! 📢",
        },
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: howToDoMessage,
            },
          },
        ],
      },
    });
  } catch (error) {
    console.error(error);
  }
});
