"use client"
import React from 'react';
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa} from  "@supabase/auth-ui-shared";
import {createSupabaseBrowserClient} from "@/lib/client/supabase";
import useHydrate from "@/hooks/useHydrate";

const AuthUI = () => {
  const supabse = createSupabaseBrowserClient();
  const isMount = useHydrate();

  if (!isMount) return null;

  return (
    <section className="w-full">
      <div className=" mx-auto max-w-[500px]">
        <Auth
          supabaseClient={supabse}
          appearance={{
            theme: ThemeSupa,
          }}
          onlyThirdPartyProviders
          providers={["google", "github"]}
        />
      </div>
    </section>
  );
};

export default AuthUI;