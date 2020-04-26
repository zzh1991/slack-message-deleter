const axios = require('axios');
const dotenv = require('dotenv');
const sleep = require('sleep');

dotenv.config();

const BASE_API_URL = 'https://slack.com/api/';
const TOKEN = process.env.TOKEN;
const CHANNEL = process.env.CHANNEL_ID;

const getHistoryApiUrl = (channel) => {
  return `${BASE_API_URL}conversations.history?token=${TOKEN}&count=100&channel=${channel}&cursor=`;
};

const getDeleteApiUrl = (channel) => {
  return `${BASE_API_URL}chat.delete?token=${TOKEN}&channel=${channel}&ts=`;
};

const isNullorUndefined = (item) => {
  return item === null || item === undefined;
};

const getMessageList = async(channel) => {
  try {
    const messageList = [];
    const data = await axios.get(getHistoryApiUrl(channel), {
      timeout: 30000,
    });
    data.data.messages.forEach(message => {
      if (isNullorUndefined(message.is_starred || null)
        && isNullorUndefined(message.pinned_to || null)) {
          messageList.push(message.ts);
      }
    });
    return messageList;
  } catch (error) {
    console.log(error);
    return [];
  }
}

const deleteMessage = async(channel, message) => {
  try {
    await sleep.msleep(600);
    await axios.get(getDeleteApiUrl(channel).concat(message), {
      timeout: 5000,
    });
    console.log('delete message', message);
  } catch (error) {
    console.log(error);
  }
}

const getDataThenDelete = async() => {
  let messageList = [];
  const channelList = CHANNEL.split(',');
  for (const channel of channelList) {
    console.log('start to delete messages from', channel);
    messageList = await getMessageList(channel);
    console.log('message list size is', messageList.length);
    while (messageList.length !== 0) {
      for (const message of messageList) {
        await deleteMessage(CHANNEL, message);
      }
      messageList = await getMessageList(channel);
      console.log('message list size is', messageList.length);
    }
    console.log('messages deleted from', channel);
  }
}

getDataThenDelete();
