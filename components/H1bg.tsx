
export  function H1bg({text,className}: {text: string,className?:string}) {
  return (
    <h1 className={` absolute opacity-20  text-[9rem]    [text-shadow:0px_0px_5px_#888888] text-[#121211] font-extrabold ` + className}>
      {text}
    </h1>
  );
}
