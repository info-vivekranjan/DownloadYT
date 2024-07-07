import React from "react";
import { Collapse } from "antd";
import "./FAQs.scss";
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const items = [
  {
    key: "1",
    label: "Is DownloadYT YouTube video Downloader free to use?",
    children: <p>Yes, DownloadYT is a free online tool that allows users to download and convert YouTube videos without any charges.</p>,
  },
  {
    key: "2",
    label: "Is it legal to download YouTube videos using DownloadYT?",
    children: <p>Downloading copyrighted content without permission is generally against YouTube's terms of service and may also be illegal in some countries. Always respect copyright laws and use the tool responsibly.</p>,
  },
  {
    key: "3",
    label: "Can I download videos in different formats using DownloadYT?",
    children: <p>Yes, DownloadYT allows you to download videos in various formats such as MP4, AVI, and WEBM</p>,
  },
  {
    key: "4",
    label: "Does DownloadYT support downloading videos in high quality?",
    children: <p>Yes, DownloadYT supports downloading videos in different qualities, including HD and 4K</p>,
  },
  {
    key: "5",
    label: "Does DownloadYT support downloading videos in high quality?",
    children: <p>Yes, DownloadYT is a web-based tool and can be accessed from any device with an internet connection, including smartphones</p>,
  },
  {
    key: "6",
    label: "Is DownloadYT safe to use?",
    children: <p>DownloadYT is considered a safe and clean service, with no viruses and under intense supervision based on a security database. However, always practice caution while using any online tool and ensure you have up-to-date security software on your device.</p>,
  },
];

const FAQs = () => {
  return (
    <div className="accordion_cont">
      <h1>FAQs about DownloadYT</h1>
      <Collapse  defaultActiveKey={['1']} accordion items={items} />
    </div>
  );
};

export default FAQs;
