import { sleep } from "@/lib/utils"
import React from "react";
import {pingAction} from "@/actions/ping/ping.action";
import ClientComponentTest from "@/app/todo/components/ClientComponentTest";

const page = async () => {
  console.log(">>> SSR Start");

  const result = await pingAction();
  await sleep(1500);

  console.log(">>> SSR End");
  return(
    <div>투두 page {result}
      <ClientComponentTest />
    </div>
  );
};

export default page;