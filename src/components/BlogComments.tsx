import { FC, useEffect, useState } from "react";
import { BlogComment } from "../mongodb/models/BlogComment";
import { CommentForm } from "./CommentForm";
import { Spinner } from "./svgs/Spinner";

interface BlogCommentsProps {
  blogId: string;
  className?: string;
}

export const BlogComments: FC<BlogCommentsProps> = ({ blogId }) => {
  const [refetch, setRefetch] = useState<string | undefined>(undefined);
  const [apiResponse, setApiResponse] = useState<BlogComment[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const f = async () => {
      setLoading(true);
      const response = await fetch("/api/comments/" + blogId);
      setTimeout(async () => {
        setLoading(false);
        if (response.ok) {
          setApiResponse(await response.json());
        } else {
          setIsError(true);
        }
      }, 200);
    };

    f();
  }, [blogId, refetch]);

  const handleSuccess = () => {
    // refresh token for new requests
    setRefetch(new Date().toISOString());
  };

  return (
    <>
      <h3 className={`mb-4 font-semibold`}>
        {apiResponse.length} {apiResponse.length === 1 ? "Comment" : "Comments"}
      </h3>
      <CommentForm
        onSuccess={handleSuccess}
        blogId={blogId}
        className={"w-full m-auto"}
      />
      <ul className="text-left flex flex-col justify-center gap-4 w-full mt-4 relative h-fit">
        {loading ? (
          <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-neutral-800/50 z-40 flex justify-center items-center">
            <Spinner className="animate-spin-slow w-16 h-16" />
          </div>
        ) : isError ? (
          "error"
        ) : (
          apiResponse.map((each, ind) => (
            <li
              key={JSON.stringify(each.id) || ind}
              className="shadow-xl rounded-md border bg-gray-600/20 border-neutral-400/30 w-full p-5 flex flex-col gap-2"
            >
              <div className="flex justify-start items-center px-1 gap-3">
                <svg
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM17 13.5C17 12.6716 16.3284 12 15.5 12H8.5C7.67157 12 7 12.6716 7 13.5V14C7 15.9714 8.85951 18 12 18C15.1405 18 17 15.9714 17 14V13.5ZM14.75 8.25C14.75 6.73122 13.5188 5.5 12 5.5C10.4812 5.5 9.25 6.73122 9.25 8.25C9.25 9.76878 10.4812 11 12 11C13.5188 11 14.75 9.76878 14.75 8.25Z"
                    fill="#efefef"
                  />
                </svg>
                <h4 className="font-medium">{each.commenterName}</h4>
              </div>
              <h5 className="px-2">
                {new Date(each.timestamp).toDateString()}
              </h5>
              <p className="p-4">{each.comment}</p>
            </li>
          ))
        )}
      </ul>
    </>
  );
};
