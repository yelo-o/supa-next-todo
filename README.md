# Supabase, Next 시작하기

## Generating TypeScript Types
https://supabase.com/docs/guides/api/rest/generating-types
```shell
npx supabase gen types typescript --project-id "pvqntozfaxxevguczxdg" --schema public > types/supabase.ts
```



## Google Login 구현 
1. Google Cloud API OAUTH 세팅
2. Auth UI
3. Callback 처리 (PKCE)