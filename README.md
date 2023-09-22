# bun_5d1

 Version: 0.9.1

 Author  : Kouji Nakashima / kuc-arc-f.com

 date    : 2023/09/22

 update  :

***
### Summary

cloudflare workers + bun + D1,  sample

***
### wrangler.toml, setting

* db setting, sample

```
name = "name1"
main = "src/index.ts"
compatibility_date = "2023-09-01"
node_compat = true

[vars]
API_KEY = "123"

[[ d1_databases ]]
binding = "DB" # i.e. available in your Worker on env.DB
database_name = "my-d1"
database_id = ""

```
***
### blog 

* install 
```
bun install
```
***
* dev-start
```
bun run start
```
***
### deploy

```
bunx wrangler login
bunx wrangler publish
```
***

