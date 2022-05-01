import { FC, useEffect, useState } from "react";
import { BlogComment } from "../mongodb/models/BlogComment";
import { CommentForm } from "./CommentForm";

interface BlogCommentsProps {
  blogId: string;
  className?: string;
}

export const BlogComments: FC<BlogCommentsProps> = ({
  blogId,
  className = "",
}) => {
  const [apiResponse, setApiResponse] = useState<BlogComment[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const f = async () => {
      const response = await fetch("/api/comments/" + blogId);
      if (response.ok) {
        setApiResponse(await response.json());
      } else {
        setIsError(true);
      }
    };

    f();
  }, [blogId]);

  return (
    <>
      <h3 className={`mb-4 font-semibold`}>
        {apiResponse.length} {apiResponse.length === 1 ? "Comment" : "Comments"}
      </h3>
      <CommentForm blogId={blogId} className={"w-full m-auto"} />
      <ul className="text-left flex flex-col justify-center gap-4 w-full">
        {isError
          ? "error"
          : apiResponse.map((each) => (
              <li
                key={each.blogId}
                className="rounded-md border border-neutral-300 w-full p-5 flex flex-col gap-4"
              >
                <h4 className="font-medium">{each.commenterName}</h4>
                <p>{each.comment}</p>
              </li>
            ))}
      </ul>
    </>
  );
};
