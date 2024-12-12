---
title: 语义化版本控制 2.0.0
categories:
  - it
  - studio
date: 2013-11-16 00:00:00
updated: 2024-08-30 00:00:00
---

> 译者注1：Semantic Versioning 2.0.0的原文地址是[http://semver.org](http://semver.org)

## 概要 ##

版本号MAJOR.MINOR.PATCH（主版本号.副版本号.补丁版本号）的递增规则如下：

1. 当以不向后兼容的方式，变更API时，递增主版本号。
2. 当以向后兼容的方式，增加功能时，递增副版本号。
3. 当以向后兼容的方式，修正BUG时，递增补丁版本号。

预发布信息和构建元数据可以作为附加标签，扩展MAJOR.MINOR.PATCH（主版本号.副版本号.补丁版本号）的格式。

## 引言 ##

在软件开发管理的世界里，有一个可怕的地方叫做“依赖关系地狱”。当你的系统越来越大，集成了更多的包，你就会深刻的认识到自己的卑微和渺小。直到有一天，你在这个坑里彻底绝望。

系统依赖的模块发布新版本，就成了噩梦。如果依赖关系的规定过于严格，会遇到一个版本依赖关系的死结（升级一个依赖包之前，必须升级完所有的依赖包）。如果依赖关系规定的太松散，版本依赖关系的混乱就会成为你的切肤之痛（假定你的版本兼容性很重要）。当版本依赖关系的死结、混乱，让你不能轻松、安全的向前迁移项目的时，你就坠入了“依赖关系地狱”。

为了解决这个问题，我提出了一套简单的规则和要求，决定版本号如何分配和递增。这些规则都是基于（但不限于）业界早已存在的流行做法。使用此制度的软件必须声明一个公共API，可以在代码内部声明，也可以严格地写入文档中，但必须是清晰而准确的。一旦确定了公共API，都必须通过明确的版本号递增，来表明系统所做的变更。认真考虑一下X.Y.Z（主版本号.副版本号.补丁版本号）的版本格式。不影响API的BUG修正,递增补丁版本号。向后兼容API的功能新增或变更，递增副版本号。不向后兼容的API变更，递增主版本号。

我把这个制度称为“语义化版本控制”。在这个方案中，规范了从一个版本到下一个版本的版本号，规范了更改版本号传达源代码意图的方法，以及源代码做了什么样的修改。

## 语义化版本控制规范（SemVer） ##

在本文档中，对关键词（"MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL"）的使用，遵循[RFC2119标准](http://tools.ietf.org/html/rfc2119)的规范。

> 译者注2：RFC2119标准规范了表示“要求”（Requirement）的动词涵义。关于RFC2119标准可以参考《[RFC2119 中文版-RFC文档用于指出要求级别的关键字](http://blog.csdn.net/bryangg/article/details/2443488)》。

1. 使用语义化版本控制的软件必须（MUST）声明一个公共的API。这个API可以在源代码的内部声明，也可以在文档中严格的定义。无论怎么做，都应该是清晰而全面的。
2. 一个标准的版本号必须（MUST）是X.Y.Z的形式。其中的X、Y和Z都要是正整数，并且禁止（MUST NOT）包含前导零。X是主版本号，Y是副版本号，Z是补丁版本号。每个元素数字的递增，必须（MUST）是1。例如：`1.9.0 -> 1.10.0 -> 1.110`
3. 一旦发布一个包的版本，该版本的内容禁止（MUST NOT）再做任何修改。任何的修改都必须（MUST）发布一个新的版本。
4. 主版本0（0.y.z）用于初始开发。此时的公共API随时都可能会改动，是不稳定的。
5. 在1.0.0版本中，公共API作出正式的定义。后续的版本号变更，都决定于公共API是否变更，以及如何变更。
6. 以向后兼容的方式修正BUG时，必须（MUST）递增补丁版本号Z(x.y.Z | x > 0)。BUG修正的定义，是在源代码内部修正错误的行为。
7. 当以向后兼容的方式变更公共API时，或者公共API中原有的功能标记为“不建议使用（deprecated）”时，必须（MUST）递增副版本号Y(x.Y.z | x > 0 )。源代码内部大量增加、修改功能时，也可以（MAY）递增副版本号。副版本号的递增可以（MAY）包括补丁版本的更新内容。副版本号递增后，补丁版本号必须（MUST）重置为0。
8. 当以不向后兼容性的方式，变更公共API时，必须（MUST）递增主版本号X(X.y.z | X > 0)，可以（MAY）包含副版本和补丁版本级别的变更。主版本递增后，副版本号和补丁版本号必须（MUST）重置为0。
9. 预发布的版本号，可以（MAY）在补丁版本号后面，添加一个破折号和一系列被点分割的标识符。这些标识符必须（MUST）由ASCII码中的字母和数字以及连字符[0-9A-Za-z-]组成。标识符禁止（MUST NOT）为空。数字禁止（MUST NOT）包含前导0。预发布版本号的优先级比正常的版本号低。预发布版本号表示该版本是不稳定的，可能无法达到其指明的正常版本号的兼容性预期。例如：`1.0.0-alpha, 1.0.0-alpha.1, 1.0.0-0.3.7, 1.0.0-x.7.z.92`。
10. 构建的元数据，可以（MAY）在补丁版本号或预发布版本号后面，添加一个加号和一系列由连字符分隔的标示符组成。这些标识符必须（MUST）由ASCII码中的字母和数字以及连字符[0-9A-Za-z-]组成。标识符禁止（MUST NOT）为空。在确定版本号的优先级时，构建元数据应该（SHOULD）被忽略。因此，如果两个版本号的差异，仅仅在于构建元数据，就视为具有相同的优先级。例如：`1.0.0-alpha+001, 1.0.0+20130313144700, 1.0.0-beta+exp.sha.5114f85`。
11. 优先级是指在排序时，版本号之间如何进行比较。优先级必须（MUST）是，根据版本号按照主版本号、副版本号、补丁版本号和预发布标识的顺序进行计算产生的（构建元数据不参与优先级的比较）。优先级总是从左到右的，依次比较主版本号、副版本号、补丁版本号的数字大小。例如：`1.0.0 < 2.0.0 < 2.1.0 < 2.1.1`。在主版本号、副版本号、补丁版本号都相同时，预发布版本号的优先级低于正常版本号。例如：`1.0.0-alpha < 1.0.0`。两个预发布版本号的主版本号、副版本号、补丁版本号都相同时，优先级必须（MUST）从左至右的比较由点分隔的标识符，直到发现差异。标识符仅由数字组成的，比较数字的大小。标识符包含字母或连字符的，按照ASCII码的顺序进行比较。数字标识符总是小于非数字标识符。如果前面所有的标识符都是相同的，版本号中预发布字段较长的，优先级较高。例如：`1.0.0-alpha < 1.0.0-alpha.1 < 1.0.0-alpha.beta < 1.0.0-beta < 1.0.0-beta.2 < 1.0.0-beta.11 < 1.0.0-rc.1 < 1.0.0`。

## 为什么要使用语义化版本控制 ##

语义化版本控制并不新鲜，也不是一个革命性的想法。事实上，你可能做了很多，已经完成了这件事。问题是完成并不等于极致。如果不符合某种正式的规范，版本号在依赖关系管理上基本没有什么用处。给上述想法起个名字，做出清晰的定义，就很容易向软件用户传达你的意图。一旦这些意图是明确的，一个灵活的（但也不能太灵活）依赖关系管理规范，就流畅的运转起来了。

举一个简单的例子，说明语义化版本控制如何把你从“依赖关系地狱”中拯救出来。设想一个叫“消防车”的库，依赖一个使用语义化版本控制的包，名叫“梯子”。“消防车”刚刚生产出来的时候，梯子的版本号是3.1.0。由于“消防车”使用了在3.1.0版本才开始提供的一些功能，你就可以放心地指定依赖的“梯子”的版本大于等于3.1.0，但低于4.0.0。现在，当“梯子”有3.1.1和3.2.0的版本可用时，就可以更新到你的包管理系统，并知道他们将与当前依赖的软件兼容。

作为一个负责任开发者，你当然会验证任何包所标榜的新功能。现实世界可是一个鱼龙混杂的地方，做什么事情都可以，但要警惕。你可以让语义化版本控制，给你提供一个稳健的方式来发布和升级包，不必再被迫为使用依赖包的新版本而反复折腾，为你节省时间，减少麻烦。

如果这一切听起来还不错，你需要做的所有事情，就是开始声明你正在使用语义化版本控制，并遵循其规则。欢迎你在README文档中链接这个网站(译者注3)，让更多的人知道这个规则，并从中受益。

> 译者注3：原文中提到的网站是指[http://semver.org](http://semver.org)。

## 常见问题 ##

### 在0.y.z的初始开发阶段，我应该怎么处理我的修订？ ###

最简单的做法就是从0.1.0版本开始你的初始开发，在后续的发布中递增副版本号。

### 我怎么知道什么时候发布1.0.0版本？ ###

如果你的软件在产品环境中使用，它可能已经应该是1.0.0。如果的软件用户，已经开始依赖一个稳定的API，应该是1.0.0。如果你担心很多向后兼容的问题，应该已经是1.0.0。

### 这难道不会妨碍快速开发和快速迭代吗？ ###

所有在快速开发和快速迭代的时候，主版本号都是0。如果你的API每天都在改变，仍然应该会在版本0.y.z阶段。或者，在一个单独的开发分支中，开展下一个主版本的开发工作。

### 公共API如果连最微小的向后不兼容的改变，都需要一个主版本号的冲击，会不会太迅速的就到了42.0.0版本？ ###

这是一个负责任的开发问题，也是一个有远见的问题。在有大量依赖关系管理的软件中，不应该轻率的推出不兼容的改变。升级所必须付出的成本是有意义的。发布冲击主版本号的不兼容改变，意味着你深思熟虑过将要发生的震荡，有磕碰主要版本发布不兼容的改变意味着你想通过你的变化的影响，并评估过所涉及的投入产出比。

### 记录整个公共API是​太辛苦了！ ###

为预计会给其他人使用的软件，提供适当的文档，是一个专业开发者的责任。控制软件的复杂性，是保持项目高效的一个非常重要的组成部分。如果没有谁知道如何使用你的软件，或者用什么方法可以安全地调用，保持项目高效是很难做到的。从长远来看，采用语义化版本控制，坚定的看守一个定义良好的公共API，可以让每一个人都能流畅的做每一件事。

### 如果不小心，使用副版本号发布了一个不能向后兼容的变更，该怎么办啊？ ###

一旦意识到已经破坏了语义化版本规范，要发布修正了问题，并且恢复向后兼容的新的主版本号。即便是这样，这也是一次不能接受的版本发布。如果方便，一定要记录有问题的版本，并通知你的用户，让他们意识到问题的存在。

### 如果更新了自己的依赖  但不改变公共API，版本号应该怎么规划？ ###

这是向后兼容的，因为不影响公共API。如果软件与你的包有相同的依赖，有可能会有自己的依赖关系规范，而且软件的作者也会关切任何有可能的冲突。确定这个依赖变更是补丁级别的，还是副版本级别的，取决于你更新你的依赖是要修正一个BUG，还要要引入一组新的功能。我们通常期待是后者，哪怕增加大量的代码。因为在这种情况下，就显然是一个副版本级别的变更了。

### 如果在不经意间，以不符合版本规范的方式，改了变公共API怎么办（也就是，在一个补丁版本的发布中，源代码错误的引入了一个主版本级别的重大变更）？ ###

那你就发挥出色的判断能力吧。如果拥有大量的忠实拥趸，愿意委曲求全的回到公共API的预期轨道上来，那你最好发布一个主版本。哪怕没什么修改，严格的说也只是补丁级别的。请记住，语义化版本控制是通过版本号的变更来传达意图的。如果变更对你的用户很重要，就使用版本号通知他们。

### 我应该如何处理以后要废弃的功能？ ###

废弃某些功能，在软件开发中很常见的，通常也会推动软件向前发展。

在废弃公共API的一部分时，你要做两件事：

1. 更新你的文档，让用户知道这些变更。
2. 发布包含废弃功能的副版本。

你在主版本中彻底删除这些功能之前，至少要在发布的一个副版本中包含这些功能，好让用户平滑的迁移到新的API上来。

### 在语义化版本控制中，版本号的长度有限制吗？ ###

没有什么限制，但是你最好保持理智。比如，一个版本号有255个字符，就有点出格了。另外，在开发团队中具体的制度可能会有一些自定义的长度限制。

## 关于作者 ##

语义化版本控制规范是由[Tom Preston-Werner](http://tom.preston-werner.com/)编写的。他是[Gravatars](http://en.gravatar.com/) 的创始人，也是[GitHub](https://github.com/)的共同创办人。

如果你有一些反馈，可以在[GitHub上提交一个问题](https://github.com/mojombo/semver/issues)。

## 许可证 ##

[知识共享 - CC 3.0](http://creativecommons.org/licenses/by/3.0/)

## 参考资料 ##

- [语义化版本号 Sematic Versioning(http://www.fallhunter.com/p/10555)](http://www.fallhunter.com/p/10555)
- [Semantic Versioning 语义化版本号(http://blog.neekey.me/blog/2012/02/27/semantic-versioning/)](http://blog.neekey.me/blog/2012/02/27/semantic-versioning/)
- [RFC2119 中文版-RFC文档用于指出要求级别的关键字](http://blog.csdn.net/bryangg/article/details/2443488)