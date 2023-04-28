import { Button, ToastPosition, useToast } from "dragontail-experimental";
import { NextPage } from "next";

const Hi: NextPage = () => {
  const { addToast } = useToast();
  return (
    <>
      <Button
        onClick={() => {
          addToast({
            duration: 300,
            type: "success",
            position: ToastPosition.BottomRight,
          });
        }}
        className="mt-12"
      >
        HI
      </Button>
    </>
  );
};

export default Hi;
