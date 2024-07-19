const Alert = ({ content, test }: { content: string; test: boolean }) => {
  return (
    <div className="flex items-center justify-center fixed left-1/2 -translate-x-1/2  top-0 z-[555]">
      <div
        className={
          test
            ? " text-[14px] bg-[#b5e2c0] px-10 py-3"
            : "text-[14px] bg-[#f8d7da]"
        }
      >
        {content}
      </div>
    </div>
  );
};

export default Alert;
