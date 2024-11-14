import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import MetaItem from "./meta-item";

dayjs.extend(relativeTime);

function Meta({ launch }) {
  const formattedDate = dayjs(launch.launch_date_utc).fromNow();
  const links = launch.links;

  return (
    <div className="launch__meta">
      <MetaItem>{formattedDate}</MetaItem>
      {links.article_link && <MetaItem><a href={links.article_link}>Article</a></MetaItem>}
      {links.video_link && <MetaItem><a href={links.video_link}>Video</a></MetaItem>}
    </div>
  );
}

export default Meta;
