import React from "react";
import AppLayout from "../components/AppLayout";
import {
  EmailShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon,
} from "react-share";

const Recommendation = () => {
  return (
    <AppLayout>
      <div>친구에게 추천하기</div>
      <EmailShareButton>
        <EmailIcon round={false} borderRadius="20" />
      </EmailShareButton>
      <FacebookShareButton>
        <FacebookIcon round={false} borderRadius="10" />
      </FacebookShareButton>
      <TelegramShareButton>
        <TelegramIcon round={false} borderRadius="3" />
      </TelegramShareButton>
      <PinterestShareButton>
        <PinterestIcon round={false} borderRadius="5" />
      </PinterestShareButton>
      <LineShareButton>
        <LineIcon round={true} borderRadius="10" />
      </LineShareButton>
    </AppLayout>
  );
};

export default Recommendation;
