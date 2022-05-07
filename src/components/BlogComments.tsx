import { FC, useEffect, useState } from "react";
import { BlogComment } from "../mongodb/models/BlogComment";
import { CommentForm } from "./CommentForm";

interface BlogCommentsProps {
  blogId: string;
  className?: string;
}

export const BlogComments: FC<BlogCommentsProps> = ({ blogId }) => {
  const [refetch, setRefetch] = useState<string | undefined>(undefined);
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
      <ul className="text-left flex flex-col justify-center gap-4 w-full mt-4">
        {isError
          ? "error"
          : apiResponse.map((each, ind) => (
              <li
                key={JSON.stringify(each.id) || ind}
                className="shadow-xl rounded-md border bg-gray-600/20 border-neutral-400/30 w-full p-5 flex flex-col gap-2"
              >
                <div className="flex justify-start items-center p-1 gap-3">
                  {!each.isAnonymous ? (
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
                  ) : (
                    <svg
                      version="1.1"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      xmlSpace="preserve"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <g id="grid_system" />
                      <g id="_icons">
                        <g>
                          <path
                            d="M4,12h3h10h3c0.6,0,1-0.4,1-1s-0.4-1-1-1h-2.2l-1.5-5.8C16,2.9,14.9,2,13.6,2c-0.2,0-0.4,0.1-0.5,0.2l-0.3,0.2    c-0.4,0.3-0.9,0.3-1.3,0L11,2.2C10.8,2.1,10.6,2,10.4,2C9.1,2,8,2.9,7.7,4.2L6.2,10H4c-0.6,0-1,0.4-1,1S3.4,12,4,12z M9.6,4.6    C9.7,4.3,9.9,4.1,10.2,4l0,0c1.1,0.7,2.4,0.7,3.5,0l0,0c0.3,0.1,0.5,0.3,0.6,0.6L15,7H9L9.6,4.6z M8.5,9h6.9l0.3,1H8.3L8.5,9z"
                            fill="white"
                          />
                          <path
                            d="M17,13c-1.9,0-3.4,1.3-3.9,3h-2.3c-0.4-1.7-2-3-3.9-3c-2.2,0-4,1.8-4,4s1.8,4,4,4c1.9,0,3.4-1.3,3.9-3h2.3    c0.4,1.7,2,3,3.9,3c2.2,0,4-1.8,4-4S19.2,13,17,13z M7,19c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S8.1,19,7,19z M17,19    c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S18.1,19,17,19z"
                            fill="white"
                          />
                        </g>
                      </g>
                    </svg>
                  )}
                  <h4 className="font-medium">{each.commenterName}</h4>
                </div>
                <h5>{JSON.stringify(each.timestamp)}</h5>
                <p className="p-3">{each.comment}</p>
              </li>
            ))}
      </ul>
    </>
  );
};
