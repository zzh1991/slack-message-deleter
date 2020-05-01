const axios = require('axios');
const dotenv = require('dotenv');
const qs = require('qs');

dotenv.config();

const TOKEN = process.env.TOKEN;

const getChannelList = async() => {
  const url = `https://slack.com/api/conversations.list?exclude_archived=true&limit=100&types=public_channel,private_channel&token=${TOKEN}`;
  const data = await axios.get(url);
  const channelList = data.data.channels;
  const channelIdList = [];
  channelList.forEach(channel => {
    channelIdList.push(channel.id);
    console.log(`${channel.id}: ${channel.name}`);
  });
  console.log(channelIdList.join(','));
};

getChannelList();
