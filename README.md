# Slack Message Deleter

> Free slack account only could has 10000 messages, so it needed to delete unused messages frequently. So this tool apprears.

## Install node modules

```bash
yarn
```

## Configure .env

### how to generate token

> install APP to generate token

#### scopes

1. channels.history
2. channels.read
3. groups.read
4. im.read
5. mpim.read
6. users.read

### 1. rename `.env-example` to `.env`

### 2. generate a token from slack

### 3. Configure `.env`

> If you have multiple channels which want to deleted, please use `,` to separate channels

```bash
TOKEN=
CHANNEL_ID=
```

### 4. how to get channel id

```bash
node get-channel-list.js
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

