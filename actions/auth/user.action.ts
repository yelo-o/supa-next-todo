import {createServerSideClient} from "@/lib/supabase";
import {supabase} from "@supabase/auth-ui-shared";

export const getUser = async () => {
  const supabase = await createServerSideClient();
  const user = await supabase.auth.getUser();
  return user?.data?.user;
}