import { sleep } from '@/lib/utils';
import React from 'react'

const page = async () => {
    // throw new Error("custom error");
    console.log('>>API call start');
    await sleep(1500);
    console.log('>>API call end');
  return (
    <div>page</div>
  )
}

export default page