---
title:  "前端异步编程的来龙去脉"
date: 2018-08-10
updated: 2024-09-02
---

## 这个异步的世界 ##

很多其他语言的工程师，总是讥讽`javascript`中的异步编程。也有很多`javascript`工程师，缺乏道路自信，自甘堕落，在编程中以消灭异步模式为能事，异步的做法、异步的写法。

我们的异步编程，真的就矮人一等吗？回答不但是NO，我们还要指着这些人说：图样图森破。

平时，我们不是撸码，就是打游戏。有点钱的宅男宅女们，或许会炒股买比特币甘当韭菜，得了一种医学上被称为投资者幻觉的精神疾病。同学们，这是低级趣味，我们除眼前的苟且，还有诗和远方。让我们睁开眼睛看一看真实的世界吧。

比如，我是说比如，我老婆不在北京。在这里，大家可以自我代入一下，有老婆的想老婆，有老公的想老公。没有结婚的，或者隐婚一族，想一想你各位男朋友、女朋友。单身狗们嘛，YY一下好了，想一想白雪公主，或者那个骑白马的唐僧。

某一天夜里，电话铃突然响了。老婆说明天要来北京，核查一下我自己在北京有没有胡搞乱搞。

接到电话，正常的我们，大体上会有两种反应。JAVA工程师放下电话，会直奔车站，在出站口苶(nie)呆呆发愣，等着明天下午接站。我们`javascript`工程师当然不会这么二，我们会明天下午提前到出站口，老婆一出来就抱住他痛哭，倾诉衷肠。诉说我们如何昨天晚上一接到电话，就马上来车站等着他，觉也没有睡，饭也没有吃，水都没有喝一口，手机也没有带，朋友圈都没有刷。

当然，要说正常，那是作为一个工程师表现成这样是正常的。真实的我不会这样。注意，这里没有复数，是我，不是我们，因为我并不能代表在座诸位。

接完电话，我会面无表情的把电话装进裤兜里，继续灌满电热水壶烧水，水开了以后水壶会咔哒一声响。烧上水后，从冰箱里拿出一碗剩饭，放进微波炉热一下，热好了以后微波炉会嘀嘀响。完了以后把半个多月没有洗的衣服塞进洗衣机，自动洗好甩干放水，然后嘀嘀响。洗衣服的这工夫得擦擦地，擦完地吃饭，吃完饭喝一杯水睡觉。第二天闹钟响，起床，该干嘛干嘛，该上班上班。老婆车进北京，过了收费站会给我打电话，我就去车站。在附近随便逛逛，毕竟平时都见不到北京的太阳。出了检票口，我老婆会再给我打一个电话，我就慢吞吞的踱到出站口去接他。

当然，你可以说。第一种，同步的做法，表现出了一种痴情，一种童话般的爱情世界。第二种，异步的做法，粘呼呼的都是油腻，一股子庸俗的人间烟火气。但是，不管怎么说，作为一个中年油腻男，我把图样图森破这句话扔给你，你没有意见吧。

## 言归正传 ##

我们已经认识到了，这个世界本来就是异步的。这个认识很重要。

我们在撸码的时候，最上乘的方法论，就是遵照这个世界自己本来的样子编程。所谓道法自然，如其本来。

那么好，我们言归正传，正式讨论编程中异步的处理。

在讨论异步编程的方案时，我们在这里只讨论方案的轮廓和概况，不讨论具体的设计细节和实现细节。因为这些细节 每一个都需要用一篇长文，或者几篇长文来处理，在我们这里装不下。

在JS中，如何进行异步编程？一些前端新秀，甚至一些后端老油条，都知道了`ES6`标准中有一个海藏神珍，叫`Promise`。

对这样的人，我们要大声对他们说，同志哥，你out了。在日新月异的前端世界里，我们现在处理异步问题，已经使用`ES7`的`async-await`方案了。

这个方案长成这个样子：

    async function get(){
        let result = await fetch();
        console.log(result);
        return result;
    }

这个方案似乎看上去消灭了异步，起码消灭了异步的写法。

但是这个写法，让很多略有经验的前端工程师疑窦丛生。疑问有二：

- 这个变量赋值是异步的，还是同步的？
- 在这个讨论的上下文中，大家很容易可以猜到是异步的。问题是，在这个同步的写法下，掩盖了什么细节，有什么坑没有？

经书有云，涉水道路漫水桥，虽有老司机，不敢径过。

先提出一个问题，留下伏笔。在这个方法的赋值过程中，`javascript`引擎可以不可以同时并发做其他事情？

我们用`Promise`方案重写一遍，如下：

    function get(){
        return fetch().then((result) => {
            console.log(result);
            return result;
        });
    }

用更老的`callback`方案重写一遍，如下：

    function get(done){
        fetch(function(err, result){
            console.log(result);
            done(null, result);
        });
    }

关于`Promise`方案和`callback`方案的进一步讨论，后文再行展开。

`async-await`方案的本质实现是`Promise`方案，只不过是`javascript`引擎替你做了这件事。

需要说明一下的是，`async-await`方案只是`ES6`中`Generator-yield`方案的语法糖而已，本质上是一毛一样的。鉴于`async`只是取代了星号，`await`只是取代了`yield`，而且`async-await`方案可读性更好，这里就不再展开讨论`Generator-yield`方案。

我主张，前端新司机不急于先使用`async-await`方案，可以大量使用`Promise`方案。因为`async-await`在同步的形式下，掩盖了很多异步的内容，一不留神就会踩到坑、崴到脚。

异步是这个世界的本质，需要用心的去理解和体会。而名实相副，形式和内容保持某种一致的方案，显然更适合当新司机的教练车。

当然，有些峨冠博带奇装异服的老司机，注意，这里不是说生理年龄老，而是说心理年龄老，拢一拢没有几根的油腻头发，睁开满是眼屎的眼睛，睡眼惺忪的争辩道：“我们是年青人，要和最新的语言标准保持一致，要使用最前沿的技术方案”。

没错，`async-await`这种猥琐的解决方案，就是给你们这些猥琐的老司机提供的，大量使用就好了。总踩着油门也挺累的，定速巡航很不错，蛮好用。毕竟，你们这些老司机，即便开车睡着了，遇到异常时，也能在睡梦中一脚刹车踩死。

最后再看一组代码：

    async function get(){
        try{
            let result1 = await fetch1();
            let result2 = await fetch2();
            let result3 = await fetch3();
            let result4 = await fetch4();
            let result5 = await fetch5();
            console.log(result1, result2, result3, result4, result5);
        }catch(ex){
        }
    }

这组代码疑问有二：

- 发生了异常怎么办？同步过程中、异步过程中的异常和回调中的异常地位相同吗？我想区分处理这三种异常怎么办？
- 这几个方法是顺序依次执行的，没问题。问题是，很多时候，我们并不关心执行的顺序，反正都执行完了告诉我，我做我想做的事情就好。

如上代码处理异常是可以的，主要毛病还是同步的形式掩盖的异步的内容，新司机容易踩坑。比如，我不管发生了什么异常，总是执行某些代码，怎么办？当然可以用`finally`处理，问题是这个代码执行的时间点在什么时候？

使用`Promise.all`处理并发问题当然是可以的，但是`Promise`对象作为`javascript`王国中的当朝一品大员，难道就只是负责站在门口计数，等常委们到齐了喊主席来开会吗？这样的工作虽然挺重要，但一介哨兵足矣。

## 王国一品 ##

`javascript`王国的一品大员有很多，这里的主角是`Promise`对象。所以，什么是`Promise`对象呢？

先看一下Promise对象的方法：

- Promise.prototype.catch()
- Promise.prototype.finally()
- Promise.prototype.then()
- Promise.all()
- Promise.race()
- Promise.reject()
- Promise.resolve()

其中，实例方法有3个，静态方法有4个。

对`Promise`对象给一个定义很简单，网上多的是。我们主要从哪个特征是`Promise`对象的本质特征来看待这个问题，从这个角度来讨论。

什么是本质特征呢？就是说，一个对象具有某种特征，他就是`Promise`对象。当把这种特征抽离后，他就不称为`Promise`对象。我们认为，这种特征就是`Promise`对象的本质特征。

`Promise`对象又被称为`thenable`对象，就是遵循规范实现了`then`方法，是`thenable`接口的一个实例。也就是说，遵循规范实现了`then`方法，是`Promise`对象的本质特征。

在讨论`Promise`对象的本质特征时，我们有必要回顾一下十八层回调地狱。对于前端老帮菜来说，当然是一种缅怀和凭吊。对前端新司机来说，那就像在太湖上的小姑娘黄蓉一样，感慨一下国破家亡的故国情怀也不错。

    step1(function (value1) {
        step2(value1, function(value2) {
            step3(value2, function(value3) {
                step4(value3, function(value4) {
                    step5(value4, function(value5) {
                        step6(value5, function(value6) {
                            step7(value6, function(value7) {
                                step8(value7, function(value8) {
                                    step9(value8, function(value9) {
                                        step10(value9, function (value10) {
                                            step11(value10, function(value11) {
                                                step12(value11, function(value12) {
                                                    step13(value12, function(value13) {
                                                        step14(value13, function(value14) {
                                                            step15(value14, function(value15) {
                                                                step16(value15, function(value16) {
                                                                    step17(value16, function(value17) {
                                                                        step18(value17, function(value18) {
                                                                            // 地狱不空，誓不成佛
                                                                            console.log(value18);
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });

在历史上，有一位大菩萨，为了超度十八层回调地狱中的前端冤鬼，他说：我与你们立一个约。

处理异步问题时，大家无论什么时候都要遵守一个承诺。当正常执行异步任务后，把返回值传递给then方法的回调函数，任务失败后也要以类似的方式给予明确的回应。而且，一个异步任务要么是一个等待回应的状态，要么是成功，要么就是明确拒绝，此外不能有任何第三条道路可走。

在地狱中，有一只叫尾生的冤鬼说：南无大菩萨，弟子没听明白，求解释。

菩萨说，譬如娑婆世界无限有情众生，今天爱这个，明天爱那个，没有个定性。今天爱，明天不爱，反反覆覆。三角四角有很多，脚踩两只船的也不少。

我在这里定下一个《南海行为准则》。其略曰：别人向你求爱，你可以犹豫也可以考虑考虑。但是如果同意，要给人明确的答复。如果不同意，也要明确的拒绝。不要在那里态度不明半推半就，出了事情报异常。还有就是，同意了就同意，别回头又拒绝。拒绝了就不要再吃回头草，别来回反覆让人心神不宁。约会的时候，别人在等你，你要去就去，不想赴约的话，也给人一个明信。别你又不想去，让人在桥底下干等着。

尾生闻法欢喜，信受奉行。

在这里，有必要对`Promise`对象实例方法和静态方法作一个简要的说明。

实例方法，示例如下：

    function get(){
        try{
            return fetch().then((result) => {
                console.log(result);
                return result;
            }).catch((err) => {
                console.error(err);
            }).finally(() => {
                // 同志，这是我的党费
            });
        }catch(ex){
            // 乍会走到这儿了呢？这不科学啊！
        }
    }

静态方法，简要介绍：

- `Promise.resolve`：遇到心仪的人表白，立马要答应，不想再考虑，但是又不能违了南海菩萨定下的行为准则。
- `Promise.reject`：逻辑同上，只是立马要拒绝。
- `Promise.all`：约几个朋友去K歌，不管先来后到，到齐了K起。到不了的也要电话确认下。
- `Promise.race`：小朋友想出去玩，请示爸妈，有一个人同意就可以出去，有一个人拒绝就玩不成。SO，这个规则告诉我们，想出去玩的话，要先请示最可能同意的那个，想不出去玩的话，要先请求最可能拒绝的那个。当然爸妈里有一个嘴快的，这个策略就破功了。

## 没落的贵族 ##

在异步编程中，回调函数无论如何都是要提及的。其一是因为他功勋卓著的历史地位，其二是因为在编程实务中依然扮演着的重要角色。`Promise`对象的`then`方法接受的参数本身就是一个回调函数。

回调函数在平时编程中用的很多，简单列举如下。

`Promise`对象的`then`方法中的回调：

    fetch().then((data) => {
        console.log(data);
    }).catch((err) => {
        console.error(err);
    }).finally(() => {
        console.log('说完最后一句话');
    });

`Document`事件回调：

    document.querySelector('body').addEventListener('click', function(e){
        console.log(e);
    });

`jQuery ajax`请求的回调

    $.post('', function(res){
        console.log(res);
    });

`Node.js`中的回调

    fs.readFile('/etc/passwd', (err, data) => {
        if (err) throw err;
        console.log(data);
    });

回调函数在`javascript`王国中的重要地位，是由函数在`javascript`王国中一等公民的地位决定的。

函数作为`javascript`语言中的灵魂，是可以脱离肉身而独立存在的。不像在一些弱鸡语言中，方法只能依附于对象存在，不是实例方法，就是静态方法。

我这么说，穿长衫的孔先生就会踱过来争辩，呃。。这个。。。我们强类型语言是世界上最好的语言，怎么能说是弱鸡语言呢？他还会继续说什么不变的形式具有西方逻辑美，等等，一些半懂不懂的话。

这个时候，我就会问他，是七十二般变化的孙悟空法术高强，还是你这种形式不变的肉眼凡胎法术高强？既然不变的形式在你西方逻辑中那么地位崇高，你西方哲学的起始为什么却是主张世界具有唯一本原的泰勒斯。然后，孔先生嘴里就会继续嘟囔着什么，回到工位埋头写BUG了。

具有七十二般变化的函数，是函数式编程的话题，在这个回调函数的主题里不展开讨论。

说到回调函数，有两个事情非常值得一提。

- `Node.js`给出了回调函数约定，`function(err, data){}`。这个约定给异常以出口，是非常好的最佳实践。
- 流程控制库`Q`、`async`，在属于他们的那个时代，一直都是最火的`NPM`包，可以很好的处理回调函数的依次执行、并发执行，等等流程控制的问题。现在回过头来看，没有`ES`标准中的方案那么简洁流畅，主要是还抱有彻底同步化的邪路思想，所谓炖鱼要炖出牛肉味来，比如异步的循环什么的。不过现在他都实现成了`Promise`。

我们以倒叙的形式，讨论了前端异步编程的来龙去脉。在这里，具体的语法、具体的用法不是那么重要。最重要的是通过讨论，要确立一种信念，一种道路自信。这个世界本来就是异步的，异步编程是人间正道，既不是因循守旧的老路，也不是改旗易帜的邪路。

## 旁门源流 ##

异步编程，从回调函数和流程管理的方案，发展到`Promise`对象和`Generator-yield`方案，再到`ES7`的`async-await`方案，基本上是`javascript`中处理异步问题的正统源流。

除了这一支主流，还有一些旁门。菩提祖师曾对孙悟空说，三百六十旁门，皆可成正果。所以，有必要对异步处理的旁门做个简单介绍。

在这些旁门中，值得介绍的设计模式是观察者模式和中介者模式。常见伎俩如下：

- 钩子回调，早期第三方库常用。常见的生命周期的概念，也可以称为钩子，只不过稍微复杂。
- 事件回调，使用诸如`addEventListener`、`on`等方法注册回调函数，由`dispatchEvent`、`emit`等方法触发事件，向回调函数分发事件数据。
- 发布订阅模式、观察者模式、中介者模式。

前端处理异步编程的这一支源流第三方库有很多，比如`RxJS`。

## 参考链接 ##

- [阮一峰：async 函数的含义和用法](http://www.ruanyifeng.com/blog/2015/05/async.html)
- [阮一峰：Javascript异步编程的4种方法](http://www.ruanyifeng.com/blog/2012/12/asynchronous%EF%BC%BFjavascript.html)
- [ES6系列文章 异步神器async-await](https://segmentfault.com/a/1190000011526612)
- [ECMAScript® 2015 Language Specification](http://www.ecma-international.org/ecma-262/6.0/index.html)
- [ECMAScript® 2016 Language Specification](http://www.ecma-international.org/ecma-262/7.0/index.html)
- [ECMAScript® 2017 Language Specification (ECMA-262, 8th edition, June 2017)](http://www.ecma-international.org/ecma-262/8.0/index.html)
- [Status, process, and documents for ECMA262](https://github.com/tc39/ecma262)
- [Promises](https://www.promisejs.org/)
- [Promises/A](http://wiki.commonjs.org/wiki/Promises/A)
- [Promises/A+](https://promisesaplus.com/)
- [Generator - JavaScript - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator)
- [Promise - JavaScript - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [RxJS 中文文档](https://cn.rx.js.org/)
- [kriskowal/q](http://documentup.com/kriskowal/q/)
- [caolan/async](http://caolan.github.io/async/)
