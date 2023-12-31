import Image from "next/image";
import Link from "next/link";
import { getBlogPosts } from "@/helpers/contentful";
import * as Main from "../../style/main";
import MotionButton from "../motion/MotionButton";

export default async function Latest({ type, CTA, hrefMore, titleID }) {
  const posts = await getBlogPosts(type);

  posts.sort((a, b) => {
    const dateA = new Date(a.fields.date);
    const dateB = new Date(b.fields.date);
    return dateB.getTime() - dateA.getTime();
  });

  const post = posts[0];
  const { title, description, thumbnail, date } = post.fields as {
    title: string;
    description: string;
    thumbnail: any;
    date: string;
  };
  const { id } = post.sys;
  const { url, title: alt } = thumbnail.fields.file;

  return (
    <div id={titleID} className={Main.fullPage + " snap-start"}>
      <div className="h-5/6">
        <h1 className={Main.h1 + "pt-14 md:pl-20 text-center md:text-left"}>
          Latest <span className="capitalize ">{type}</span>
        </h1>
        <div className="flex flex-col h-5/6 md:w-1/3 md:mx-auto">
          <Link
            className="grow m-2 p-2 flex flex-col"
            href={{
              pathname: `${hrefMore}/` + title,
              query: {
                id: id,
              },
            }}
          >
            <div className="mx-auto relative w-1/2 aspect-square grow">
              <Image
                src={"https:" + url}
                alt={title}
                fill
                className="object-cover border rounded-xl"
              ></Image>
            </div>
            <div className="pt-4">
              <h2 className={Main.h2}>{title}</h2>
              <p className={Main.date + "text-right"}>
                {new Date(date).toDateString()}
              </p>
              <p className={Main.p}>{description}</p>
            </div>
          </Link>
          <div>
            <MotionButton
              clickable
              className={"flex justify-end pb-8"}
              href={hrefMore}
            >
              <span>
                More {type}
                {type[type.length - 1] === "s" ? "" : "s"}
              </span>
            </MotionButton>
          </div>
        </div>
      </div>
      {CTA}
    </div>
  );
}
