
export  function H1bg({text,className}: {text: string,className?:string}) {
  return (
    <h1 className={` absolute opacity-20 text-6xl md:text-7xl lg:text-[6rem] 2xl:text-[9rem] [text-shadow:0px_0px_5px_#999999c7] lg:[text-shadow:0px_0px_50px_#8888888f] text-[#121211] font-extrabold ` + className}>
      {text}
    </h1>
  );
}
