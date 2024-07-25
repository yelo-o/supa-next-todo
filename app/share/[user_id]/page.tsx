import React from 'react'

interface SharePageProps {
  params: { user_id: string },
  searchParams: {}
}

const SharePage = async (props: SharePageProps) => {
  console.log(">> props: ", props)
  const userId = props?.params?.user_id;

  return (
    <div>
      Share page
    </div>
  )
}

export default SharePage