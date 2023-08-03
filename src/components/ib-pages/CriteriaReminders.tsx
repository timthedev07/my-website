import { FC, useState } from "react";

interface CriteriaRemindersProps {}

// This is a component that brings up a reminder of the 7 IB learning outcomes

export const CriteriaReminders: FC<CriteriaRemindersProps> = ({}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div></div>
      <button
        onClick={() => {
          setOpen((prev) => !prev);
        }}
        className={`${open} fixed top-32 left-0 flex w-10 h-10 justify-center items-center bg-slate-300/30 rounded-r-xl`}
      >
        <span className="font-mono text-lg">i</span>
      </button>
    </>
  );
};
