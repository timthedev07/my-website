import { FC, useEffect, useState } from "react";
import { BlogComment } from "../mongodb/models/BlogComment";

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
      <h3>
        {apiResponse.length} {apiResponse.length === 1 ? "Comment" : "Comments"}
      </h3>
      <ul className="text-left flex flex-col justify-center gap-4 w-full">
        {isError
          ? "error"
          : apiResponse.map((each) => (
              <li
                key={each.blogId}
                className="rounded-md border border-slate-300/50 w-full p-5 flex flex-col gap-4"
              >
                <h4 className="font-extrabold">{each.commenterName}</h4>
                <p>{each.comment}</p>
              </li>
            ))}
      </ul>
    </>
  );
};
