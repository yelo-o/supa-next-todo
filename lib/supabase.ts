// RouteHandler, RSC, Middleware, ServerActions

import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import { Database } from "@/types/supabase";
import { NextRequest, NextResponse } from "next/server";
import { getCookie, setCookie } from "cookies-next";

// - RouteHandler, ServerActions
export const createServerSideClient = async(serverComponent = false) => {
  const cookieStore = cookies();

  return createServerClient<Database> (
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get: (key) => cookieStore.get(key)?.value,
        set: (key, value, options) => {
          if (serverComponent) return;
          cookieStore.set(key, value, options);
        },
        remove: (key, options) => {
          cookieStore.set(key, "", options)
        }
      }
    }
  );
};

// - RSC
export const createServerSideClientRSC = async() => {
  return createServerSideClient(true);
}

// - MiddleWare
export const createServerSideMiddleware = async(req: NextRequest, res: NextResponse) => {
  return createServerClient<Database> (
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get: (key) => getCookie(key, { req, res }),
        set: (key, value, options) => {
          setCookie(key, value, { req, res, ...options});
        },
        remove: (key, options) => {
          setCookie(key, "", { req, res, ...options})
        }
      }
    }
  );

}