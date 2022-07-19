# Wordblock

A web3 note-taking tool built for open and interactive block reference. Everyone can publish user-owned notes (or articles, websites), composed by text cells with wallet signatures (i.e., word blocks).


## Introduction

Use this Chrome extension to experience portable, block-based note-taking backed by authenticated data. You could do block references in your writing (e.g. on Mirror), not only can you search and refer your own word blocks but also blocks created by anyone with a wallet. Once publish your writing, your publication is no longer a plain text, but interactive, block-chained knowledge graphs with verifiable ownership. See the demo video [here]. (+ image/gif)
 
## User Story

You curate any internet text or article into word blocks under your signature, specifically when you take notes or just highlight something while reading. Each block will be automatically assigned with a unique ID and secured on IPFS for public access.

When you write and publish on Mirror, you are composing your article with multiple blocks, each has its own ID and knowledge. You can write to create new blocks inside your publication, or search to refer existing blocks created by you or others. 

Word blocks make your article become interactive and collaborative. Everyone can simply track block references and verify signature chains. That's WEB3.

Assuming `"any internet text"` is curated by `wallet_A` as `block_A` (including `text`, `creator`, `referer`, `url`, `comments`, `tags`...), then `wallet_B` writes `block_B` in which `block_A` is referenced with new comments (this leads to another `block_A_ref`) and publish `article_B`. When you see it,  `block_A_ref` -> `block_A` -> `any internet text` can be discovered with attached ownerships of `wallet_B`, `wallet_A`, `original_author`.

## How to install

1. Download or clone this `Wordblock` repository to your local disk;
2. Unzip and find the `extension` folder;
3. Open *Google Chrome* browser, click `extensions` icon, go `manage extensions`;
4. Click `Load unpacked`, choose the `extension` folder you downloaded;
5. Go explore `Wordblock` while reading and writing!

## Roadmap
1. Mirror as a starting soil 用户在如mirror等编辑器中写作时，可以通过((block keyworks))/[[page title]]全局搜索相关的文字块或文章引用到当前文本中。
2. Bi-direction for THE WEB. For example, when you click a word block to jump to the URL, you can jump back and check who/what has linked to this URL before.  这些带有引用block的文章一经发布，被引用的web2原文页面，也可以显示其被引mirror文章的链接和缩略图，实现双向链接。自此，用户浏览任意web2页面时都可以探索其在web3文字领域的贡献。
3. Sign-in-with-Ethereum  只有作者本人可以编辑修改流数据中的内容，即本应用中文字块的内容。项目需要连接钱包，为用户登陆DID，通过判断当前文字块所有者和作者DID是否一致，一致则允许修改，若不一致，则只能引用文字块进行评论，随后创建新的文字块和流ID。Ceramic流数据目前只支持一个可编辑身份，暂不支持协作编辑。
4. integrate Ceramic for dynamic data 用户收藏或创建一个文字块后，文字块被存储在IPFS上，通过Ceramic网络的流实现文字块可修改编辑。将Ceramic存储的Stream ID引入其他block中，即可实现对文字块的引用和评论，所有链上文字块向所有用户公开检索，实现文本的块状网络连接。文档中包含一个或多个IPFS提交，每次新提交只包含对上一版本的修改。
5. develop new editor and publish tool —— theEdge, a knowledge reference protocol ("The edge") based on the above features.
6. 搜索 提及数据库，这部分技术不太懂
7. ENS
8. blockchain mapping

 
Contact: hi@fat-garage.com

