import Image from "next/image";
import React from "react";

const Portfolio = () => {
  return (
    <div className=" max-w-[1240px] mx-auto py-16 text-center">
      <h1 className=" font-bold text-2xl p-4">Travel Photos</h1>
      <div className="grid grid-rows-none md:grid-cols-5 p-4 md:gap-4">
        <div className="w-full h-full col-span-2 md:col-span-3 row-span-2">
          <Image
            width="677"
            height="451"
            src="https://images.unsplash.com/photo-1547985190-90d9de9744f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5hdHVyZSUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="/"
            layout="responsive"
          />
        </div>
        <div className="w-full h-full">
          <Image
            width="215"
            height="217"
            src="https://images.unsplash.com/photo-1502747812021-0ae746b6c23f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG5hdHVyZSUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="/"
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            width="215"
            height="217"
            src="https://plus.unsplash.com/premium_photo-1673254850354-d95d7018e23c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyZSUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="/"
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            width="215"
            height="217"
            src="https://images.unsplash.com/photo-1597942080393-4cecdfbcee17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZSUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="/"
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            width="215"
            height="217"
            src="https://plus.unsplash.com/premium_photo-1673280739731-dd1d79e695ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fG5hdHVyZSUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="/"
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
