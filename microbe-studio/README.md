# Microbe Studio · 微生物课堂

可编辑的微生物作业网站：视频、学名与发音提示、重要性、同学朗读录音、手写签名、姓名和日期，以及创建者的私密记录管理页。

## 第一次使用

1. 网站仍为仅自己可见时，点击「激活我的创建者账户」。使用 ChatGPT 平台身份，激活后只有这个账户可以编辑或查看记录。
2. 在「内容编辑」填写标题、学名、中文名、发音提示、重要性、朗读文本及资料来源。
3. 上传视频，推荐 MP4（H.264 / AAC），最大 50 MB。上传后点击「保存并更新作业内容」。
4. 在 Sites 分享设置中配置同学访问权限。先完成创建者激活，再开放访问。
5. 同学观看视频，录制不超过 2 分钟的朗读（或上传 15 MB 以内音频），填写姓名、日期并签名，同意保存后提交。
6. 「提交记录」可试听、下载音频和 PNG 签名、导出 CSV/JSON、删除记录。导出表格仅含文字及媒体路径，媒体单独下载。

视频、音频、签名存储在 R2，姓名、日期和提交时文字快照存储在 D1。同学之间无法查看彼此记录。保存原始录音，不做语音转文字。签名为课堂记录，不用于身份核验。提交成功后显示记录编号。源仓库不包含同学提交的数据。

## 本地预览

要求 Node >=22.13、pnpm。React / TypeScript / CSS + Vinext + Cloudflare Workers。

```sh
pnpm install
pnpm run build
node --import ./scripts/sites-env.mjs ./node_modules/wrangler/bin/wrangler.js d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0000_mushy_northstar.sql
pnpm run dev
```

打开终端打印的地址，通常为 http://localhost:5173。portable 本地开发模式下可访问 `/signin-with-chatgpt?return_to=/` 使用本地测试身份；线上身份由 Sites 管理。managed-linux 模式使用 Sites 专用预览。

## 文件

- `app/page.tsx`：学习页、编辑页、录音、签字、记录管理。
- `app/globals.css`：响应式样式与 CSS 微生物插画。
- `app/api/classroom/route.ts`：服务端权限、上传和记录接口。
- `db/schema.ts`、`drizzle/`：数据库结构与迁移。
- `.openai/hosting.json`：Sites 身份、DB 和 BUCKET 绑定。

GitHub Pages 仅托管静态文件，不能独立运行本网站的上传和数据库接口。Sites 使用独立源仓库部署，GitHub 副本供代码保留与编辑，修改后需重新部署。

## 注意

录音需要 HTTPS / localhost 与麦克风权限；不支持时可上传音频。推荐 MP4 编码以提高视频兼容性。日期默认为访问设备本地日期，可修改。未提交时刷新会丢失表单。创建者账户一旦激活，没有自动转让流程。请在激活完成前保持网站私密。
