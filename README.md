# Slack Message Deleter

> Free slack account only could has 10000 messages, so it needed to delete unused messages frequently. So this tool apprears.

## Configure .env

### 1. rename `.env-example` to `.env`

### 2. generate a token from slack

### 3. Configure `.env`

> If you have multiple channels which want to deleted, please use `,` to separate channels

```bash
TOKEN=
CHANNEL_ID=
```

### Install node modules

```bash
yarn
```

## 🚀 Delete Slack Message

> Delete messages except pinned or stared messages

```bash
node delete-slack-message.js
```

- delete a message per 600 ms to throttle the Slack API usage to avoid request failed(You could change the frequency)

## Author

👤 **Zhihao Zhang**

- Github: [@zzh1991](https://github.com/zzh1991)

## Show your support

Please ⭐️ this repository if this project helped you!

## 📝 License

Copyright © 2020 [zzh1991](https://github.com/zzh1991).<br />
This project is [MIT](https://github.com/zzh1991/slack-message-deleter/blob/master/LICENSE) licensed.

