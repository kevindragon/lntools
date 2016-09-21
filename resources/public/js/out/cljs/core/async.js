// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args29474 = [];
var len__26140__auto___29480 = arguments.length;
var i__26141__auto___29481 = (0);
while(true){
if((i__26141__auto___29481 < len__26140__auto___29480)){
args29474.push((arguments[i__26141__auto___29481]));

var G__29482 = (i__26141__auto___29481 + (1));
i__26141__auto___29481 = G__29482;
continue;
} else {
}
break;
}

var G__29476 = args29474.length;
switch (G__29476) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29474.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async29477 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29477 = (function (f,blockable,meta29478){
this.f = f;
this.blockable = blockable;
this.meta29478 = meta29478;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29479,meta29478__$1){
var self__ = this;
var _29479__$1 = this;
return (new cljs.core.async.t_cljs$core$async29477(self__.f,self__.blockable,meta29478__$1));
});

cljs.core.async.t_cljs$core$async29477.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29479){
var self__ = this;
var _29479__$1 = this;
return self__.meta29478;
});

cljs.core.async.t_cljs$core$async29477.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29477.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29477.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async29477.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async29477.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29478","meta29478",-1437889921,null)], null);
});

cljs.core.async.t_cljs$core$async29477.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29477.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29477";

cljs.core.async.t_cljs$core$async29477.cljs$lang$ctorPrWriter = (function (this__25671__auto__,writer__25672__auto__,opt__25673__auto__){
return cljs.core._write.call(null,writer__25672__auto__,"cljs.core.async/t_cljs$core$async29477");
});

cljs.core.async.__GT_t_cljs$core$async29477 = (function cljs$core$async$__GT_t_cljs$core$async29477(f__$1,blockable__$1,meta29478){
return (new cljs.core.async.t_cljs$core$async29477(f__$1,blockable__$1,meta29478));
});

}

return (new cljs.core.async.t_cljs$core$async29477(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args29486 = [];
var len__26140__auto___29489 = arguments.length;
var i__26141__auto___29490 = (0);
while(true){
if((i__26141__auto___29490 < len__26140__auto___29489)){
args29486.push((arguments[i__26141__auto___29490]));

var G__29491 = (i__26141__auto___29490 + (1));
i__26141__auto___29490 = G__29491;
continue;
} else {
}
break;
}

var G__29488 = args29486.length;
switch (G__29488) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29486.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args29493 = [];
var len__26140__auto___29496 = arguments.length;
var i__26141__auto___29497 = (0);
while(true){
if((i__26141__auto___29497 < len__26140__auto___29496)){
args29493.push((arguments[i__26141__auto___29497]));

var G__29498 = (i__26141__auto___29497 + (1));
i__26141__auto___29497 = G__29498;
continue;
} else {
}
break;
}

var G__29495 = args29493.length;
switch (G__29495) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29493.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args29500 = [];
var len__26140__auto___29503 = arguments.length;
var i__26141__auto___29504 = (0);
while(true){
if((i__26141__auto___29504 < len__26140__auto___29503)){
args29500.push((arguments[i__26141__auto___29504]));

var G__29505 = (i__26141__auto___29504 + (1));
i__26141__auto___29504 = G__29505;
continue;
} else {
}
break;
}

var G__29502 = args29500.length;
switch (G__29502) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29500.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29507 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29507);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29507,ret){
return (function (){
return fn1.call(null,val_29507);
});})(val_29507,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args29508 = [];
var len__26140__auto___29511 = arguments.length;
var i__26141__auto___29512 = (0);
while(true){
if((i__26141__auto___29512 < len__26140__auto___29511)){
args29508.push((arguments[i__26141__auto___29512]));

var G__29513 = (i__26141__auto___29512 + (1));
i__26141__auto___29512 = G__29513;
continue;
} else {
}
break;
}

var G__29510 = args29508.length;
switch (G__29510) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29508.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25980__auto___29515 = n;
var x_29516 = (0);
while(true){
if((x_29516 < n__25980__auto___29515)){
(a[x_29516] = (0));

var G__29517 = (x_29516 + (1));
x_29516 = G__29517;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__29518 = (i + (1));
i = G__29518;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async29522 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29522 = (function (alt_flag,flag,meta29523){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta29523 = meta29523;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29524,meta29523__$1){
var self__ = this;
var _29524__$1 = this;
return (new cljs.core.async.t_cljs$core$async29522(self__.alt_flag,self__.flag,meta29523__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async29522.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29524){
var self__ = this;
var _29524__$1 = this;
return self__.meta29523;
});})(flag))
;

cljs.core.async.t_cljs$core$async29522.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29522.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async29522.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29522.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29522.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29523","meta29523",1595565300,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async29522.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29522.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29522";

cljs.core.async.t_cljs$core$async29522.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25671__auto__,writer__25672__auto__,opt__25673__auto__){
return cljs.core._write.call(null,writer__25672__auto__,"cljs.core.async/t_cljs$core$async29522");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async29522 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29522(alt_flag__$1,flag__$1,meta29523){
return (new cljs.core.async.t_cljs$core$async29522(alt_flag__$1,flag__$1,meta29523));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async29522(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async29528 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29528 = (function (alt_handler,flag,cb,meta29529){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta29529 = meta29529;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29530,meta29529__$1){
var self__ = this;
var _29530__$1 = this;
return (new cljs.core.async.t_cljs$core$async29528(self__.alt_handler,self__.flag,self__.cb,meta29529__$1));
});

cljs.core.async.t_cljs$core$async29528.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29530){
var self__ = this;
var _29530__$1 = this;
return self__.meta29529;
});

cljs.core.async.t_cljs$core$async29528.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29528.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async29528.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29528.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async29528.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29529","meta29529",2070060108,null)], null);
});

cljs.core.async.t_cljs$core$async29528.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29528.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29528";

cljs.core.async.t_cljs$core$async29528.cljs$lang$ctorPrWriter = (function (this__25671__auto__,writer__25672__auto__,opt__25673__auto__){
return cljs.core._write.call(null,writer__25672__auto__,"cljs.core.async/t_cljs$core$async29528");
});

cljs.core.async.__GT_t_cljs$core$async29528 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29528(alt_handler__$1,flag__$1,cb__$1,meta29529){
return (new cljs.core.async.t_cljs$core$async29528(alt_handler__$1,flag__$1,cb__$1,meta29529));
});

}

return (new cljs.core.async.t_cljs$core$async29528(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29531_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29531_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29532_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29532_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25065__auto__ = wport;
if(cljs.core.truth_(or__25065__auto__)){
return or__25065__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29533 = (i + (1));
i = G__29533;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25065__auto__ = ret;
if(cljs.core.truth_(or__25065__auto__)){
return or__25065__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__25053__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25053__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25053__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__26147__auto__ = [];
var len__26140__auto___29539 = arguments.length;
var i__26141__auto___29540 = (0);
while(true){
if((i__26141__auto___29540 < len__26140__auto___29539)){
args__26147__auto__.push((arguments[i__26141__auto___29540]));

var G__29541 = (i__26141__auto___29540 + (1));
i__26141__auto___29540 = G__29541;
continue;
} else {
}
break;
}

var argseq__26148__auto__ = ((((1) < args__26147__auto__.length))?(new cljs.core.IndexedSeq(args__26147__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26148__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29536){
var map__29537 = p__29536;
var map__29537__$1 = ((((!((map__29537 == null)))?((((map__29537.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29537.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29537):map__29537);
var opts = map__29537__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29534){
var G__29535 = cljs.core.first.call(null,seq29534);
var seq29534__$1 = cljs.core.next.call(null,seq29534);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29535,seq29534__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args29542 = [];
var len__26140__auto___29592 = arguments.length;
var i__26141__auto___29593 = (0);
while(true){
if((i__26141__auto___29593 < len__26140__auto___29592)){
args29542.push((arguments[i__26141__auto___29593]));

var G__29594 = (i__26141__auto___29593 + (1));
i__26141__auto___29593 = G__29594;
continue;
} else {
}
break;
}

var G__29544 = args29542.length;
switch (G__29544) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29542.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29429__auto___29596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29429__auto___29596){
return (function (){
var f__29430__auto__ = (function (){var switch__29317__auto__ = ((function (c__29429__auto___29596){
return (function (state_29568){
var state_val_29569 = (state_29568[(1)]);
if((state_val_29569 === (7))){
var inst_29564 = (state_29568[(2)]);
var state_29568__$1 = state_29568;
var statearr_29570_29597 = state_29568__$1;
(statearr_29570_29597[(2)] = inst_29564);

(statearr_29570_29597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29569 === (1))){
var state_29568__$1 = state_29568;
var statearr_29571_29598 = state_29568__$1;
(statearr_29571_29598[(2)] = null);

(statearr_29571_29598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29569 === (4))){
var inst_29547 = (state_29568[(7)]);
var inst_29547__$1 = (state_29568[(2)]);
var inst_29548 = (inst_29547__$1 == null);
var state_29568__$1 = (function (){var statearr_29572 = state_29568;
(statearr_29572[(7)] = inst_29547__$1);

return statearr_29572;
})();
if(cljs.core.truth_(inst_29548)){
var statearr_29573_29599 = state_29568__$1;
(statearr_29573_29599[(1)] = (5));

} else {
var statearr_29574_29600 = state_29568__$1;
(statearr_29574_29600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29569 === (13))){
var state_29568__$1 = state_29568;
var statearr_29575_29601 = state_29568__$1;
(statearr_29575_29601[(2)] = null);

(statearr_29575_29601[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29569 === (6))){
var inst_29547 = (state_29568[(7)]);
var state_29568__$1 = state_29568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29568__$1,(11),to,inst_29547);
} else {
if((state_val_29569 === (3))){
var inst_29566 = (state_29568[(2)]);
var state_29568__$1 = state_29568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29568__$1,inst_29566);
} else {
if((state_val_29569 === (12))){
var state_29568__$1 = state_29568;
var statearr_29576_29602 = state_29568__$1;
(statearr_29576_29602[(2)] = null);

(statearr_29576_29602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29569 === (2))){
var state_29568__$1 = state_29568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29568__$1,(4),from);
} else {
if((state_val_29569 === (11))){
var inst_29557 = (state_29568[(2)]);
var state_29568__$1 = state_29568;
if(cljs.core.truth_(inst_29557)){
var statearr_29577_29603 = state_29568__$1;
(statearr_29577_29603[(1)] = (12));

} else {
var statearr_29578_29604 = state_29568__$1;
(statearr_29578_29604[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29569 === (9))){
var state_29568__$1 = state_29568;
var statearr_29579_29605 = state_29568__$1;
(statearr_29579_29605[(2)] = null);

(statearr_29579_29605[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29569 === (5))){
var state_29568__$1 = state_29568;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29580_29606 = state_29568__$1;
(statearr_29580_29606[(1)] = (8));

} else {
var statearr_29581_29607 = state_29568__$1;
(statearr_29581_29607[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29569 === (14))){
var inst_29562 = (state_29568[(2)]);
var state_29568__$1 = state_29568;
var statearr_29582_29608 = state_29568__$1;
(statearr_29582_29608[(2)] = inst_29562);

(statearr_29582_29608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29569 === (10))){
var inst_29554 = (state_29568[(2)]);
var state_29568__$1 = state_29568;
var statearr_29583_29609 = state_29568__$1;
(statearr_29583_29609[(2)] = inst_29554);

(statearr_29583_29609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29569 === (8))){
var inst_29551 = cljs.core.async.close_BANG_.call(null,to);
var state_29568__$1 = state_29568;
var statearr_29584_29610 = state_29568__$1;
(statearr_29584_29610[(2)] = inst_29551);

(statearr_29584_29610[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29429__auto___29596))
;
return ((function (switch__29317__auto__,c__29429__auto___29596){
return (function() {
var cljs$core$async$state_machine__29318__auto__ = null;
var cljs$core$async$state_machine__29318__auto____0 = (function (){
var statearr_29588 = [null,null,null,null,null,null,null,null];
(statearr_29588[(0)] = cljs$core$async$state_machine__29318__auto__);

(statearr_29588[(1)] = (1));

return statearr_29588;
});
var cljs$core$async$state_machine__29318__auto____1 = (function (state_29568){
while(true){
var ret_value__29319__auto__ = (function (){try{while(true){
var result__29320__auto__ = switch__29317__auto__.call(null,state_29568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29320__auto__;
}
break;
}
}catch (e29589){if((e29589 instanceof Object)){
var ex__29321__auto__ = e29589;
var statearr_29590_29611 = state_29568;
(statearr_29590_29611[(5)] = ex__29321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29612 = state_29568;
state_29568 = G__29612;
continue;
} else {
return ret_value__29319__auto__;
}
break;
}
});
cljs$core$async$state_machine__29318__auto__ = function(state_29568){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29318__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29318__auto____1.call(this,state_29568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29318__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29318__auto____0;
cljs$core$async$state_machine__29318__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29318__auto____1;
return cljs$core$async$state_machine__29318__auto__;
})()
;})(switch__29317__auto__,c__29429__auto___29596))
})();
var state__29431__auto__ = (function (){var statearr_29591 = f__29430__auto__.call(null);
(statearr_29591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29429__auto___29596);

return statearr_29591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29431__auto__);
});})(c__29429__auto___29596))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__29800){
var vec__29801 = p__29800;
var v = cljs.core.nth.call(null,vec__29801,(0),null);
var p = cljs.core.nth.call(null,vec__29801,(1),null);
var job = vec__29801;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29429__auto___29987 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29429__auto___29987,res,vec__29801,v,p,job,jobs,results){
return (function (){
var f__29430__auto__ = (function (){var switch__29317__auto__ = ((function (c__29429__auto___29987,res,vec__29801,v,p,job,jobs,results){
return (function (state_29808){
var state_val_29809 = (state_29808[(1)]);
if((state_val_29809 === (1))){
var state_29808__$1 = state_29808;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29808__$1,(2),res,v);
} else {
if((state_val_29809 === (2))){
var inst_29805 = (state_29808[(2)]);
var inst_29806 = cljs.core.async.close_BANG_.call(null,res);
var state_29808__$1 = (function (){var statearr_29810 = state_29808;
(statearr_29810[(7)] = inst_29805);

return statearr_29810;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29808__$1,inst_29806);
} else {
return null;
}
}
});})(c__29429__auto___29987,res,vec__29801,v,p,job,jobs,results))
;
return ((function (switch__29317__auto__,c__29429__auto___29987,res,vec__29801,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29318__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29318__auto____0 = (function (){
var statearr_29814 = [null,null,null,null,null,null,null,null];
(statearr_29814[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29318__auto__);

(statearr_29814[(1)] = (1));

return statearr_29814;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29318__auto____1 = (function (state_29808){
while(true){
var ret_value__29319__auto__ = (function (){try{while(true){
var result__29320__auto__ = switch__29317__auto__.call(null,state_29808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29320__auto__;
}
break;
}
}catch (e29815){if((e29815 instanceof Object)){
var ex__29321__auto__ = e29815;
var statearr_29816_29988 = state_29808;
(statearr_29816_29988[(5)] = ex__29321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29989 = state_29808;
state_29808 = G__29989;
continue;
} else {
return ret_value__29319__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29318__auto__ = function(state_29808){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29318__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29318__auto____1.call(this,state_29808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29318__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29318__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29318__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29318__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29318__auto__;
})()
;})(switch__29317__auto__,c__29429__auto___29987,res,vec__29801,v,p,job,jobs,results))
})();
var state__29431__auto__ = (function (){var statearr_29817 = f__29430__auto__.call(null);
(statearr_29817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29429__auto___29987);

return statearr_29817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29431__auto__);
});})(c__29429__auto___29987,res,vec__29801,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29818){
var vec__29819 = p__29818;
var v = cljs.core.nth.call(null,vec__29819,(0),null);
var p = cljs.core.nth.call(null,vec__29819,(1),null);
var job = vec__29819;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__25980__auto___29990 = n;
var __29991 = (0);
while(true){
if((__29991 < n__25980__auto___29990)){
var G__29822_29992 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29822_29992) {
case "compute":
var c__29429__auto___29994 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29991,c__29429__auto___29994,G__29822_29992,n__25980__auto___29990,jobs,results,process,async){
return (function (){
var f__29430__auto__ = (function (){var switch__29317__auto__ = ((function (__29991,c__29429__auto___29994,G__29822_29992,n__25980__auto___29990,jobs,results,process,async){
return (function (state_29835){
var state_val_29836 = (state_29835[(1)]);
if((state_val_29836 === (1))){
var state_29835__$1 = state_29835;
var statearr_29837_29995 = state_29835__$1;
(statearr_29837_29995[(2)] = null);

(statearr_29837_29995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29836 === (2))){
var state_29835__$1 = state_29835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29835__$1,(4),jobs);
} else {
if((state_val_29836 === (3))){
var inst_29833 = (state_29835[(2)]);
var state_29835__$1 = state_29835;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29835__$1,inst_29833);
} else {
if((state_val_29836 === (4))){
var inst_29825 = (state_29835[(2)]);
var inst_29826 = process.call(null,inst_29825);
var state_29835__$1 = state_29835;
if(cljs.core.truth_(inst_29826)){
var statearr_29838_29996 = state_29835__$1;
(statearr_29838_29996[(1)] = (5));

} else {
var statearr_29839_29997 = state_29835__$1;
(statearr_29839_29997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29836 === (5))){
var state_29835__$1 = state_29835;
var statearr_29840_29998 = state_29835__$1;
(statearr_29840_29998[(2)] = null);

(statearr_29840_29998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29836 === (6))){
var state_29835__$1 = state_29835;
var statearr_29841_29999 = state_29835__$1;
(statearr_29841_29999[(2)] = null);

(statearr_29841_29999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29836 === (7))){
var inst_29831 = (state_29835[(2)]);
var state_29835__$1 = state_29835;
var statearr_29842_30000 = state_29835__$1;
(statearr_29842_30000[(2)] = inst_29831);

(statearr_29842_30000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__29991,c__29429__auto___29994,G__29822_29992,n__25980__auto___29990,jobs,results,process,async))
;
return ((function (__29991,switch__29317__auto__,c__29429__auto___29994,G__29822_29992,n__25980__auto___29990,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29318__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29318__auto____0 = (function (){
var statearr_29846 = [null,null,null,null,null,null,null];
(statearr_29846[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29318__auto__);

(statearr_29846[(1)] = (1));

return statearr_29846;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29318__auto____1 = (function (state_29835){
while(true){
var ret_value__29319__auto__ = (function (){try{while(true){
var result__29320__auto__ = switch__29317__auto__.call(null,state_29835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29320__auto__;
}
break;
}
}catch (e29847){if((e29847 instanceof Object)){
var ex__29321__auto__ = e29847;
var statearr_29848_30001 = state_29835;
(statearr_29848_30001[(5)] = ex__29321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30002 = state_29835;
state_29835 = G__30002;
continue;
} else {
return ret_value__29319__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29318__auto__ = function(state_29835){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29318__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29318__auto____1.call(this,state_29835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29318__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29318__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29318__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29318__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29318__auto__;
})()
;})(__29991,switch__29317__auto__,c__29429__auto___29994,G__29822_29992,n__25980__auto___29990,jobs,results,process,async))
})();
var state__29431__auto__ = (function (){var statearr_29849 = f__29430__auto__.call(null);
(statearr_29849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29429__auto___29994);

return statearr_29849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29431__auto__);
});})(__29991,c__29429__auto___29994,G__29822_29992,n__25980__auto___29990,jobs,results,process,async))
);


break;
case "async":
var c__29429__auto___30003 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29991,c__29429__auto___30003,G__29822_29992,n__25980__auto___29990,jobs,results,process,async){
return (function (){
var f__29430__auto__ = (function (){var switch__29317__auto__ = ((function (__29991,c__29429__auto___30003,G__29822_29992,n__25980__auto___29990,jobs,results,process,async){
return (function (state_29862){
var state_val_29863 = (state_29862[(1)]);
if((state_val_29863 === (1))){
var state_29862__$1 = state_29862;
var statearr_29864_30004 = state_29862__$1;
(statearr_29864_30004[(2)] = null);

(statearr_29864_30004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29863 === (2))){
var state_29862__$1 = state_29862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29862__$1,(4),jobs);
} else {
if((state_val_29863 === (3))){
var inst_29860 = (state_29862[(2)]);
var state_29862__$1 = state_29862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29862__$1,inst_29860);
} else {
if((state_val_29863 === (4))){
var inst_29852 = (state_29862[(2)]);
var inst_29853 = async.call(null,inst_29852);
var state_29862__$1 = state_29862;
if(cljs.core.truth_(inst_29853)){
var statearr_29865_30005 = state_29862__$1;
(statearr_29865_30005[(1)] = (5));

} else {
var statearr_29866_30006 = state_29862__$1;
(statearr_29866_30006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29863 === (5))){
var state_29862__$1 = state_29862;
var statearr_29867_30007 = state_29862__$1;
(statearr_29867_30007[(2)] = null);

(statearr_29867_30007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29863 === (6))){
var state_29862__$1 = state_29862;
var statearr_29868_30008 = state_29862__$1;
(statearr_29868_30008[(2)] = null);

(statearr_29868_30008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29863 === (7))){
var inst_29858 = (state_29862[(2)]);
var state_29862__$1 = state_29862;
var statearr_29869_30009 = state_29862__$1;
(statearr_29869_30009[(2)] = inst_29858);

(statearr_29869_30009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__29991,c__29429__auto___30003,G__29822_29992,n__25980__auto___29990,jobs,results,process,async))
;
return ((function (__29991,switch__29317__auto__,c__29429__auto___30003,G__29822_29992,n__25980__auto___29990,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29318__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29318__auto____0 = (function (){
var statearr_29873 = [null,null,null,null,null,null,null];
(statearr_29873[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29318__auto__);

(statearr_29873[(1)] = (1));

return statearr_29873;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29318__auto____1 = (function (state_29862){
while(true){
var ret_value__29319__auto__ = (function (){try{while(true){
var result__29320__auto__ = switch__29317__auto__.call(null,state_29862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29320__auto__;
}
break;
}
}catch (e29874){if((e29874 instanceof Object)){
var ex__29321__auto__ = e29874;
var statearr_29875_30010 = state_29862;
(statearr_29875_30010[(5)] = ex__29321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30011 = state_29862;
state_29862 = G__30011;
continue;
} else {
return ret_value__29319__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29318__auto__ = function(state_29862){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29318__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29318__auto____1.call(this,state_29862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29318__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29318__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29318__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29318__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29318__auto__;
})()
;})(__29991,switch__29317__auto__,c__29429__auto___30003,G__29822_29992,n__25980__auto___29990,jobs,results,process,async))
})();
var state__29431__auto__ = (function (){var statearr_29876 = f__29430__auto__.call(null);
(statearr_29876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29429__auto___30003);

return statearr_29876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29431__auto__);
});})(__29991,c__29429__auto___30003,G__29822_29992,n__25980__auto___29990,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30012 = (__29991 + (1));
__29991 = G__30012;
continue;
} else {
}
break;
}

var c__29429__auto___30013 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29429__auto___30013,jobs,results,process,async){
return (function (){
var f__29430__auto__ = (function (){var switch__29317__auto__ = ((function (c__29429__auto___30013,jobs,results,process,async){
return (function (state_29898){
var state_val_29899 = (state_29898[(1)]);
if((state_val_29899 === (1))){
var state_29898__$1 = state_29898;
var statearr_29900_30014 = state_29898__$1;
(statearr_29900_30014[(2)] = null);

(statearr_29900_30014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29899 === (2))){
var state_29898__$1 = state_29898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29898__$1,(4),from);
} else {
if((state_val_29899 === (3))){
var inst_29896 = (state_29898[(2)]);
var state_29898__$1 = state_29898;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29898__$1,inst_29896);
} else {
if((state_val_29899 === (4))){
var inst_29879 = (state_29898[(7)]);
var inst_29879__$1 = (state_29898[(2)]);
var inst_29880 = (inst_29879__$1 == null);
var state_29898__$1 = (function (){var statearr_29901 = state_29898;
(statearr_29901[(7)] = inst_29879__$1);

return statearr_29901;
})();
if(cljs.core.truth_(inst_29880)){
var statearr_29902_30015 = state_29898__$1;
(statearr_29902_30015[(1)] = (5));

} else {
var statearr_29903_30016 = state_29898__$1;
(statearr_29903_30016[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29899 === (5))){
var inst_29882 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29898__$1 = state_29898;
var statearr_29904_30017 = state_29898__$1;
(statearr_29904_30017[(2)] = inst_29882);

(statearr_29904_30017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29899 === (6))){
var inst_29884 = (state_29898[(8)]);
var inst_29879 = (state_29898[(7)]);
var inst_29884__$1 = cljs.core.async.chan.call(null,(1));
var inst_29885 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29886 = [inst_29879,inst_29884__$1];
var inst_29887 = (new cljs.core.PersistentVector(null,2,(5),inst_29885,inst_29886,null));
var state_29898__$1 = (function (){var statearr_29905 = state_29898;
(statearr_29905[(8)] = inst_29884__$1);

return statearr_29905;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29898__$1,(8),jobs,inst_29887);
} else {
if((state_val_29899 === (7))){
var inst_29894 = (state_29898[(2)]);
var state_29898__$1 = state_29898;
var statearr_29906_30018 = state_29898__$1;
(statearr_29906_30018[(2)] = inst_29894);

(statearr_29906_30018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29899 === (8))){
var inst_29884 = (state_29898[(8)]);
var inst_29889 = (state_29898[(2)]);
var state_29898__$1 = (function (){var statearr_29907 = state_29898;
(statearr_29907[(9)] = inst_29889);

return statearr_29907;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29898__$1,(9),results,inst_29884);
} else {
if((state_val_29899 === (9))){
var inst_29891 = (state_29898[(2)]);
var state_29898__$1 = (function (){var statearr_29908 = state_29898;
(statearr_29908[(10)] = inst_29891);

return statearr_29908;
})();
var statearr_29909_30019 = state_29898__$1;
(statearr_29909_30019[(2)] = null);

(statearr_29909_30019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__29429__auto___30013,jobs,results,process,async))
;
return ((function (switch__29317__auto__,c__29429__auto___30013,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29318__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29318__auto____0 = (function (){
var statearr_29913 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29913[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29318__auto__);

(statearr_29913[(1)] = (1));

return statearr_29913;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29318__auto____1 = (function (state_29898){
while(true){
var ret_value__29319__auto__ = (function (){try{while(true){
var result__29320__auto__ = switch__29317__auto__.call(null,state_29898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29320__auto__;
}
break;
}
}catch (e29914){if((e29914 instanceof Object)){
var ex__29321__auto__ = e29914;
var statearr_29915_30020 = state_29898;
(statearr_29915_30020[(5)] = ex__29321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29914;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30021 = state_29898;
state_29898 = G__30021;
continue;
} else {
return ret_value__29319__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29318__auto__ = function(state_29898){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29318__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29318__auto____1.call(this,state_29898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29318__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29318__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29318__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29318__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29318__auto__;
})()
;})(switch__29317__auto__,c__29429__auto___30013,jobs,results,process,async))
})();
var state__29431__auto__ = (function (){var statearr_29916 = f__29430__auto__.call(null);
(statearr_29916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29429__auto___30013);

return statearr_29916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29431__auto__);
});})(c__29429__auto___30013,jobs,results,process,async))
);


var c__29429__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29429__auto__,jobs,results,process,async){
return (function (){
var f__29430__auto__ = (function (){var switch__29317__auto__ = ((function (c__29429__auto__,jobs,results,process,async){
return (function (state_29954){
var state_val_29955 = (state_29954[(1)]);
if((state_val_29955 === (7))){
var inst_29950 = (state_29954[(2)]);
var state_29954__$1 = state_29954;
var statearr_29956_30022 = state_29954__$1;
(statearr_29956_30022[(2)] = inst_29950);

(statearr_29956_30022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (20))){
var state_29954__$1 = state_29954;
var statearr_29957_30023 = state_29954__$1;
(statearr_29957_30023[(2)] = null);

(statearr_29957_30023[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (1))){
var state_29954__$1 = state_29954;
var statearr_29958_30024 = state_29954__$1;
(statearr_29958_30024[(2)] = null);

(statearr_29958_30024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (4))){
var inst_29919 = (state_29954[(7)]);
var inst_29919__$1 = (state_29954[(2)]);
var inst_29920 = (inst_29919__$1 == null);
var state_29954__$1 = (function (){var statearr_29959 = state_29954;
(statearr_29959[(7)] = inst_29919__$1);

return statearr_29959;
})();
if(cljs.core.truth_(inst_29920)){
var statearr_29960_30025 = state_29954__$1;
(statearr_29960_30025[(1)] = (5));

} else {
var statearr_29961_30026 = state_29954__$1;
(statearr_29961_30026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (15))){
var inst_29932 = (state_29954[(8)]);
var state_29954__$1 = state_29954;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29954__$1,(18),to,inst_29932);
} else {
if((state_val_29955 === (21))){
var inst_29945 = (state_29954[(2)]);
var state_29954__$1 = state_29954;
var statearr_29962_30027 = state_29954__$1;
(statearr_29962_30027[(2)] = inst_29945);

(statearr_29962_30027[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (13))){
var inst_29947 = (state_29954[(2)]);
var state_29954__$1 = (function (){var statearr_29963 = state_29954;
(statearr_29963[(9)] = inst_29947);

return statearr_29963;
})();
var statearr_29964_30028 = state_29954__$1;
(statearr_29964_30028[(2)] = null);

(statearr_29964_30028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (6))){
var inst_29919 = (state_29954[(7)]);
var state_29954__$1 = state_29954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29954__$1,(11),inst_29919);
} else {
if((state_val_29955 === (17))){
var inst_29940 = (state_29954[(2)]);
var state_29954__$1 = state_29954;
if(cljs.core.truth_(inst_29940)){
var statearr_29965_30029 = state_29954__$1;
(statearr_29965_30029[(1)] = (19));

} else {
var statearr_29966_30030 = state_29954__$1;
(statearr_29966_30030[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (3))){
var inst_29952 = (state_29954[(2)]);
var state_29954__$1 = state_29954;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29954__$1,inst_29952);
} else {
if((state_val_29955 === (12))){
var inst_29929 = (state_29954[(10)]);
var state_29954__$1 = state_29954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29954__$1,(14),inst_29929);
} else {
if((state_val_29955 === (2))){
var state_29954__$1 = state_29954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29954__$1,(4),results);
} else {
if((state_val_29955 === (19))){
var state_29954__$1 = state_29954;
var statearr_29967_30031 = state_29954__$1;
(statearr_29967_30031[(2)] = null);

(statearr_29967_30031[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (11))){
var inst_29929 = (state_29954[(2)]);
var state_29954__$1 = (function (){var statearr_29968 = state_29954;
(statearr_29968[(10)] = inst_29929);

return statearr_29968;
})();
var statearr_29969_30032 = state_29954__$1;
(statearr_29969_30032[(2)] = null);

(statearr_29969_30032[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (9))){
var state_29954__$1 = state_29954;
var statearr_29970_30033 = state_29954__$1;
(statearr_29970_30033[(2)] = null);

(statearr_29970_30033[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (5))){
var state_29954__$1 = state_29954;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29971_30034 = state_29954__$1;
(statearr_29971_30034[(1)] = (8));

} else {
var statearr_29972_30035 = state_29954__$1;
(statearr_29972_30035[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (14))){
var inst_29934 = (state_29954[(11)]);
var inst_29932 = (state_29954[(8)]);
var inst_29932__$1 = (state_29954[(2)]);
var inst_29933 = (inst_29932__$1 == null);
var inst_29934__$1 = cljs.core.not.call(null,inst_29933);
var state_29954__$1 = (function (){var statearr_29973 = state_29954;
(statearr_29973[(11)] = inst_29934__$1);

(statearr_29973[(8)] = inst_29932__$1);

return statearr_29973;
})();
if(inst_29934__$1){
var statearr_29974_30036 = state_29954__$1;
(statearr_29974_30036[(1)] = (15));

} else {
var statearr_29975_30037 = state_29954__$1;
(statearr_29975_30037[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (16))){
var inst_29934 = (state_29954[(11)]);
var state_29954__$1 = state_29954;
var statearr_29976_30038 = state_29954__$1;
(statearr_29976_30038[(2)] = inst_29934);

(statearr_29976_30038[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (10))){
var inst_29926 = (state_29954[(2)]);
var state_29954__$1 = state_29954;
var statearr_29977_30039 = state_29954__$1;
(statearr_29977_30039[(2)] = inst_29926);

(statearr_29977_30039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (18))){
var inst_29937 = (state_29954[(2)]);
var state_29954__$1 = state_29954;
var statearr_29978_30040 = state_29954__$1;
(statearr_29978_30040[(2)] = inst_29937);

(statearr_29978_30040[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (8))){
var inst_29923 = cljs.core.async.close_BANG_.call(null,to);
var state_29954__$1 = state_29954;
var statearr_29979_30041 = state_29954__$1;
(statearr_29979_30041[(2)] = inst_29923);

(statearr_29979_30041[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29429__auto__,jobs,results,process,async))
;
return ((function (switch__29317__auto__,c__29429__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29318__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29318__auto____0 = (function (){
var statearr_29983 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29983[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29318__auto__);

(statearr_29983[(1)] = (1));

return statearr_29983;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29318__auto____1 = (function (state_29954){
while(true){
var ret_value__29319__auto__ = (function (){try{while(true){
var result__29320__auto__ = switch__29317__auto__.call(null,state_29954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29320__auto__;
}
break;
}
}catch (e29984){if((e29984 instanceof Object)){
var ex__29321__auto__ = e29984;
var statearr_29985_30042 = state_29954;
(statearr_29985_30042[(5)] = ex__29321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30043 = state_29954;
state_29954 = G__30043;
continue;
} else {
return ret_value__29319__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29318__auto__ = function(state_29954){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29318__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29318__auto____1.call(this,state_29954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29318__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29318__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29318__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29318__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29318__auto__;
})()
;})(switch__29317__auto__,c__29429__auto__,jobs,results,process,async))
})();
var state__29431__auto__ = (function (){var statearr_29986 = f__29430__auto__.call(null);
(statearr_29986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29429__auto__);

return statearr_29986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29431__auto__);
});})(c__29429__auto__,jobs,results,process,async))
);

return c__29429__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args30044 = [];
var len__26140__auto___30047 = arguments.length;
var i__26141__auto___30048 = (0);
while(true){
if((i__26141__auto___30048 < len__26140__auto___30047)){
args30044.push((arguments[i__26141__auto___30048]));

var G__30049 = (i__26141__auto___30048 + (1));
i__26141__auto___30048 = G__30049;
continue;
} else {
}
break;
}

var G__30046 = args30044.length;
switch (G__30046) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30044.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args30051 = [];
var len__26140__auto___30054 = arguments.length;
var i__26141__auto___30055 = (0);
while(true){
if((i__26141__auto___30055 < len__26140__auto___30054)){
args30051.push((arguments[i__26141__auto___30055]));

var G__30056 = (i__26141__auto___30055 + (1));
i__26141__auto___30055 = G__30056;
continue;
} else {
}
break;
}

var G__30053 = args30051.length;
switch (G__30053) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30051.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args30058 = [];
var len__26140__auto___30111 = arguments.length;
var i__26141__auto___30112 = (0);
while(true){
if((i__26141__auto___30112 < len__26140__auto___30111)){
args30058.push((arguments[i__26141__auto___30112]));

var G__30113 = (i__26141__auto___30112 + (1));
i__26141__auto___30112 = G__30113;
continue;
} else {
}
break;
}

var G__30060 = args30058.length;
switch (G__30060) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30058.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29429__auto___30115 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29429__auto___30115,tc,fc){
return (function (){
var f__29430__auto__ = (function (){var switch__29317__auto__ = ((function (c__29429__auto___30115,tc,fc){
return (function (state_30086){
var state_val_30087 = (state_30086[(1)]);
if((state_val_30087 === (7))){
var inst_30082 = (state_30086[(2)]);
var state_30086__$1 = state_30086;
var statearr_30088_30116 = state_30086__$1;
(statearr_30088_30116[(2)] = inst_30082);

(statearr_30088_30116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30087 === (1))){
var state_30086__$1 = state_30086;
var statearr_30089_30117 = state_30086__$1;
(statearr_30089_30117[(2)] = null);

(statearr_30089_30117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30087 === (4))){
var inst_30063 = (state_30086[(7)]);
var inst_30063__$1 = (state_30086[(2)]);
var inst_30064 = (inst_30063__$1 == null);
var state_30086__$1 = (function (){var statearr_30090 = state_30086;
(statearr_30090[(7)] = inst_30063__$1);

return statearr_30090;
})();
if(cljs.core.truth_(inst_30064)){
var statearr_30091_30118 = state_30086__$1;
(statearr_30091_30118[(1)] = (5));

} else {
var statearr_30092_30119 = state_30086__$1;
(statearr_30092_30119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30087 === (13))){
var state_30086__$1 = state_30086;
var statearr_30093_30120 = state_30086__$1;
(statearr_30093_30120[(2)] = null);

(statearr_30093_30120[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30087 === (6))){
var inst_30063 = (state_30086[(7)]);
var inst_30069 = p.call(null,inst_30063);
var state_30086__$1 = state_30086;
if(cljs.core.truth_(inst_30069)){
var statearr_30094_30121 = state_30086__$1;
(statearr_30094_30121[(1)] = (9));

} else {
var statearr_30095_30122 = state_30086__$1;
(statearr_30095_30122[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30087 === (3))){
var inst_30084 = (state_30086[(2)]);
var state_30086__$1 = state_30086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30086__$1,inst_30084);
} else {
if((state_val_30087 === (12))){
var state_30086__$1 = state_30086;
var statearr_30096_30123 = state_30086__$1;
(statearr_30096_30123[(2)] = null);

(statearr_30096_30123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30087 === (2))){
var state_30086__$1 = state_30086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30086__$1,(4),ch);
} else {
if((state_val_30087 === (11))){
var inst_30063 = (state_30086[(7)]);
var inst_30073 = (state_30086[(2)]);
var state_30086__$1 = state_30086;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30086__$1,(8),inst_30073,inst_30063);
} else {
if((state_val_30087 === (9))){
var state_30086__$1 = state_30086;
var statearr_30097_30124 = state_30086__$1;
(statearr_30097_30124[(2)] = tc);

(statearr_30097_30124[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30087 === (5))){
var inst_30066 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30067 = cljs.core.async.close_BANG_.call(null,fc);
var state_30086__$1 = (function (){var statearr_30098 = state_30086;
(statearr_30098[(8)] = inst_30066);

return statearr_30098;
})();
var statearr_30099_30125 = state_30086__$1;
(statearr_30099_30125[(2)] = inst_30067);

(statearr_30099_30125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30087 === (14))){
var inst_30080 = (state_30086[(2)]);
var state_30086__$1 = state_30086;
var statearr_30100_30126 = state_30086__$1;
(statearr_30100_30126[(2)] = inst_30080);

(statearr_30100_30126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30087 === (10))){
var state_30086__$1 = state_30086;
var statearr_30101_30127 = state_30086__$1;
(statearr_30101_30127[(2)] = fc);

(statearr_30101_30127[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30087 === (8))){
var inst_30075 = (state_30086[(2)]);
var state_30086__$1 = state_30086;
if(cljs.core.truth_(inst_30075)){
var statearr_30102_30128 = state_30086__$1;
(statearr_30102_30128[(1)] = (12));

} else {
var statearr_30103_30129 = state_30086__$1;
(statearr_30103_30129[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29429__auto___30115,tc,fc))
;
return ((function (switch__29317__auto__,c__29429__auto___30115,tc,fc){
return (function() {
var cljs$core$async$state_machine__29318__auto__ = null;
var cljs$core$async$state_machine__29318__auto____0 = (function (){
var statearr_30107 = [null,null,null,null,null,null,null,null,null];
(statearr_30107[(0)] = cljs$core$async$state_machine__29318__auto__);

(statearr_30107[(1)] = (1));

return statearr_30107;
});
var cljs$core$async$state_machine__29318__auto____1 = (function (state_30086){
while(true){
var ret_value__29319__auto__ = (function (){try{while(true){
var result__29320__auto__ = switch__29317__auto__.call(null,state_30086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29320__auto__;
}
break;
}
}catch (e30108){if((e30108 instanceof Object)){
var ex__29321__auto__ = e30108;
var statearr_30109_30130 = state_30086;
(statearr_30109_30130[(5)] = ex__29321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30131 = state_30086;
state_30086 = G__30131;
continue;
} else {
return ret_value__29319__auto__;
}
break;
}
});
cljs$core$async$state_machine__29318__auto__ = function(state_30086){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29318__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29318__auto____1.call(this,state_30086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29318__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29318__auto____0;
cljs$core$async$state_machine__29318__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29318__auto____1;
return cljs$core$async$state_machine__29318__auto__;
})()
;})(switch__29317__auto__,c__29429__auto___30115,tc,fc))
})();
var state__29431__auto__ = (function (){var statearr_30110 = f__29430__auto__.call(null);
(statearr_30110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29429__auto___30115);

return statearr_30110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29431__auto__);
});})(c__29429__auto___30115,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29429__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29429__auto__){
return (function (){
var f__29430__auto__ = (function (){var switch__29317__auto__ = ((function (c__29429__auto__){
return (function (state_30195){
var state_val_30196 = (state_30195[(1)]);
if((state_val_30196 === (7))){
var inst_30191 = (state_30195[(2)]);
var state_30195__$1 = state_30195;
var statearr_30197_30218 = state_30195__$1;
(statearr_30197_30218[(2)] = inst_30191);

(statearr_30197_30218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (1))){
var inst_30175 = init;
var state_30195__$1 = (function (){var statearr_30198 = state_30195;
(statearr_30198[(7)] = inst_30175);

return statearr_30198;
})();
var statearr_30199_30219 = state_30195__$1;
(statearr_30199_30219[(2)] = null);

(statearr_30199_30219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (4))){
var inst_30178 = (state_30195[(8)]);
var inst_30178__$1 = (state_30195[(2)]);
var inst_30179 = (inst_30178__$1 == null);
var state_30195__$1 = (function (){var statearr_30200 = state_30195;
(statearr_30200[(8)] = inst_30178__$1);

return statearr_30200;
})();
if(cljs.core.truth_(inst_30179)){
var statearr_30201_30220 = state_30195__$1;
(statearr_30201_30220[(1)] = (5));

} else {
var statearr_30202_30221 = state_30195__$1;
(statearr_30202_30221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (6))){
var inst_30175 = (state_30195[(7)]);
var inst_30178 = (state_30195[(8)]);
var inst_30182 = (state_30195[(9)]);
var inst_30182__$1 = f.call(null,inst_30175,inst_30178);
var inst_30183 = cljs.core.reduced_QMARK_.call(null,inst_30182__$1);
var state_30195__$1 = (function (){var statearr_30203 = state_30195;
(statearr_30203[(9)] = inst_30182__$1);

return statearr_30203;
})();
if(inst_30183){
var statearr_30204_30222 = state_30195__$1;
(statearr_30204_30222[(1)] = (8));

} else {
var statearr_30205_30223 = state_30195__$1;
(statearr_30205_30223[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (3))){
var inst_30193 = (state_30195[(2)]);
var state_30195__$1 = state_30195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30195__$1,inst_30193);
} else {
if((state_val_30196 === (2))){
var state_30195__$1 = state_30195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30195__$1,(4),ch);
} else {
if((state_val_30196 === (9))){
var inst_30182 = (state_30195[(9)]);
var inst_30175 = inst_30182;
var state_30195__$1 = (function (){var statearr_30206 = state_30195;
(statearr_30206[(7)] = inst_30175);

return statearr_30206;
})();
var statearr_30207_30224 = state_30195__$1;
(statearr_30207_30224[(2)] = null);

(statearr_30207_30224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (5))){
var inst_30175 = (state_30195[(7)]);
var state_30195__$1 = state_30195;
var statearr_30208_30225 = state_30195__$1;
(statearr_30208_30225[(2)] = inst_30175);

(statearr_30208_30225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (10))){
var inst_30189 = (state_30195[(2)]);
var state_30195__$1 = state_30195;
var statearr_30209_30226 = state_30195__$1;
(statearr_30209_30226[(2)] = inst_30189);

(statearr_30209_30226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (8))){
var inst_30182 = (state_30195[(9)]);
var inst_30185 = cljs.core.deref.call(null,inst_30182);
var state_30195__$1 = state_30195;
var statearr_30210_30227 = state_30195__$1;
(statearr_30210_30227[(2)] = inst_30185);

(statearr_30210_30227[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__29429__auto__))
;
return ((function (switch__29317__auto__,c__29429__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29318__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29318__auto____0 = (function (){
var statearr_30214 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30214[(0)] = cljs$core$async$reduce_$_state_machine__29318__auto__);

(statearr_30214[(1)] = (1));

return statearr_30214;
});
var cljs$core$async$reduce_$_state_machine__29318__auto____1 = (function (state_30195){
while(true){
var ret_value__29319__auto__ = (function (){try{while(true){
var result__29320__auto__ = switch__29317__auto__.call(null,state_30195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29320__auto__;
}
break;
}
}catch (e30215){if((e30215 instanceof Object)){
var ex__29321__auto__ = e30215;
var statearr_30216_30228 = state_30195;
(statearr_30216_30228[(5)] = ex__29321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30229 = state_30195;
state_30195 = G__30229;
continue;
} else {
return ret_value__29319__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29318__auto__ = function(state_30195){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29318__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29318__auto____1.call(this,state_30195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29318__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29318__auto____0;
cljs$core$async$reduce_$_state_machine__29318__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29318__auto____1;
return cljs$core$async$reduce_$_state_machine__29318__auto__;
})()
;})(switch__29317__auto__,c__29429__auto__))
})();
var state__29431__auto__ = (function (){var statearr_30217 = f__29430__auto__.call(null);
(statearr_30217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29429__auto__);

return statearr_30217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29431__auto__);
});})(c__29429__auto__))
);

return c__29429__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args30230 = [];
var len__26140__auto___30282 = arguments.length;
var i__26141__auto___30283 = (0);
while(true){
if((i__26141__auto___30283 < len__26140__auto___30282)){
args30230.push((arguments[i__26141__auto___30283]));

var G__30284 = (i__26141__auto___30283 + (1));
i__26141__auto___30283 = G__30284;
continue;
} else {
}
break;
}

var G__30232 = args30230.length;
switch (G__30232) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30230.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29429__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29429__auto__){
return (function (){
var f__29430__auto__ = (function (){var switch__29317__auto__ = ((function (c__29429__auto__){
return (function (state_30257){
var state_val_30258 = (state_30257[(1)]);
if((state_val_30258 === (7))){
var inst_30239 = (state_30257[(2)]);
var state_30257__$1 = state_30257;
var statearr_30259_30286 = state_30257__$1;
(statearr_30259_30286[(2)] = inst_30239);

(statearr_30259_30286[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30258 === (1))){
var inst_30233 = cljs.core.seq.call(null,coll);
var inst_30234 = inst_30233;
var state_30257__$1 = (function (){var statearr_30260 = state_30257;
(statearr_30260[(7)] = inst_30234);

return statearr_30260;
})();
var statearr_30261_30287 = state_30257__$1;
(statearr_30261_30287[(2)] = null);

(statearr_30261_30287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30258 === (4))){
var inst_30234 = (state_30257[(7)]);
var inst_30237 = cljs.core.first.call(null,inst_30234);
var state_30257__$1 = state_30257;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30257__$1,(7),ch,inst_30237);
} else {
if((state_val_30258 === (13))){
var inst_30251 = (state_30257[(2)]);
var state_30257__$1 = state_30257;
var statearr_30262_30288 = state_30257__$1;
(statearr_30262_30288[(2)] = inst_30251);

(statearr_30262_30288[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30258 === (6))){
var inst_30242 = (state_30257[(2)]);
var state_30257__$1 = state_30257;
if(cljs.core.truth_(inst_30242)){
var statearr_30263_30289 = state_30257__$1;
(statearr_30263_30289[(1)] = (8));

} else {
var statearr_30264_30290 = state_30257__$1;
(statearr_30264_30290[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30258 === (3))){
var inst_30255 = (state_30257[(2)]);
var state_30257__$1 = state_30257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30257__$1,inst_30255);
} else {
if((state_val_30258 === (12))){
var state_30257__$1 = state_30257;
var statearr_30265_30291 = state_30257__$1;
(statearr_30265_30291[(2)] = null);

(statearr_30265_30291[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30258 === (2))){
var inst_30234 = (state_30257[(7)]);
var state_30257__$1 = state_30257;
if(cljs.core.truth_(inst_30234)){
var statearr_30266_30292 = state_30257__$1;
(statearr_30266_30292[(1)] = (4));

} else {
var statearr_30267_30293 = state_30257__$1;
(statearr_30267_30293[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30258 === (11))){
var inst_30248 = cljs.core.async.close_BANG_.call(null,ch);
var state_30257__$1 = state_30257;
var statearr_30268_30294 = state_30257__$1;
(statearr_30268_30294[(2)] = inst_30248);

(statearr_30268_30294[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30258 === (9))){
var state_30257__$1 = state_30257;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30269_30295 = state_30257__$1;
(statearr_30269_30295[(1)] = (11));

} else {
var statearr_30270_30296 = state_30257__$1;
(statearr_30270_30296[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30258 === (5))){
var inst_30234 = (state_30257[(7)]);
var state_30257__$1 = state_30257;
var statearr_30271_30297 = state_30257__$1;
(statearr_30271_30297[(2)] = inst_30234);

(statearr_30271_30297[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30258 === (10))){
var inst_30253 = (state_30257[(2)]);
var state_30257__$1 = state_30257;
var statearr_30272_30298 = state_30257__$1;
(statearr_30272_30298[(2)] = inst_30253);

(statearr_30272_30298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30258 === (8))){
var inst_30234 = (state_30257[(7)]);
var inst_30244 = cljs.core.next.call(null,inst_30234);
var inst_30234__$1 = inst_30244;
var state_30257__$1 = (function (){var statearr_30273 = state_30257;
(statearr_30273[(7)] = inst_30234__$1);

return statearr_30273;
})();
var statearr_30274_30299 = state_30257__$1;
(statearr_30274_30299[(2)] = null);

(statearr_30274_30299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29429__auto__))
;
return ((function (switch__29317__auto__,c__29429__auto__){
return (function() {
var cljs$core$async$state_machine__29318__auto__ = null;
var cljs$core$async$state_machine__29318__auto____0 = (function (){
var statearr_30278 = [null,null,null,null,null,null,null,null];
(statearr_30278[(0)] = cljs$core$async$state_machine__29318__auto__);

(statearr_30278[(1)] = (1));

return statearr_30278;
});
var cljs$core$async$state_machine__29318__auto____1 = (function (state_30257){
while(true){
var ret_value__29319__auto__ = (function (){try{while(true){
var result__29320__auto__ = switch__29317__auto__.call(null,state_30257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29320__auto__;
}
break;
}
}catch (e30279){if((e30279 instanceof Object)){
var ex__29321__auto__ = e30279;
var statearr_30280_30300 = state_30257;
(statearr_30280_30300[(5)] = ex__29321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30301 = state_30257;
state_30257 = G__30301;
continue;
} else {
return ret_value__29319__auto__;
}
break;
}
});
cljs$core$async$state_machine__29318__auto__ = function(state_30257){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29318__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29318__auto____1.call(this,state_30257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29318__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29318__auto____0;
cljs$core$async$state_machine__29318__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29318__auto____1;
return cljs$core$async$state_machine__29318__auto__;
})()
;})(switch__29317__auto__,c__29429__auto__))
})();
var state__29431__auto__ = (function (){var statearr_30281 = f__29430__auto__.call(null);
(statearr_30281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29429__auto__);

return statearr_30281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29431__auto__);
});})(c__29429__auto__))
);

return c__29429__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25728__auto__ = (((_ == null))?null:_);
var m__25729__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25728__auto__)]);
if(!((m__25729__auto__ == null))){
return m__25729__auto__.call(null,_);
} else {
var m__25729__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25729__auto____$1 == null))){
return m__25729__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25728__auto__ = (((m == null))?null:m);
var m__25729__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25728__auto__)]);
if(!((m__25729__auto__ == null))){
return m__25729__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25729__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25729__auto____$1 == null))){
return m__25729__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25728__auto__ = (((m == null))?null:m);
var m__25729__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25728__auto__)]);
if(!((m__25729__auto__ == null))){
return m__25729__auto__.call(null,m,ch);
} else {
var m__25729__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25729__auto____$1 == null))){
return m__25729__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25728__auto__ = (((m == null))?null:m);
var m__25729__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25728__auto__)]);
if(!((m__25729__auto__ == null))){
return m__25729__auto__.call(null,m);
} else {
var m__25729__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25729__auto____$1 == null))){
return m__25729__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async30527 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30527 = (function (mult,ch,cs,meta30528){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta30528 = meta30528;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30529,meta30528__$1){
var self__ = this;
var _30529__$1 = this;
return (new cljs.core.async.t_cljs$core$async30527(self__.mult,self__.ch,self__.cs,meta30528__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async30527.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30529){
var self__ = this;
var _30529__$1 = this;
return self__.meta30528;
});})(cs))
;

cljs.core.async.t_cljs$core$async30527.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30527.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async30527.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async30527.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30527.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30527.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30527.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30528","meta30528",-1846620931,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async30527.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30527.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30527";

cljs.core.async.t_cljs$core$async30527.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25671__auto__,writer__25672__auto__,opt__25673__auto__){
return cljs.core._write.call(null,writer__25672__auto__,"cljs.core.async/t_cljs$core$async30527");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async30527 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async30527(mult__$1,ch__$1,cs__$1,meta30528){
return (new cljs.core.async.t_cljs$core$async30527(mult__$1,ch__$1,cs__$1,meta30528));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async30527(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__29429__auto___30752 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29429__auto___30752,cs,m,dchan,dctr,done){
return (function (){
var f__29430__auto__ = (function (){var switch__29317__auto__ = ((function (c__29429__auto___30752,cs,m,dchan,dctr,done){
return (function (state_30664){
var state_val_30665 = (state_30664[(1)]);
if((state_val_30665 === (7))){
var inst_30660 = (state_30664[(2)]);
var state_30664__$1 = state_30664;
var statearr_30666_30753 = state_30664__$1;
(statearr_30666_30753[(2)] = inst_30660);

(statearr_30666_30753[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (20))){
var inst_30563 = (state_30664[(7)]);
var inst_30575 = cljs.core.first.call(null,inst_30563);
var inst_30576 = cljs.core.nth.call(null,inst_30575,(0),null);
var inst_30577 = cljs.core.nth.call(null,inst_30575,(1),null);
var state_30664__$1 = (function (){var statearr_30667 = state_30664;
(statearr_30667[(8)] = inst_30576);

return statearr_30667;
})();
if(cljs.core.truth_(inst_30577)){
var statearr_30668_30754 = state_30664__$1;
(statearr_30668_30754[(1)] = (22));

} else {
var statearr_30669_30755 = state_30664__$1;
(statearr_30669_30755[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (27))){
var inst_30605 = (state_30664[(9)]);
var inst_30612 = (state_30664[(10)]);
var inst_30607 = (state_30664[(11)]);
var inst_30532 = (state_30664[(12)]);
var inst_30612__$1 = cljs.core._nth.call(null,inst_30605,inst_30607);
var inst_30613 = cljs.core.async.put_BANG_.call(null,inst_30612__$1,inst_30532,done);
var state_30664__$1 = (function (){var statearr_30670 = state_30664;
(statearr_30670[(10)] = inst_30612__$1);

return statearr_30670;
})();
if(cljs.core.truth_(inst_30613)){
var statearr_30671_30756 = state_30664__$1;
(statearr_30671_30756[(1)] = (30));

} else {
var statearr_30672_30757 = state_30664__$1;
(statearr_30672_30757[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (1))){
var state_30664__$1 = state_30664;
var statearr_30673_30758 = state_30664__$1;
(statearr_30673_30758[(2)] = null);

(statearr_30673_30758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (24))){
var inst_30563 = (state_30664[(7)]);
var inst_30582 = (state_30664[(2)]);
var inst_30583 = cljs.core.next.call(null,inst_30563);
var inst_30541 = inst_30583;
var inst_30542 = null;
var inst_30543 = (0);
var inst_30544 = (0);
var state_30664__$1 = (function (){var statearr_30674 = state_30664;
(statearr_30674[(13)] = inst_30544);

(statearr_30674[(14)] = inst_30542);

(statearr_30674[(15)] = inst_30582);

(statearr_30674[(16)] = inst_30543);

(statearr_30674[(17)] = inst_30541);

return statearr_30674;
})();
var statearr_30675_30759 = state_30664__$1;
(statearr_30675_30759[(2)] = null);

(statearr_30675_30759[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (39))){
var state_30664__$1 = state_30664;
var statearr_30679_30760 = state_30664__$1;
(statearr_30679_30760[(2)] = null);

(statearr_30679_30760[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (4))){
var inst_30532 = (state_30664[(12)]);
var inst_30532__$1 = (state_30664[(2)]);
var inst_30533 = (inst_30532__$1 == null);
var state_30664__$1 = (function (){var statearr_30680 = state_30664;
(statearr_30680[(12)] = inst_30532__$1);

return statearr_30680;
})();
if(cljs.core.truth_(inst_30533)){
var statearr_30681_30761 = state_30664__$1;
(statearr_30681_30761[(1)] = (5));

} else {
var statearr_30682_30762 = state_30664__$1;
(statearr_30682_30762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (15))){
var inst_30544 = (state_30664[(13)]);
var inst_30542 = (state_30664[(14)]);
var inst_30543 = (state_30664[(16)]);
var inst_30541 = (state_30664[(17)]);
var inst_30559 = (state_30664[(2)]);
var inst_30560 = (inst_30544 + (1));
var tmp30676 = inst_30542;
var tmp30677 = inst_30543;
var tmp30678 = inst_30541;
var inst_30541__$1 = tmp30678;
var inst_30542__$1 = tmp30676;
var inst_30543__$1 = tmp30677;
var inst_30544__$1 = inst_30560;
var state_30664__$1 = (function (){var statearr_30683 = state_30664;
(statearr_30683[(13)] = inst_30544__$1);

(statearr_30683[(14)] = inst_30542__$1);

(statearr_30683[(18)] = inst_30559);

(statearr_30683[(16)] = inst_30543__$1);

(statearr_30683[(17)] = inst_30541__$1);

return statearr_30683;
})();
var statearr_30684_30763 = state_30664__$1;
(statearr_30684_30763[(2)] = null);

(statearr_30684_30763[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (21))){
var inst_30586 = (state_30664[(2)]);
var state_30664__$1 = state_30664;
var statearr_30688_30764 = state_30664__$1;
(statearr_30688_30764[(2)] = inst_30586);

(statearr_30688_30764[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (31))){
var inst_30612 = (state_30664[(10)]);
var inst_30616 = done.call(null,null);
var inst_30617 = cljs.core.async.untap_STAR_.call(null,m,inst_30612);
var state_30664__$1 = (function (){var statearr_30689 = state_30664;
(statearr_30689[(19)] = inst_30616);

return statearr_30689;
})();
var statearr_30690_30765 = state_30664__$1;
(statearr_30690_30765[(2)] = inst_30617);

(statearr_30690_30765[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (32))){
var inst_30605 = (state_30664[(9)]);
var inst_30604 = (state_30664[(20)]);
var inst_30607 = (state_30664[(11)]);
var inst_30606 = (state_30664[(21)]);
var inst_30619 = (state_30664[(2)]);
var inst_30620 = (inst_30607 + (1));
var tmp30685 = inst_30605;
var tmp30686 = inst_30604;
var tmp30687 = inst_30606;
var inst_30604__$1 = tmp30686;
var inst_30605__$1 = tmp30685;
var inst_30606__$1 = tmp30687;
var inst_30607__$1 = inst_30620;
var state_30664__$1 = (function (){var statearr_30691 = state_30664;
(statearr_30691[(9)] = inst_30605__$1);

(statearr_30691[(22)] = inst_30619);

(statearr_30691[(20)] = inst_30604__$1);

(statearr_30691[(11)] = inst_30607__$1);

(statearr_30691[(21)] = inst_30606__$1);

return statearr_30691;
})();
var statearr_30692_30766 = state_30664__$1;
(statearr_30692_30766[(2)] = null);

(statearr_30692_30766[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (40))){
var inst_30632 = (state_30664[(23)]);
var inst_30636 = done.call(null,null);
var inst_30637 = cljs.core.async.untap_STAR_.call(null,m,inst_30632);
var state_30664__$1 = (function (){var statearr_30693 = state_30664;
(statearr_30693[(24)] = inst_30636);

return statearr_30693;
})();
var statearr_30694_30767 = state_30664__$1;
(statearr_30694_30767[(2)] = inst_30637);

(statearr_30694_30767[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (33))){
var inst_30623 = (state_30664[(25)]);
var inst_30625 = cljs.core.chunked_seq_QMARK_.call(null,inst_30623);
var state_30664__$1 = state_30664;
if(inst_30625){
var statearr_30695_30768 = state_30664__$1;
(statearr_30695_30768[(1)] = (36));

} else {
var statearr_30696_30769 = state_30664__$1;
(statearr_30696_30769[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (13))){
var inst_30553 = (state_30664[(26)]);
var inst_30556 = cljs.core.async.close_BANG_.call(null,inst_30553);
var state_30664__$1 = state_30664;
var statearr_30697_30770 = state_30664__$1;
(statearr_30697_30770[(2)] = inst_30556);

(statearr_30697_30770[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (22))){
var inst_30576 = (state_30664[(8)]);
var inst_30579 = cljs.core.async.close_BANG_.call(null,inst_30576);
var state_30664__$1 = state_30664;
var statearr_30698_30771 = state_30664__$1;
(statearr_30698_30771[(2)] = inst_30579);

(statearr_30698_30771[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (36))){
var inst_30623 = (state_30664[(25)]);
var inst_30627 = cljs.core.chunk_first.call(null,inst_30623);
var inst_30628 = cljs.core.chunk_rest.call(null,inst_30623);
var inst_30629 = cljs.core.count.call(null,inst_30627);
var inst_30604 = inst_30628;
var inst_30605 = inst_30627;
var inst_30606 = inst_30629;
var inst_30607 = (0);
var state_30664__$1 = (function (){var statearr_30699 = state_30664;
(statearr_30699[(9)] = inst_30605);

(statearr_30699[(20)] = inst_30604);

(statearr_30699[(11)] = inst_30607);

(statearr_30699[(21)] = inst_30606);

return statearr_30699;
})();
var statearr_30700_30772 = state_30664__$1;
(statearr_30700_30772[(2)] = null);

(statearr_30700_30772[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (41))){
var inst_30623 = (state_30664[(25)]);
var inst_30639 = (state_30664[(2)]);
var inst_30640 = cljs.core.next.call(null,inst_30623);
var inst_30604 = inst_30640;
var inst_30605 = null;
var inst_30606 = (0);
var inst_30607 = (0);
var state_30664__$1 = (function (){var statearr_30701 = state_30664;
(statearr_30701[(9)] = inst_30605);

(statearr_30701[(27)] = inst_30639);

(statearr_30701[(20)] = inst_30604);

(statearr_30701[(11)] = inst_30607);

(statearr_30701[(21)] = inst_30606);

return statearr_30701;
})();
var statearr_30702_30773 = state_30664__$1;
(statearr_30702_30773[(2)] = null);

(statearr_30702_30773[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (43))){
var state_30664__$1 = state_30664;
var statearr_30703_30774 = state_30664__$1;
(statearr_30703_30774[(2)] = null);

(statearr_30703_30774[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (29))){
var inst_30648 = (state_30664[(2)]);
var state_30664__$1 = state_30664;
var statearr_30704_30775 = state_30664__$1;
(statearr_30704_30775[(2)] = inst_30648);

(statearr_30704_30775[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (44))){
var inst_30657 = (state_30664[(2)]);
var state_30664__$1 = (function (){var statearr_30705 = state_30664;
(statearr_30705[(28)] = inst_30657);

return statearr_30705;
})();
var statearr_30706_30776 = state_30664__$1;
(statearr_30706_30776[(2)] = null);

(statearr_30706_30776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (6))){
var inst_30596 = (state_30664[(29)]);
var inst_30595 = cljs.core.deref.call(null,cs);
var inst_30596__$1 = cljs.core.keys.call(null,inst_30595);
var inst_30597 = cljs.core.count.call(null,inst_30596__$1);
var inst_30598 = cljs.core.reset_BANG_.call(null,dctr,inst_30597);
var inst_30603 = cljs.core.seq.call(null,inst_30596__$1);
var inst_30604 = inst_30603;
var inst_30605 = null;
var inst_30606 = (0);
var inst_30607 = (0);
var state_30664__$1 = (function (){var statearr_30707 = state_30664;
(statearr_30707[(9)] = inst_30605);

(statearr_30707[(30)] = inst_30598);

(statearr_30707[(29)] = inst_30596__$1);

(statearr_30707[(20)] = inst_30604);

(statearr_30707[(11)] = inst_30607);

(statearr_30707[(21)] = inst_30606);

return statearr_30707;
})();
var statearr_30708_30777 = state_30664__$1;
(statearr_30708_30777[(2)] = null);

(statearr_30708_30777[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (28))){
var inst_30623 = (state_30664[(25)]);
var inst_30604 = (state_30664[(20)]);
var inst_30623__$1 = cljs.core.seq.call(null,inst_30604);
var state_30664__$1 = (function (){var statearr_30709 = state_30664;
(statearr_30709[(25)] = inst_30623__$1);

return statearr_30709;
})();
if(inst_30623__$1){
var statearr_30710_30778 = state_30664__$1;
(statearr_30710_30778[(1)] = (33));

} else {
var statearr_30711_30779 = state_30664__$1;
(statearr_30711_30779[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (25))){
var inst_30607 = (state_30664[(11)]);
var inst_30606 = (state_30664[(21)]);
var inst_30609 = (inst_30607 < inst_30606);
var inst_30610 = inst_30609;
var state_30664__$1 = state_30664;
if(cljs.core.truth_(inst_30610)){
var statearr_30712_30780 = state_30664__$1;
(statearr_30712_30780[(1)] = (27));

} else {
var statearr_30713_30781 = state_30664__$1;
(statearr_30713_30781[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (34))){
var state_30664__$1 = state_30664;
var statearr_30714_30782 = state_30664__$1;
(statearr_30714_30782[(2)] = null);

(statearr_30714_30782[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (17))){
var state_30664__$1 = state_30664;
var statearr_30715_30783 = state_30664__$1;
(statearr_30715_30783[(2)] = null);

(statearr_30715_30783[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (3))){
var inst_30662 = (state_30664[(2)]);
var state_30664__$1 = state_30664;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30664__$1,inst_30662);
} else {
if((state_val_30665 === (12))){
var inst_30591 = (state_30664[(2)]);
var state_30664__$1 = state_30664;
var statearr_30716_30784 = state_30664__$1;
(statearr_30716_30784[(2)] = inst_30591);

(statearr_30716_30784[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (2))){
var state_30664__$1 = state_30664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30664__$1,(4),ch);
} else {
if((state_val_30665 === (23))){
var state_30664__$1 = state_30664;
var statearr_30717_30785 = state_30664__$1;
(statearr_30717_30785[(2)] = null);

(statearr_30717_30785[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (35))){
var inst_30646 = (state_30664[(2)]);
var state_30664__$1 = state_30664;
var statearr_30718_30786 = state_30664__$1;
(statearr_30718_30786[(2)] = inst_30646);

(statearr_30718_30786[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (19))){
var inst_30563 = (state_30664[(7)]);
var inst_30567 = cljs.core.chunk_first.call(null,inst_30563);
var inst_30568 = cljs.core.chunk_rest.call(null,inst_30563);
var inst_30569 = cljs.core.count.call(null,inst_30567);
var inst_30541 = inst_30568;
var inst_30542 = inst_30567;
var inst_30543 = inst_30569;
var inst_30544 = (0);
var state_30664__$1 = (function (){var statearr_30719 = state_30664;
(statearr_30719[(13)] = inst_30544);

(statearr_30719[(14)] = inst_30542);

(statearr_30719[(16)] = inst_30543);

(statearr_30719[(17)] = inst_30541);

return statearr_30719;
})();
var statearr_30720_30787 = state_30664__$1;
(statearr_30720_30787[(2)] = null);

(statearr_30720_30787[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (11))){
var inst_30563 = (state_30664[(7)]);
var inst_30541 = (state_30664[(17)]);
var inst_30563__$1 = cljs.core.seq.call(null,inst_30541);
var state_30664__$1 = (function (){var statearr_30721 = state_30664;
(statearr_30721[(7)] = inst_30563__$1);

return statearr_30721;
})();
if(inst_30563__$1){
var statearr_30722_30788 = state_30664__$1;
(statearr_30722_30788[(1)] = (16));

} else {
var statearr_30723_30789 = state_30664__$1;
(statearr_30723_30789[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (9))){
var inst_30593 = (state_30664[(2)]);
var state_30664__$1 = state_30664;
var statearr_30724_30790 = state_30664__$1;
(statearr_30724_30790[(2)] = inst_30593);

(statearr_30724_30790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (5))){
var inst_30539 = cljs.core.deref.call(null,cs);
var inst_30540 = cljs.core.seq.call(null,inst_30539);
var inst_30541 = inst_30540;
var inst_30542 = null;
var inst_30543 = (0);
var inst_30544 = (0);
var state_30664__$1 = (function (){var statearr_30725 = state_30664;
(statearr_30725[(13)] = inst_30544);

(statearr_30725[(14)] = inst_30542);

(statearr_30725[(16)] = inst_30543);

(statearr_30725[(17)] = inst_30541);

return statearr_30725;
})();
var statearr_30726_30791 = state_30664__$1;
(statearr_30726_30791[(2)] = null);

(statearr_30726_30791[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (14))){
var state_30664__$1 = state_30664;
var statearr_30727_30792 = state_30664__$1;
(statearr_30727_30792[(2)] = null);

(statearr_30727_30792[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (45))){
var inst_30654 = (state_30664[(2)]);
var state_30664__$1 = state_30664;
var statearr_30728_30793 = state_30664__$1;
(statearr_30728_30793[(2)] = inst_30654);

(statearr_30728_30793[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (26))){
var inst_30596 = (state_30664[(29)]);
var inst_30650 = (state_30664[(2)]);
var inst_30651 = cljs.core.seq.call(null,inst_30596);
var state_30664__$1 = (function (){var statearr_30729 = state_30664;
(statearr_30729[(31)] = inst_30650);

return statearr_30729;
})();
if(inst_30651){
var statearr_30730_30794 = state_30664__$1;
(statearr_30730_30794[(1)] = (42));

} else {
var statearr_30731_30795 = state_30664__$1;
(statearr_30731_30795[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (16))){
var inst_30563 = (state_30664[(7)]);
var inst_30565 = cljs.core.chunked_seq_QMARK_.call(null,inst_30563);
var state_30664__$1 = state_30664;
if(inst_30565){
var statearr_30732_30796 = state_30664__$1;
(statearr_30732_30796[(1)] = (19));

} else {
var statearr_30733_30797 = state_30664__$1;
(statearr_30733_30797[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (38))){
var inst_30643 = (state_30664[(2)]);
var state_30664__$1 = state_30664;
var statearr_30734_30798 = state_30664__$1;
(statearr_30734_30798[(2)] = inst_30643);

(statearr_30734_30798[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (30))){
var state_30664__$1 = state_30664;
var statearr_30735_30799 = state_30664__$1;
(statearr_30735_30799[(2)] = null);

(statearr_30735_30799[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (10))){
var inst_30544 = (state_30664[(13)]);
var inst_30542 = (state_30664[(14)]);
var inst_30552 = cljs.core._nth.call(null,inst_30542,inst_30544);
var inst_30553 = cljs.core.nth.call(null,inst_30552,(0),null);
var inst_30554 = cljs.core.nth.call(null,inst_30552,(1),null);
var state_30664__$1 = (function (){var statearr_30736 = state_30664;
(statearr_30736[(26)] = inst_30553);

return statearr_30736;
})();
if(cljs.core.truth_(inst_30554)){
var statearr_30737_30800 = state_30664__$1;
(statearr_30737_30800[(1)] = (13));

} else {
var statearr_30738_30801 = state_30664__$1;
(statearr_30738_30801[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (18))){
var inst_30589 = (state_30664[(2)]);
var state_30664__$1 = state_30664;
var statearr_30739_30802 = state_30664__$1;
(statearr_30739_30802[(2)] = inst_30589);

(statearr_30739_30802[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (42))){
var state_30664__$1 = state_30664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30664__$1,(45),dchan);
} else {
if((state_val_30665 === (37))){
var inst_30632 = (state_30664[(23)]);
var inst_30623 = (state_30664[(25)]);
var inst_30532 = (state_30664[(12)]);
var inst_30632__$1 = cljs.core.first.call(null,inst_30623);
var inst_30633 = cljs.core.async.put_BANG_.call(null,inst_30632__$1,inst_30532,done);
var state_30664__$1 = (function (){var statearr_30740 = state_30664;
(statearr_30740[(23)] = inst_30632__$1);

return statearr_30740;
})();
if(cljs.core.truth_(inst_30633)){
var statearr_30741_30803 = state_30664__$1;
(statearr_30741_30803[(1)] = (39));

} else {
var statearr_30742_30804 = state_30664__$1;
(statearr_30742_30804[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (8))){
var inst_30544 = (state_30664[(13)]);
var inst_30543 = (state_30664[(16)]);
var inst_30546 = (inst_30544 < inst_30543);
var inst_30547 = inst_30546;
var state_30664__$1 = state_30664;
if(cljs.core.truth_(inst_30547)){
var statearr_30743_30805 = state_30664__$1;
(statearr_30743_30805[(1)] = (10));

} else {
var statearr_30744_30806 = state_30664__$1;
(statearr_30744_30806[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29429__auto___30752,cs,m,dchan,dctr,done))
;
return ((function (switch__29317__auto__,c__29429__auto___30752,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29318__auto__ = null;
var cljs$core$async$mult_$_state_machine__29318__auto____0 = (function (){
var statearr_30748 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30748[(0)] = cljs$core$async$mult_$_state_machine__29318__auto__);

(statearr_30748[(1)] = (1));

return statearr_30748;
});
var cljs$core$async$mult_$_state_machine__29318__auto____1 = (function (state_30664){
while(true){
var ret_value__29319__auto__ = (function (){try{while(true){
var result__29320__auto__ = switch__29317__auto__.call(null,state_30664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29320__auto__;
}
break;
}
}catch (e30749){if((e30749 instanceof Object)){
var ex__29321__auto__ = e30749;
var statearr_30750_30807 = state_30664;
(statearr_30750_30807[(5)] = ex__29321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30749;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30808 = state_30664;
state_30664 = G__30808;
continue;
} else {
return ret_value__29319__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29318__auto__ = function(state_30664){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29318__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29318__auto____1.call(this,state_30664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29318__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29318__auto____0;
cljs$core$async$mult_$_state_machine__29318__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29318__auto____1;
return cljs$core$async$mult_$_state_machine__29318__auto__;
})()
;})(switch__29317__auto__,c__29429__auto___30752,cs,m,dchan,dctr,done))
})();
var state__29431__auto__ = (function (){var statearr_30751 = f__29430__auto__.call(null);
(statearr_30751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29429__auto___30752);

return statearr_30751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29431__auto__);
});})(c__29429__auto___30752,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args30809 = [];
var len__26140__auto___30812 = arguments.length;
var i__26141__auto___30813 = (0);
while(true){
if((i__26141__auto___30813 < len__26140__auto___30812)){
args30809.push((arguments[i__26141__auto___30813]));

var G__30814 = (i__26141__auto___30813 + (1));
i__26141__auto___30813 = G__30814;
continue;
} else {
}
break;
}

var G__30811 = args30809.length;
switch (G__30811) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30809.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25728__auto__ = (((m == null))?null:m);
var m__25729__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25728__auto__)]);
if(!((m__25729__auto__ == null))){
return m__25729__auto__.call(null,m,ch);
} else {
var m__25729__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25729__auto____$1 == null))){
return m__25729__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25728__auto__ = (((m == null))?null:m);
var m__25729__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25728__auto__)]);
if(!((m__25729__auto__ == null))){
return m__25729__auto__.call(null,m,ch);
} else {
var m__25729__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25729__auto____$1 == null))){
return m__25729__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25728__auto__ = (((m == null))?null:m);
var m__25729__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25728__auto__)]);
if(!((m__25729__auto__ == null))){
return m__25729__auto__.call(null,m);
} else {
var m__25729__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25729__auto____$1 == null))){
return m__25729__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25728__auto__ = (((m == null))?null:m);
var m__25729__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25728__auto__)]);
if(!((m__25729__auto__ == null))){
return m__25729__auto__.call(null,m,state_map);
} else {
var m__25729__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25729__auto____$1 == null))){
return m__25729__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25728__auto__ = (((m == null))?null:m);
var m__25729__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25728__auto__)]);
if(!((m__25729__auto__ == null))){
return m__25729__auto__.call(null,m,mode);
} else {
var m__25729__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25729__auto____$1 == null))){
return m__25729__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__26147__auto__ = [];
var len__26140__auto___30826 = arguments.length;
var i__26141__auto___30827 = (0);
while(true){
if((i__26141__auto___30827 < len__26140__auto___30826)){
args__26147__auto__.push((arguments[i__26141__auto___30827]));

var G__30828 = (i__26141__auto___30827 + (1));
i__26141__auto___30827 = G__30828;
continue;
} else {
}
break;
}

var argseq__26148__auto__ = ((((3) < args__26147__auto__.length))?(new cljs.core.IndexedSeq(args__26147__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26148__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30820){
var map__30821 = p__30820;
var map__30821__$1 = ((((!((map__30821 == null)))?((((map__30821.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30821.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30821):map__30821);
var opts = map__30821__$1;
var statearr_30823_30829 = state;
(statearr_30823_30829[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__30821,map__30821__$1,opts){
return (function (val){
var statearr_30824_30830 = state;
(statearr_30824_30830[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30821,map__30821__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_30825_30831 = state;
(statearr_30825_30831[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30816){
var G__30817 = cljs.core.first.call(null,seq30816);
var seq30816__$1 = cljs.core.next.call(null,seq30816);
var G__30818 = cljs.core.first.call(null,seq30816__$1);
var seq30816__$2 = cljs.core.next.call(null,seq30816__$1);
var G__30819 = cljs.core.first.call(null,seq30816__$2);
var seq30816__$3 = cljs.core.next.call(null,seq30816__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30817,G__30818,G__30819,seq30816__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async30997 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30997 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30998){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30998 = meta30998;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30999,meta30998__$1){
var self__ = this;
var _30999__$1 = this;
return (new cljs.core.async.t_cljs$core$async30997(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30998__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30997.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30999){
var self__ = this;
var _30999__$1 = this;
return self__.meta30998;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30997.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30997.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30997.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async30997.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30997.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30997.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30997.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30997.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30997.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30998","meta30998",982302157,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30997.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30997.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30997";

cljs.core.async.t_cljs$core$async30997.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25671__auto__,writer__25672__auto__,opt__25673__auto__){
return cljs.core._write.call(null,writer__25672__auto__,"cljs.core.async/t_cljs$core$async30997");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async30997 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30997(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30998){
return (new cljs.core.async.t_cljs$core$async30997(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30998));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30997(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29429__auto___31162 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29429__auto___31162,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29430__auto__ = (function (){var switch__29317__auto__ = ((function (c__29429__auto___31162,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31099){
var state_val_31100 = (state_31099[(1)]);
if((state_val_31100 === (7))){
var inst_31015 = (state_31099[(2)]);
var state_31099__$1 = state_31099;
var statearr_31101_31163 = state_31099__$1;
(statearr_31101_31163[(2)] = inst_31015);

(statearr_31101_31163[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (20))){
var inst_31027 = (state_31099[(7)]);
var state_31099__$1 = state_31099;
var statearr_31102_31164 = state_31099__$1;
(statearr_31102_31164[(2)] = inst_31027);

(statearr_31102_31164[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (27))){
var state_31099__$1 = state_31099;
var statearr_31103_31165 = state_31099__$1;
(statearr_31103_31165[(2)] = null);

(statearr_31103_31165[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (1))){
var inst_31003 = (state_31099[(8)]);
var inst_31003__$1 = calc_state.call(null);
var inst_31005 = (inst_31003__$1 == null);
var inst_31006 = cljs.core.not.call(null,inst_31005);
var state_31099__$1 = (function (){var statearr_31104 = state_31099;
(statearr_31104[(8)] = inst_31003__$1);

return statearr_31104;
})();
if(inst_31006){
var statearr_31105_31166 = state_31099__$1;
(statearr_31105_31166[(1)] = (2));

} else {
var statearr_31106_31167 = state_31099__$1;
(statearr_31106_31167[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (24))){
var inst_31050 = (state_31099[(9)]);
var inst_31059 = (state_31099[(10)]);
var inst_31073 = (state_31099[(11)]);
var inst_31073__$1 = inst_31050.call(null,inst_31059);
var state_31099__$1 = (function (){var statearr_31107 = state_31099;
(statearr_31107[(11)] = inst_31073__$1);

return statearr_31107;
})();
if(cljs.core.truth_(inst_31073__$1)){
var statearr_31108_31168 = state_31099__$1;
(statearr_31108_31168[(1)] = (29));

} else {
var statearr_31109_31169 = state_31099__$1;
(statearr_31109_31169[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (4))){
var inst_31018 = (state_31099[(2)]);
var state_31099__$1 = state_31099;
if(cljs.core.truth_(inst_31018)){
var statearr_31110_31170 = state_31099__$1;
(statearr_31110_31170[(1)] = (8));

} else {
var statearr_31111_31171 = state_31099__$1;
(statearr_31111_31171[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (15))){
var inst_31044 = (state_31099[(2)]);
var state_31099__$1 = state_31099;
if(cljs.core.truth_(inst_31044)){
var statearr_31112_31172 = state_31099__$1;
(statearr_31112_31172[(1)] = (19));

} else {
var statearr_31113_31173 = state_31099__$1;
(statearr_31113_31173[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (21))){
var inst_31049 = (state_31099[(12)]);
var inst_31049__$1 = (state_31099[(2)]);
var inst_31050 = cljs.core.get.call(null,inst_31049__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31051 = cljs.core.get.call(null,inst_31049__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31052 = cljs.core.get.call(null,inst_31049__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31099__$1 = (function (){var statearr_31114 = state_31099;
(statearr_31114[(13)] = inst_31051);

(statearr_31114[(9)] = inst_31050);

(statearr_31114[(12)] = inst_31049__$1);

return statearr_31114;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31099__$1,(22),inst_31052);
} else {
if((state_val_31100 === (31))){
var inst_31081 = (state_31099[(2)]);
var state_31099__$1 = state_31099;
if(cljs.core.truth_(inst_31081)){
var statearr_31115_31174 = state_31099__$1;
(statearr_31115_31174[(1)] = (32));

} else {
var statearr_31116_31175 = state_31099__$1;
(statearr_31116_31175[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (32))){
var inst_31058 = (state_31099[(14)]);
var state_31099__$1 = state_31099;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31099__$1,(35),out,inst_31058);
} else {
if((state_val_31100 === (33))){
var inst_31049 = (state_31099[(12)]);
var inst_31027 = inst_31049;
var state_31099__$1 = (function (){var statearr_31117 = state_31099;
(statearr_31117[(7)] = inst_31027);

return statearr_31117;
})();
var statearr_31118_31176 = state_31099__$1;
(statearr_31118_31176[(2)] = null);

(statearr_31118_31176[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (13))){
var inst_31027 = (state_31099[(7)]);
var inst_31034 = inst_31027.cljs$lang$protocol_mask$partition0$;
var inst_31035 = (inst_31034 & (64));
var inst_31036 = inst_31027.cljs$core$ISeq$;
var inst_31037 = (inst_31035) || (inst_31036);
var state_31099__$1 = state_31099;
if(cljs.core.truth_(inst_31037)){
var statearr_31119_31177 = state_31099__$1;
(statearr_31119_31177[(1)] = (16));

} else {
var statearr_31120_31178 = state_31099__$1;
(statearr_31120_31178[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (22))){
var inst_31058 = (state_31099[(14)]);
var inst_31059 = (state_31099[(10)]);
var inst_31057 = (state_31099[(2)]);
var inst_31058__$1 = cljs.core.nth.call(null,inst_31057,(0),null);
var inst_31059__$1 = cljs.core.nth.call(null,inst_31057,(1),null);
var inst_31060 = (inst_31058__$1 == null);
var inst_31061 = cljs.core._EQ_.call(null,inst_31059__$1,change);
var inst_31062 = (inst_31060) || (inst_31061);
var state_31099__$1 = (function (){var statearr_31121 = state_31099;
(statearr_31121[(14)] = inst_31058__$1);

(statearr_31121[(10)] = inst_31059__$1);

return statearr_31121;
})();
if(cljs.core.truth_(inst_31062)){
var statearr_31122_31179 = state_31099__$1;
(statearr_31122_31179[(1)] = (23));

} else {
var statearr_31123_31180 = state_31099__$1;
(statearr_31123_31180[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (36))){
var inst_31049 = (state_31099[(12)]);
var inst_31027 = inst_31049;
var state_31099__$1 = (function (){var statearr_31124 = state_31099;
(statearr_31124[(7)] = inst_31027);

return statearr_31124;
})();
var statearr_31125_31181 = state_31099__$1;
(statearr_31125_31181[(2)] = null);

(statearr_31125_31181[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (29))){
var inst_31073 = (state_31099[(11)]);
var state_31099__$1 = state_31099;
var statearr_31126_31182 = state_31099__$1;
(statearr_31126_31182[(2)] = inst_31073);

(statearr_31126_31182[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (6))){
var state_31099__$1 = state_31099;
var statearr_31127_31183 = state_31099__$1;
(statearr_31127_31183[(2)] = false);

(statearr_31127_31183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (28))){
var inst_31069 = (state_31099[(2)]);
var inst_31070 = calc_state.call(null);
var inst_31027 = inst_31070;
var state_31099__$1 = (function (){var statearr_31128 = state_31099;
(statearr_31128[(15)] = inst_31069);

(statearr_31128[(7)] = inst_31027);

return statearr_31128;
})();
var statearr_31129_31184 = state_31099__$1;
(statearr_31129_31184[(2)] = null);

(statearr_31129_31184[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (25))){
var inst_31095 = (state_31099[(2)]);
var state_31099__$1 = state_31099;
var statearr_31130_31185 = state_31099__$1;
(statearr_31130_31185[(2)] = inst_31095);

(statearr_31130_31185[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (34))){
var inst_31093 = (state_31099[(2)]);
var state_31099__$1 = state_31099;
var statearr_31131_31186 = state_31099__$1;
(statearr_31131_31186[(2)] = inst_31093);

(statearr_31131_31186[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (17))){
var state_31099__$1 = state_31099;
var statearr_31132_31187 = state_31099__$1;
(statearr_31132_31187[(2)] = false);

(statearr_31132_31187[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (3))){
var state_31099__$1 = state_31099;
var statearr_31133_31188 = state_31099__$1;
(statearr_31133_31188[(2)] = false);

(statearr_31133_31188[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (12))){
var inst_31097 = (state_31099[(2)]);
var state_31099__$1 = state_31099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31099__$1,inst_31097);
} else {
if((state_val_31100 === (2))){
var inst_31003 = (state_31099[(8)]);
var inst_31008 = inst_31003.cljs$lang$protocol_mask$partition0$;
var inst_31009 = (inst_31008 & (64));
var inst_31010 = inst_31003.cljs$core$ISeq$;
var inst_31011 = (inst_31009) || (inst_31010);
var state_31099__$1 = state_31099;
if(cljs.core.truth_(inst_31011)){
var statearr_31134_31189 = state_31099__$1;
(statearr_31134_31189[(1)] = (5));

} else {
var statearr_31135_31190 = state_31099__$1;
(statearr_31135_31190[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (23))){
var inst_31058 = (state_31099[(14)]);
var inst_31064 = (inst_31058 == null);
var state_31099__$1 = state_31099;
if(cljs.core.truth_(inst_31064)){
var statearr_31136_31191 = state_31099__$1;
(statearr_31136_31191[(1)] = (26));

} else {
var statearr_31137_31192 = state_31099__$1;
(statearr_31137_31192[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (35))){
var inst_31084 = (state_31099[(2)]);
var state_31099__$1 = state_31099;
if(cljs.core.truth_(inst_31084)){
var statearr_31138_31193 = state_31099__$1;
(statearr_31138_31193[(1)] = (36));

} else {
var statearr_31139_31194 = state_31099__$1;
(statearr_31139_31194[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (19))){
var inst_31027 = (state_31099[(7)]);
var inst_31046 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31027);
var state_31099__$1 = state_31099;
var statearr_31140_31195 = state_31099__$1;
(statearr_31140_31195[(2)] = inst_31046);

(statearr_31140_31195[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (11))){
var inst_31027 = (state_31099[(7)]);
var inst_31031 = (inst_31027 == null);
var inst_31032 = cljs.core.not.call(null,inst_31031);
var state_31099__$1 = state_31099;
if(inst_31032){
var statearr_31141_31196 = state_31099__$1;
(statearr_31141_31196[(1)] = (13));

} else {
var statearr_31142_31197 = state_31099__$1;
(statearr_31142_31197[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (9))){
var inst_31003 = (state_31099[(8)]);
var state_31099__$1 = state_31099;
var statearr_31143_31198 = state_31099__$1;
(statearr_31143_31198[(2)] = inst_31003);

(statearr_31143_31198[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (5))){
var state_31099__$1 = state_31099;
var statearr_31144_31199 = state_31099__$1;
(statearr_31144_31199[(2)] = true);

(statearr_31144_31199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (14))){
var state_31099__$1 = state_31099;
var statearr_31145_31200 = state_31099__$1;
(statearr_31145_31200[(2)] = false);

(statearr_31145_31200[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (26))){
var inst_31059 = (state_31099[(10)]);
var inst_31066 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31059);
var state_31099__$1 = state_31099;
var statearr_31146_31201 = state_31099__$1;
(statearr_31146_31201[(2)] = inst_31066);

(statearr_31146_31201[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (16))){
var state_31099__$1 = state_31099;
var statearr_31147_31202 = state_31099__$1;
(statearr_31147_31202[(2)] = true);

(statearr_31147_31202[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (38))){
var inst_31089 = (state_31099[(2)]);
var state_31099__$1 = state_31099;
var statearr_31148_31203 = state_31099__$1;
(statearr_31148_31203[(2)] = inst_31089);

(statearr_31148_31203[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (30))){
var inst_31051 = (state_31099[(13)]);
var inst_31050 = (state_31099[(9)]);
var inst_31059 = (state_31099[(10)]);
var inst_31076 = cljs.core.empty_QMARK_.call(null,inst_31050);
var inst_31077 = inst_31051.call(null,inst_31059);
var inst_31078 = cljs.core.not.call(null,inst_31077);
var inst_31079 = (inst_31076) && (inst_31078);
var state_31099__$1 = state_31099;
var statearr_31149_31204 = state_31099__$1;
(statearr_31149_31204[(2)] = inst_31079);

(statearr_31149_31204[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (10))){
var inst_31003 = (state_31099[(8)]);
var inst_31023 = (state_31099[(2)]);
var inst_31024 = cljs.core.get.call(null,inst_31023,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31025 = cljs.core.get.call(null,inst_31023,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31026 = cljs.core.get.call(null,inst_31023,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31027 = inst_31003;
var state_31099__$1 = (function (){var statearr_31150 = state_31099;
(statearr_31150[(16)] = inst_31024);

(statearr_31150[(17)] = inst_31026);

(statearr_31150[(18)] = inst_31025);

(statearr_31150[(7)] = inst_31027);

return statearr_31150;
})();
var statearr_31151_31205 = state_31099__$1;
(statearr_31151_31205[(2)] = null);

(statearr_31151_31205[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (18))){
var inst_31041 = (state_31099[(2)]);
var state_31099__$1 = state_31099;
var statearr_31152_31206 = state_31099__$1;
(statearr_31152_31206[(2)] = inst_31041);

(statearr_31152_31206[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (37))){
var state_31099__$1 = state_31099;
var statearr_31153_31207 = state_31099__$1;
(statearr_31153_31207[(2)] = null);

(statearr_31153_31207[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (8))){
var inst_31003 = (state_31099[(8)]);
var inst_31020 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31003);
var state_31099__$1 = state_31099;
var statearr_31154_31208 = state_31099__$1;
(statearr_31154_31208[(2)] = inst_31020);

(statearr_31154_31208[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29429__auto___31162,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29317__auto__,c__29429__auto___31162,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29318__auto__ = null;
var cljs$core$async$mix_$_state_machine__29318__auto____0 = (function (){
var statearr_31158 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31158[(0)] = cljs$core$async$mix_$_state_machine__29318__auto__);

(statearr_31158[(1)] = (1));

return statearr_31158;
});
var cljs$core$async$mix_$_state_machine__29318__auto____1 = (function (state_31099){
while(true){
var ret_value__29319__auto__ = (function (){try{while(true){
var result__29320__auto__ = switch__29317__auto__.call(null,state_31099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29320__auto__;
}
break;
}
}catch (e31159){if((e31159 instanceof Object)){
var ex__29321__auto__ = e31159;
var statearr_31160_31209 = state_31099;
(statearr_31160_31209[(5)] = ex__29321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31159;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31210 = state_31099;
state_31099 = G__31210;
continue;
} else {
return ret_value__29319__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29318__auto__ = function(state_31099){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29318__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29318__auto____1.call(this,state_31099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29318__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29318__auto____0;
cljs$core$async$mix_$_state_machine__29318__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29318__auto____1;
return cljs$core$async$mix_$_state_machine__29318__auto__;
})()
;})(switch__29317__auto__,c__29429__auto___31162,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29431__auto__ = (function (){var statearr_31161 = f__29430__auto__.call(null);
(statearr_31161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29429__auto___31162);

return statearr_31161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29431__auto__);
});})(c__29429__auto___31162,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25728__auto__ = (((p == null))?null:p);
var m__25729__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25728__auto__)]);
if(!((m__25729__auto__ == null))){
return m__25729__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25729__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25729__auto____$1 == null))){
return m__25729__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25728__auto__ = (((p == null))?null:p);
var m__25729__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25728__auto__)]);
if(!((m__25729__auto__ == null))){
return m__25729__auto__.call(null,p,v,ch);
} else {
var m__25729__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25729__auto____$1 == null))){
return m__25729__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args31211 = [];
var len__26140__auto___31214 = arguments.length;
var i__26141__auto___31215 = (0);
while(true){
if((i__26141__auto___31215 < len__26140__auto___31214)){
args31211.push((arguments[i__26141__auto___31215]));

var G__31216 = (i__26141__auto___31215 + (1));
i__26141__auto___31215 = G__31216;
continue;
} else {
}
break;
}

var G__31213 = args31211.length;
switch (G__31213) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31211.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25728__auto__ = (((p == null))?null:p);
var m__25729__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25728__auto__)]);
if(!((m__25729__auto__ == null))){
return m__25729__auto__.call(null,p);
} else {
var m__25729__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25729__auto____$1 == null))){
return m__25729__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25728__auto__ = (((p == null))?null:p);
var m__25729__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25728__auto__)]);
if(!((m__25729__auto__ == null))){
return m__25729__auto__.call(null,p,v);
} else {
var m__25729__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25729__auto____$1 == null))){
return m__25729__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args31219 = [];
var len__26140__auto___31344 = arguments.length;
var i__26141__auto___31345 = (0);
while(true){
if((i__26141__auto___31345 < len__26140__auto___31344)){
args31219.push((arguments[i__26141__auto___31345]));

var G__31346 = (i__26141__auto___31345 + (1));
i__26141__auto___31345 = G__31346;
continue;
} else {
}
break;
}

var G__31221 = args31219.length;
switch (G__31221) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31219.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25065__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25065__auto__)){
return or__25065__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25065__auto__,mults){
return (function (p1__31218_SHARP_){
if(cljs.core.truth_(p1__31218_SHARP_.call(null,topic))){
return p1__31218_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31218_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25065__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31222 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31222 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31223){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31223 = meta31223;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31224,meta31223__$1){
var self__ = this;
var _31224__$1 = this;
return (new cljs.core.async.t_cljs$core$async31222(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31223__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31222.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31224){
var self__ = this;
var _31224__$1 = this;
return self__.meta31223;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31222.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31222.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31222.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async31222.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31222.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31222.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31222.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31222.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31223","meta31223",1023708344,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31222.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31222.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31222";

cljs.core.async.t_cljs$core$async31222.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25671__auto__,writer__25672__auto__,opt__25673__auto__){
return cljs.core._write.call(null,writer__25672__auto__,"cljs.core.async/t_cljs$core$async31222");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31222 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31222(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31223){
return (new cljs.core.async.t_cljs$core$async31222(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31223));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31222(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29429__auto___31348 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29429__auto___31348,mults,ensure_mult,p){
return (function (){
var f__29430__auto__ = (function (){var switch__29317__auto__ = ((function (c__29429__auto___31348,mults,ensure_mult,p){
return (function (state_31296){
var state_val_31297 = (state_31296[(1)]);
if((state_val_31297 === (7))){
var inst_31292 = (state_31296[(2)]);
var state_31296__$1 = state_31296;
var statearr_31298_31349 = state_31296__$1;
(statearr_31298_31349[(2)] = inst_31292);

(statearr_31298_31349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31297 === (20))){
var state_31296__$1 = state_31296;
var statearr_31299_31350 = state_31296__$1;
(statearr_31299_31350[(2)] = null);

(statearr_31299_31350[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31297 === (1))){
var state_31296__$1 = state_31296;
var statearr_31300_31351 = state_31296__$1;
(statearr_31300_31351[(2)] = null);

(statearr_31300_31351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31297 === (24))){
var inst_31275 = (state_31296[(7)]);
var inst_31284 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31275);
var state_31296__$1 = state_31296;
var statearr_31301_31352 = state_31296__$1;
(statearr_31301_31352[(2)] = inst_31284);

(statearr_31301_31352[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31297 === (4))){
var inst_31227 = (state_31296[(8)]);
var inst_31227__$1 = (state_31296[(2)]);
var inst_31228 = (inst_31227__$1 == null);
var state_31296__$1 = (function (){var statearr_31302 = state_31296;
(statearr_31302[(8)] = inst_31227__$1);

return statearr_31302;
})();
if(cljs.core.truth_(inst_31228)){
var statearr_31303_31353 = state_31296__$1;
(statearr_31303_31353[(1)] = (5));

} else {
var statearr_31304_31354 = state_31296__$1;
(statearr_31304_31354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31297 === (15))){
var inst_31269 = (state_31296[(2)]);
var state_31296__$1 = state_31296;
var statearr_31305_31355 = state_31296__$1;
(statearr_31305_31355[(2)] = inst_31269);

(statearr_31305_31355[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31297 === (21))){
var inst_31289 = (state_31296[(2)]);
var state_31296__$1 = (function (){var statearr_31306 = state_31296;
(statearr_31306[(9)] = inst_31289);

return statearr_31306;
})();
var statearr_31307_31356 = state_31296__$1;
(statearr_31307_31356[(2)] = null);

(statearr_31307_31356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31297 === (13))){
var inst_31251 = (state_31296[(10)]);
var inst_31253 = cljs.core.chunked_seq_QMARK_.call(null,inst_31251);
var state_31296__$1 = state_31296;
if(inst_31253){
var statearr_31308_31357 = state_31296__$1;
(statearr_31308_31357[(1)] = (16));

} else {
var statearr_31309_31358 = state_31296__$1;
(statearr_31309_31358[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31297 === (22))){
var inst_31281 = (state_31296[(2)]);
var state_31296__$1 = state_31296;
if(cljs.core.truth_(inst_31281)){
var statearr_31310_31359 = state_31296__$1;
(statearr_31310_31359[(1)] = (23));

} else {
var statearr_31311_31360 = state_31296__$1;
(statearr_31311_31360[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31297 === (6))){
var inst_31277 = (state_31296[(11)]);
var inst_31227 = (state_31296[(8)]);
var inst_31275 = (state_31296[(7)]);
var inst_31275__$1 = topic_fn.call(null,inst_31227);
var inst_31276 = cljs.core.deref.call(null,mults);
var inst_31277__$1 = cljs.core.get.call(null,inst_31276,inst_31275__$1);
var state_31296__$1 = (function (){var statearr_31312 = state_31296;
(statearr_31312[(11)] = inst_31277__$1);

(statearr_31312[(7)] = inst_31275__$1);

return statearr_31312;
})();
if(cljs.core.truth_(inst_31277__$1)){
var statearr_31313_31361 = state_31296__$1;
(statearr_31313_31361[(1)] = (19));

} else {
var statearr_31314_31362 = state_31296__$1;
(statearr_31314_31362[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31297 === (25))){
var inst_31286 = (state_31296[(2)]);
var state_31296__$1 = state_31296;
var statearr_31315_31363 = state_31296__$1;
(statearr_31315_31363[(2)] = inst_31286);

(statearr_31315_31363[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31297 === (17))){
var inst_31251 = (state_31296[(10)]);
var inst_31260 = cljs.core.first.call(null,inst_31251);
var inst_31261 = cljs.core.async.muxch_STAR_.call(null,inst_31260);
var inst_31262 = cljs.core.async.close_BANG_.call(null,inst_31261);
var inst_31263 = cljs.core.next.call(null,inst_31251);
var inst_31237 = inst_31263;
var inst_31238 = null;
var inst_31239 = (0);
var inst_31240 = (0);
var state_31296__$1 = (function (){var statearr_31316 = state_31296;
(statearr_31316[(12)] = inst_31240);

(statearr_31316[(13)] = inst_31238);

(statearr_31316[(14)] = inst_31237);

(statearr_31316[(15)] = inst_31262);

(statearr_31316[(16)] = inst_31239);

return statearr_31316;
})();
var statearr_31317_31364 = state_31296__$1;
(statearr_31317_31364[(2)] = null);

(statearr_31317_31364[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31297 === (3))){
var inst_31294 = (state_31296[(2)]);
var state_31296__$1 = state_31296;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31296__$1,inst_31294);
} else {
if((state_val_31297 === (12))){
var inst_31271 = (state_31296[(2)]);
var state_31296__$1 = state_31296;
var statearr_31318_31365 = state_31296__$1;
(statearr_31318_31365[(2)] = inst_31271);

(statearr_31318_31365[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31297 === (2))){
var state_31296__$1 = state_31296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31296__$1,(4),ch);
} else {
if((state_val_31297 === (23))){
var state_31296__$1 = state_31296;
var statearr_31319_31366 = state_31296__$1;
(statearr_31319_31366[(2)] = null);

(statearr_31319_31366[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31297 === (19))){
var inst_31277 = (state_31296[(11)]);
var inst_31227 = (state_31296[(8)]);
var inst_31279 = cljs.core.async.muxch_STAR_.call(null,inst_31277);
var state_31296__$1 = state_31296;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31296__$1,(22),inst_31279,inst_31227);
} else {
if((state_val_31297 === (11))){
var inst_31251 = (state_31296[(10)]);
var inst_31237 = (state_31296[(14)]);
var inst_31251__$1 = cljs.core.seq.call(null,inst_31237);
var state_31296__$1 = (function (){var statearr_31320 = state_31296;
(statearr_31320[(10)] = inst_31251__$1);

return statearr_31320;
})();
if(inst_31251__$1){
var statearr_31321_31367 = state_31296__$1;
(statearr_31321_31367[(1)] = (13));

} else {
var statearr_31322_31368 = state_31296__$1;
(statearr_31322_31368[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31297 === (9))){
var inst_31273 = (state_31296[(2)]);
var state_31296__$1 = state_31296;
var statearr_31323_31369 = state_31296__$1;
(statearr_31323_31369[(2)] = inst_31273);

(statearr_31323_31369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31297 === (5))){
var inst_31234 = cljs.core.deref.call(null,mults);
var inst_31235 = cljs.core.vals.call(null,inst_31234);
var inst_31236 = cljs.core.seq.call(null,inst_31235);
var inst_31237 = inst_31236;
var inst_31238 = null;
var inst_31239 = (0);
var inst_31240 = (0);
var state_31296__$1 = (function (){var statearr_31324 = state_31296;
(statearr_31324[(12)] = inst_31240);

(statearr_31324[(13)] = inst_31238);

(statearr_31324[(14)] = inst_31237);

(statearr_31324[(16)] = inst_31239);

return statearr_31324;
})();
var statearr_31325_31370 = state_31296__$1;
(statearr_31325_31370[(2)] = null);

(statearr_31325_31370[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31297 === (14))){
var state_31296__$1 = state_31296;
var statearr_31329_31371 = state_31296__$1;
(statearr_31329_31371[(2)] = null);

(statearr_31329_31371[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31297 === (16))){
var inst_31251 = (state_31296[(10)]);
var inst_31255 = cljs.core.chunk_first.call(null,inst_31251);
var inst_31256 = cljs.core.chunk_rest.call(null,inst_31251);
var inst_31257 = cljs.core.count.call(null,inst_31255);
var inst_31237 = inst_31256;
var inst_31238 = inst_31255;
var inst_31239 = inst_31257;
var inst_31240 = (0);
var state_31296__$1 = (function (){var statearr_31330 = state_31296;
(statearr_31330[(12)] = inst_31240);

(statearr_31330[(13)] = inst_31238);

(statearr_31330[(14)] = inst_31237);

(statearr_31330[(16)] = inst_31239);

return statearr_31330;
})();
var statearr_31331_31372 = state_31296__$1;
(statearr_31331_31372[(2)] = null);

(statearr_31331_31372[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31297 === (10))){
var inst_31240 = (state_31296[(12)]);
var inst_31238 = (state_31296[(13)]);
var inst_31237 = (state_31296[(14)]);
var inst_31239 = (state_31296[(16)]);
var inst_31245 = cljs.core._nth.call(null,inst_31238,inst_31240);
var inst_31246 = cljs.core.async.muxch_STAR_.call(null,inst_31245);
var inst_31247 = cljs.core.async.close_BANG_.call(null,inst_31246);
var inst_31248 = (inst_31240 + (1));
var tmp31326 = inst_31238;
var tmp31327 = inst_31237;
var tmp31328 = inst_31239;
var inst_31237__$1 = tmp31327;
var inst_31238__$1 = tmp31326;
var inst_31239__$1 = tmp31328;
var inst_31240__$1 = inst_31248;
var state_31296__$1 = (function (){var statearr_31332 = state_31296;
(statearr_31332[(12)] = inst_31240__$1);

(statearr_31332[(17)] = inst_31247);

(statearr_31332[(13)] = inst_31238__$1);

(statearr_31332[(14)] = inst_31237__$1);

(statearr_31332[(16)] = inst_31239__$1);

return statearr_31332;
})();
var statearr_31333_31373 = state_31296__$1;
(statearr_31333_31373[(2)] = null);

(statearr_31333_31373[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31297 === (18))){
var inst_31266 = (state_31296[(2)]);
var state_31296__$1 = state_31296;
var statearr_31334_31374 = state_31296__$1;
(statearr_31334_31374[(2)] = inst_31266);

(statearr_31334_31374[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31297 === (8))){
var inst_31240 = (state_31296[(12)]);
var inst_31239 = (state_31296[(16)]);
var inst_31242 = (inst_31240 < inst_31239);
var inst_31243 = inst_31242;
var state_31296__$1 = state_31296;
if(cljs.core.truth_(inst_31243)){
var statearr_31335_31375 = state_31296__$1;
(statearr_31335_31375[(1)] = (10));

} else {
var statearr_31336_31376 = state_31296__$1;
(statearr_31336_31376[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29429__auto___31348,mults,ensure_mult,p))
;
return ((function (switch__29317__auto__,c__29429__auto___31348,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29318__auto__ = null;
var cljs$core$async$state_machine__29318__auto____0 = (function (){
var statearr_31340 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31340[(0)] = cljs$core$async$state_machine__29318__auto__);

(statearr_31340[(1)] = (1));

return statearr_31340;
});
var cljs$core$async$state_machine__29318__auto____1 = (function (state_31296){
while(true){
var ret_value__29319__auto__ = (function (){try{while(true){
var result__29320__auto__ = switch__29317__auto__.call(null,state_31296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29320__auto__;
}
break;
}
}catch (e31341){if((e31341 instanceof Object)){
var ex__29321__auto__ = e31341;
var statearr_31342_31377 = state_31296;
(statearr_31342_31377[(5)] = ex__29321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31378 = state_31296;
state_31296 = G__31378;
continue;
} else {
return ret_value__29319__auto__;
}
break;
}
});
cljs$core$async$state_machine__29318__auto__ = function(state_31296){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29318__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29318__auto____1.call(this,state_31296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29318__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29318__auto____0;
cljs$core$async$state_machine__29318__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29318__auto____1;
return cljs$core$async$state_machine__29318__auto__;
})()
;})(switch__29317__auto__,c__29429__auto___31348,mults,ensure_mult,p))
})();
var state__29431__auto__ = (function (){var statearr_31343 = f__29430__auto__.call(null);
(statearr_31343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29429__auto___31348);

return statearr_31343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29431__auto__);
});})(c__29429__auto___31348,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args31379 = [];
var len__26140__auto___31382 = arguments.length;
var i__26141__auto___31383 = (0);
while(true){
if((i__26141__auto___31383 < len__26140__auto___31382)){
args31379.push((arguments[i__26141__auto___31383]));

var G__31384 = (i__26141__auto___31383 + (1));
i__26141__auto___31383 = G__31384;
continue;
} else {
}
break;
}

var G__31381 = args31379.length;
switch (G__31381) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31379.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args31386 = [];
var len__26140__auto___31389 = arguments.length;
var i__26141__auto___31390 = (0);
while(true){
if((i__26141__auto___31390 < len__26140__auto___31389)){
args31386.push((arguments[i__26141__auto___31390]));

var G__31391 = (i__26141__auto___31390 + (1));
i__26141__auto___31390 = G__31391;
continue;
} else {
}
break;
}

var G__31388 = args31386.length;
switch (G__31388) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31386.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args31393 = [];
var len__26140__auto___31464 = arguments.length;
var i__26141__auto___31465 = (0);
while(true){
if((i__26141__auto___31465 < len__26140__auto___31464)){
args31393.push((arguments[i__26141__auto___31465]));

var G__31466 = (i__26141__auto___31465 + (1));
i__26141__auto___31465 = G__31466;
continue;
} else {
}
break;
}

var G__31395 = args31393.length;
switch (G__31395) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31393.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__29429__auto___31468 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29429__auto___31468,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29430__auto__ = (function (){var switch__29317__auto__ = ((function (c__29429__auto___31468,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31434){
var state_val_31435 = (state_31434[(1)]);
if((state_val_31435 === (7))){
var state_31434__$1 = state_31434;
var statearr_31436_31469 = state_31434__$1;
(statearr_31436_31469[(2)] = null);

(statearr_31436_31469[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (1))){
var state_31434__$1 = state_31434;
var statearr_31437_31470 = state_31434__$1;
(statearr_31437_31470[(2)] = null);

(statearr_31437_31470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (4))){
var inst_31398 = (state_31434[(7)]);
var inst_31400 = (inst_31398 < cnt);
var state_31434__$1 = state_31434;
if(cljs.core.truth_(inst_31400)){
var statearr_31438_31471 = state_31434__$1;
(statearr_31438_31471[(1)] = (6));

} else {
var statearr_31439_31472 = state_31434__$1;
(statearr_31439_31472[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (15))){
var inst_31430 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
var statearr_31440_31473 = state_31434__$1;
(statearr_31440_31473[(2)] = inst_31430);

(statearr_31440_31473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (13))){
var inst_31423 = cljs.core.async.close_BANG_.call(null,out);
var state_31434__$1 = state_31434;
var statearr_31441_31474 = state_31434__$1;
(statearr_31441_31474[(2)] = inst_31423);

(statearr_31441_31474[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (6))){
var state_31434__$1 = state_31434;
var statearr_31442_31475 = state_31434__$1;
(statearr_31442_31475[(2)] = null);

(statearr_31442_31475[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (3))){
var inst_31432 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31434__$1,inst_31432);
} else {
if((state_val_31435 === (12))){
var inst_31420 = (state_31434[(8)]);
var inst_31420__$1 = (state_31434[(2)]);
var inst_31421 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31420__$1);
var state_31434__$1 = (function (){var statearr_31443 = state_31434;
(statearr_31443[(8)] = inst_31420__$1);

return statearr_31443;
})();
if(cljs.core.truth_(inst_31421)){
var statearr_31444_31476 = state_31434__$1;
(statearr_31444_31476[(1)] = (13));

} else {
var statearr_31445_31477 = state_31434__$1;
(statearr_31445_31477[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (2))){
var inst_31397 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31398 = (0);
var state_31434__$1 = (function (){var statearr_31446 = state_31434;
(statearr_31446[(9)] = inst_31397);

(statearr_31446[(7)] = inst_31398);

return statearr_31446;
})();
var statearr_31447_31478 = state_31434__$1;
(statearr_31447_31478[(2)] = null);

(statearr_31447_31478[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (11))){
var inst_31398 = (state_31434[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31434,(10),Object,null,(9));
var inst_31407 = chs__$1.call(null,inst_31398);
var inst_31408 = done.call(null,inst_31398);
var inst_31409 = cljs.core.async.take_BANG_.call(null,inst_31407,inst_31408);
var state_31434__$1 = state_31434;
var statearr_31448_31479 = state_31434__$1;
(statearr_31448_31479[(2)] = inst_31409);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31434__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (9))){
var inst_31398 = (state_31434[(7)]);
var inst_31411 = (state_31434[(2)]);
var inst_31412 = (inst_31398 + (1));
var inst_31398__$1 = inst_31412;
var state_31434__$1 = (function (){var statearr_31449 = state_31434;
(statearr_31449[(7)] = inst_31398__$1);

(statearr_31449[(10)] = inst_31411);

return statearr_31449;
})();
var statearr_31450_31480 = state_31434__$1;
(statearr_31450_31480[(2)] = null);

(statearr_31450_31480[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (5))){
var inst_31418 = (state_31434[(2)]);
var state_31434__$1 = (function (){var statearr_31451 = state_31434;
(statearr_31451[(11)] = inst_31418);

return statearr_31451;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31434__$1,(12),dchan);
} else {
if((state_val_31435 === (14))){
var inst_31420 = (state_31434[(8)]);
var inst_31425 = cljs.core.apply.call(null,f,inst_31420);
var state_31434__$1 = state_31434;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31434__$1,(16),out,inst_31425);
} else {
if((state_val_31435 === (16))){
var inst_31427 = (state_31434[(2)]);
var state_31434__$1 = (function (){var statearr_31452 = state_31434;
(statearr_31452[(12)] = inst_31427);

return statearr_31452;
})();
var statearr_31453_31481 = state_31434__$1;
(statearr_31453_31481[(2)] = null);

(statearr_31453_31481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (10))){
var inst_31402 = (state_31434[(2)]);
var inst_31403 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31434__$1 = (function (){var statearr_31454 = state_31434;
(statearr_31454[(13)] = inst_31402);

return statearr_31454;
})();
var statearr_31455_31482 = state_31434__$1;
(statearr_31455_31482[(2)] = inst_31403);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31434__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (8))){
var inst_31416 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
var statearr_31456_31483 = state_31434__$1;
(statearr_31456_31483[(2)] = inst_31416);

(statearr_31456_31483[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29429__auto___31468,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29317__auto__,c__29429__auto___31468,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29318__auto__ = null;
var cljs$core$async$state_machine__29318__auto____0 = (function (){
var statearr_31460 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31460[(0)] = cljs$core$async$state_machine__29318__auto__);

(statearr_31460[(1)] = (1));

return statearr_31460;
});
var cljs$core$async$state_machine__29318__auto____1 = (function (state_31434){
while(true){
var ret_value__29319__auto__ = (function (){try{while(true){
var result__29320__auto__ = switch__29317__auto__.call(null,state_31434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29320__auto__;
}
break;
}
}catch (e31461){if((e31461 instanceof Object)){
var ex__29321__auto__ = e31461;
var statearr_31462_31484 = state_31434;
(statearr_31462_31484[(5)] = ex__29321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31485 = state_31434;
state_31434 = G__31485;
continue;
} else {
return ret_value__29319__auto__;
}
break;
}
});
cljs$core$async$state_machine__29318__auto__ = function(state_31434){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29318__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29318__auto____1.call(this,state_31434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29318__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29318__auto____0;
cljs$core$async$state_machine__29318__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29318__auto____1;
return cljs$core$async$state_machine__29318__auto__;
})()
;})(switch__29317__auto__,c__29429__auto___31468,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29431__auto__ = (function (){var statearr_31463 = f__29430__auto__.call(null);
(statearr_31463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29429__auto___31468);

return statearr_31463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29431__auto__);
});})(c__29429__auto___31468,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args31487 = [];
var len__26140__auto___31545 = arguments.length;
var i__26141__auto___31546 = (0);
while(true){
if((i__26141__auto___31546 < len__26140__auto___31545)){
args31487.push((arguments[i__26141__auto___31546]));

var G__31547 = (i__26141__auto___31546 + (1));
i__26141__auto___31546 = G__31547;
continue;
} else {
}
break;
}

var G__31489 = args31487.length;
switch (G__31489) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31487.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29429__auto___31549 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29429__auto___31549,out){
return (function (){
var f__29430__auto__ = (function (){var switch__29317__auto__ = ((function (c__29429__auto___31549,out){
return (function (state_31521){
var state_val_31522 = (state_31521[(1)]);
if((state_val_31522 === (7))){
var inst_31500 = (state_31521[(7)]);
var inst_31501 = (state_31521[(8)]);
var inst_31500__$1 = (state_31521[(2)]);
var inst_31501__$1 = cljs.core.nth.call(null,inst_31500__$1,(0),null);
var inst_31502 = cljs.core.nth.call(null,inst_31500__$1,(1),null);
var inst_31503 = (inst_31501__$1 == null);
var state_31521__$1 = (function (){var statearr_31523 = state_31521;
(statearr_31523[(7)] = inst_31500__$1);

(statearr_31523[(9)] = inst_31502);

(statearr_31523[(8)] = inst_31501__$1);

return statearr_31523;
})();
if(cljs.core.truth_(inst_31503)){
var statearr_31524_31550 = state_31521__$1;
(statearr_31524_31550[(1)] = (8));

} else {
var statearr_31525_31551 = state_31521__$1;
(statearr_31525_31551[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (1))){
var inst_31490 = cljs.core.vec.call(null,chs);
var inst_31491 = inst_31490;
var state_31521__$1 = (function (){var statearr_31526 = state_31521;
(statearr_31526[(10)] = inst_31491);

return statearr_31526;
})();
var statearr_31527_31552 = state_31521__$1;
(statearr_31527_31552[(2)] = null);

(statearr_31527_31552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (4))){
var inst_31491 = (state_31521[(10)]);
var state_31521__$1 = state_31521;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31521__$1,(7),inst_31491);
} else {
if((state_val_31522 === (6))){
var inst_31517 = (state_31521[(2)]);
var state_31521__$1 = state_31521;
var statearr_31528_31553 = state_31521__$1;
(statearr_31528_31553[(2)] = inst_31517);

(statearr_31528_31553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (3))){
var inst_31519 = (state_31521[(2)]);
var state_31521__$1 = state_31521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31521__$1,inst_31519);
} else {
if((state_val_31522 === (2))){
var inst_31491 = (state_31521[(10)]);
var inst_31493 = cljs.core.count.call(null,inst_31491);
var inst_31494 = (inst_31493 > (0));
var state_31521__$1 = state_31521;
if(cljs.core.truth_(inst_31494)){
var statearr_31530_31554 = state_31521__$1;
(statearr_31530_31554[(1)] = (4));

} else {
var statearr_31531_31555 = state_31521__$1;
(statearr_31531_31555[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (11))){
var inst_31491 = (state_31521[(10)]);
var inst_31510 = (state_31521[(2)]);
var tmp31529 = inst_31491;
var inst_31491__$1 = tmp31529;
var state_31521__$1 = (function (){var statearr_31532 = state_31521;
(statearr_31532[(10)] = inst_31491__$1);

(statearr_31532[(11)] = inst_31510);

return statearr_31532;
})();
var statearr_31533_31556 = state_31521__$1;
(statearr_31533_31556[(2)] = null);

(statearr_31533_31556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (9))){
var inst_31501 = (state_31521[(8)]);
var state_31521__$1 = state_31521;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31521__$1,(11),out,inst_31501);
} else {
if((state_val_31522 === (5))){
var inst_31515 = cljs.core.async.close_BANG_.call(null,out);
var state_31521__$1 = state_31521;
var statearr_31534_31557 = state_31521__$1;
(statearr_31534_31557[(2)] = inst_31515);

(statearr_31534_31557[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (10))){
var inst_31513 = (state_31521[(2)]);
var state_31521__$1 = state_31521;
var statearr_31535_31558 = state_31521__$1;
(statearr_31535_31558[(2)] = inst_31513);

(statearr_31535_31558[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (8))){
var inst_31500 = (state_31521[(7)]);
var inst_31502 = (state_31521[(9)]);
var inst_31491 = (state_31521[(10)]);
var inst_31501 = (state_31521[(8)]);
var inst_31505 = (function (){var cs = inst_31491;
var vec__31496 = inst_31500;
var v = inst_31501;
var c = inst_31502;
return ((function (cs,vec__31496,v,c,inst_31500,inst_31502,inst_31491,inst_31501,state_val_31522,c__29429__auto___31549,out){
return (function (p1__31486_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31486_SHARP_);
});
;})(cs,vec__31496,v,c,inst_31500,inst_31502,inst_31491,inst_31501,state_val_31522,c__29429__auto___31549,out))
})();
var inst_31506 = cljs.core.filterv.call(null,inst_31505,inst_31491);
var inst_31491__$1 = inst_31506;
var state_31521__$1 = (function (){var statearr_31536 = state_31521;
(statearr_31536[(10)] = inst_31491__$1);

return statearr_31536;
})();
var statearr_31537_31559 = state_31521__$1;
(statearr_31537_31559[(2)] = null);

(statearr_31537_31559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__29429__auto___31549,out))
;
return ((function (switch__29317__auto__,c__29429__auto___31549,out){
return (function() {
var cljs$core$async$state_machine__29318__auto__ = null;
var cljs$core$async$state_machine__29318__auto____0 = (function (){
var statearr_31541 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31541[(0)] = cljs$core$async$state_machine__29318__auto__);

(statearr_31541[(1)] = (1));

return statearr_31541;
});
var cljs$core$async$state_machine__29318__auto____1 = (function (state_31521){
while(true){
var ret_value__29319__auto__ = (function (){try{while(true){
var result__29320__auto__ = switch__29317__auto__.call(null,state_31521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29320__auto__;
}
break;
}
}catch (e31542){if((e31542 instanceof Object)){
var ex__29321__auto__ = e31542;
var statearr_31543_31560 = state_31521;
(statearr_31543_31560[(5)] = ex__29321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31561 = state_31521;
state_31521 = G__31561;
continue;
} else {
return ret_value__29319__auto__;
}
break;
}
});
cljs$core$async$state_machine__29318__auto__ = function(state_31521){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29318__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29318__auto____1.call(this,state_31521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29318__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29318__auto____0;
cljs$core$async$state_machine__29318__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29318__auto____1;
return cljs$core$async$state_machine__29318__auto__;
})()
;})(switch__29317__auto__,c__29429__auto___31549,out))
})();
var state__29431__auto__ = (function (){var statearr_31544 = f__29430__auto__.call(null);
(statearr_31544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29429__auto___31549);

return statearr_31544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29431__auto__);
});})(c__29429__auto___31549,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args31562 = [];
var len__26140__auto___31611 = arguments.length;
var i__26141__auto___31612 = (0);
while(true){
if((i__26141__auto___31612 < len__26140__auto___31611)){
args31562.push((arguments[i__26141__auto___31612]));

var G__31613 = (i__26141__auto___31612 + (1));
i__26141__auto___31612 = G__31613;
continue;
} else {
}
break;
}

var G__31564 = args31562.length;
switch (G__31564) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31562.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29429__auto___31615 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29429__auto___31615,out){
return (function (){
var f__29430__auto__ = (function (){var switch__29317__auto__ = ((function (c__29429__auto___31615,out){
return (function (state_31588){
var state_val_31589 = (state_31588[(1)]);
if((state_val_31589 === (7))){
var inst_31570 = (state_31588[(7)]);
var inst_31570__$1 = (state_31588[(2)]);
var inst_31571 = (inst_31570__$1 == null);
var inst_31572 = cljs.core.not.call(null,inst_31571);
var state_31588__$1 = (function (){var statearr_31590 = state_31588;
(statearr_31590[(7)] = inst_31570__$1);

return statearr_31590;
})();
if(inst_31572){
var statearr_31591_31616 = state_31588__$1;
(statearr_31591_31616[(1)] = (8));

} else {
var statearr_31592_31617 = state_31588__$1;
(statearr_31592_31617[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31589 === (1))){
var inst_31565 = (0);
var state_31588__$1 = (function (){var statearr_31593 = state_31588;
(statearr_31593[(8)] = inst_31565);

return statearr_31593;
})();
var statearr_31594_31618 = state_31588__$1;
(statearr_31594_31618[(2)] = null);

(statearr_31594_31618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31589 === (4))){
var state_31588__$1 = state_31588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31588__$1,(7),ch);
} else {
if((state_val_31589 === (6))){
var inst_31583 = (state_31588[(2)]);
var state_31588__$1 = state_31588;
var statearr_31595_31619 = state_31588__$1;
(statearr_31595_31619[(2)] = inst_31583);

(statearr_31595_31619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31589 === (3))){
var inst_31585 = (state_31588[(2)]);
var inst_31586 = cljs.core.async.close_BANG_.call(null,out);
var state_31588__$1 = (function (){var statearr_31596 = state_31588;
(statearr_31596[(9)] = inst_31585);

return statearr_31596;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31588__$1,inst_31586);
} else {
if((state_val_31589 === (2))){
var inst_31565 = (state_31588[(8)]);
var inst_31567 = (inst_31565 < n);
var state_31588__$1 = state_31588;
if(cljs.core.truth_(inst_31567)){
var statearr_31597_31620 = state_31588__$1;
(statearr_31597_31620[(1)] = (4));

} else {
var statearr_31598_31621 = state_31588__$1;
(statearr_31598_31621[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31589 === (11))){
var inst_31565 = (state_31588[(8)]);
var inst_31575 = (state_31588[(2)]);
var inst_31576 = (inst_31565 + (1));
var inst_31565__$1 = inst_31576;
var state_31588__$1 = (function (){var statearr_31599 = state_31588;
(statearr_31599[(10)] = inst_31575);

(statearr_31599[(8)] = inst_31565__$1);

return statearr_31599;
})();
var statearr_31600_31622 = state_31588__$1;
(statearr_31600_31622[(2)] = null);

(statearr_31600_31622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31589 === (9))){
var state_31588__$1 = state_31588;
var statearr_31601_31623 = state_31588__$1;
(statearr_31601_31623[(2)] = null);

(statearr_31601_31623[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31589 === (5))){
var state_31588__$1 = state_31588;
var statearr_31602_31624 = state_31588__$1;
(statearr_31602_31624[(2)] = null);

(statearr_31602_31624[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31589 === (10))){
var inst_31580 = (state_31588[(2)]);
var state_31588__$1 = state_31588;
var statearr_31603_31625 = state_31588__$1;
(statearr_31603_31625[(2)] = inst_31580);

(statearr_31603_31625[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31589 === (8))){
var inst_31570 = (state_31588[(7)]);
var state_31588__$1 = state_31588;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31588__$1,(11),out,inst_31570);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__29429__auto___31615,out))
;
return ((function (switch__29317__auto__,c__29429__auto___31615,out){
return (function() {
var cljs$core$async$state_machine__29318__auto__ = null;
var cljs$core$async$state_machine__29318__auto____0 = (function (){
var statearr_31607 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31607[(0)] = cljs$core$async$state_machine__29318__auto__);

(statearr_31607[(1)] = (1));

return statearr_31607;
});
var cljs$core$async$state_machine__29318__auto____1 = (function (state_31588){
while(true){
var ret_value__29319__auto__ = (function (){try{while(true){
var result__29320__auto__ = switch__29317__auto__.call(null,state_31588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29320__auto__;
}
break;
}
}catch (e31608){if((e31608 instanceof Object)){
var ex__29321__auto__ = e31608;
var statearr_31609_31626 = state_31588;
(statearr_31609_31626[(5)] = ex__29321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31627 = state_31588;
state_31588 = G__31627;
continue;
} else {
return ret_value__29319__auto__;
}
break;
}
});
cljs$core$async$state_machine__29318__auto__ = function(state_31588){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29318__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29318__auto____1.call(this,state_31588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29318__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29318__auto____0;
cljs$core$async$state_machine__29318__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29318__auto____1;
return cljs$core$async$state_machine__29318__auto__;
})()
;})(switch__29317__auto__,c__29429__auto___31615,out))
})();
var state__29431__auto__ = (function (){var statearr_31610 = f__29430__auto__.call(null);
(statearr_31610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29429__auto___31615);

return statearr_31610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29431__auto__);
});})(c__29429__auto___31615,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31635 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31635 = (function (map_LT_,f,ch,meta31636){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31636 = meta31636;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31637,meta31636__$1){
var self__ = this;
var _31637__$1 = this;
return (new cljs.core.async.t_cljs$core$async31635(self__.map_LT_,self__.f,self__.ch,meta31636__$1));
});

cljs.core.async.t_cljs$core$async31635.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31637){
var self__ = this;
var _31637__$1 = this;
return self__.meta31636;
});

cljs.core.async.t_cljs$core$async31635.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31635.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31635.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31635.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31635.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async31638 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31638 = (function (map_LT_,f,ch,meta31636,_,fn1,meta31639){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31636 = meta31636;
this._ = _;
this.fn1 = fn1;
this.meta31639 = meta31639;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31640,meta31639__$1){
var self__ = this;
var _31640__$1 = this;
return (new cljs.core.async.t_cljs$core$async31638(self__.map_LT_,self__.f,self__.ch,self__.meta31636,self__._,self__.fn1,meta31639__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async31638.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31640){
var self__ = this;
var _31640__$1 = this;
return self__.meta31639;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31638.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31638.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31638.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31638.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31628_SHARP_){
return f1.call(null,(((p1__31628_SHARP_ == null))?null:self__.f.call(null,p1__31628_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async31638.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31636","meta31636",1243348639,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31635","cljs.core.async/t_cljs$core$async31635",-1185028885,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31639","meta31639",-2018966934,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31638.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31638.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31638";

cljs.core.async.t_cljs$core$async31638.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25671__auto__,writer__25672__auto__,opt__25673__auto__){
return cljs.core._write.call(null,writer__25672__auto__,"cljs.core.async/t_cljs$core$async31638");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async31638 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31638(map_LT___$1,f__$1,ch__$1,meta31636__$1,___$2,fn1__$1,meta31639){
return (new cljs.core.async.t_cljs$core$async31638(map_LT___$1,f__$1,ch__$1,meta31636__$1,___$2,fn1__$1,meta31639));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async31638(self__.map_LT_,self__.f,self__.ch,self__.meta31636,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25053__auto__ = ret;
if(cljs.core.truth_(and__25053__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25053__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async31635.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31635.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async31635.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31636","meta31636",1243348639,null)], null);
});

cljs.core.async.t_cljs$core$async31635.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31635.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31635";

cljs.core.async.t_cljs$core$async31635.cljs$lang$ctorPrWriter = (function (this__25671__auto__,writer__25672__auto__,opt__25673__auto__){
return cljs.core._write.call(null,writer__25672__auto__,"cljs.core.async/t_cljs$core$async31635");
});

cljs.core.async.__GT_t_cljs$core$async31635 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31635(map_LT___$1,f__$1,ch__$1,meta31636){
return (new cljs.core.async.t_cljs$core$async31635(map_LT___$1,f__$1,ch__$1,meta31636));
});

}

return (new cljs.core.async.t_cljs$core$async31635(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31644 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31644 = (function (map_GT_,f,ch,meta31645){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta31645 = meta31645;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31646,meta31645__$1){
var self__ = this;
var _31646__$1 = this;
return (new cljs.core.async.t_cljs$core$async31644(self__.map_GT_,self__.f,self__.ch,meta31645__$1));
});

cljs.core.async.t_cljs$core$async31644.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31646){
var self__ = this;
var _31646__$1 = this;
return self__.meta31645;
});

cljs.core.async.t_cljs$core$async31644.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31644.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31644.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31644.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31644.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31644.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async31644.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31645","meta31645",1279660761,null)], null);
});

cljs.core.async.t_cljs$core$async31644.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31644.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31644";

cljs.core.async.t_cljs$core$async31644.cljs$lang$ctorPrWriter = (function (this__25671__auto__,writer__25672__auto__,opt__25673__auto__){
return cljs.core._write.call(null,writer__25672__auto__,"cljs.core.async/t_cljs$core$async31644");
});

cljs.core.async.__GT_t_cljs$core$async31644 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31644(map_GT___$1,f__$1,ch__$1,meta31645){
return (new cljs.core.async.t_cljs$core$async31644(map_GT___$1,f__$1,ch__$1,meta31645));
});

}

return (new cljs.core.async.t_cljs$core$async31644(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async31650 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31650 = (function (filter_GT_,p,ch,meta31651){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta31651 = meta31651;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31652,meta31651__$1){
var self__ = this;
var _31652__$1 = this;
return (new cljs.core.async.t_cljs$core$async31650(self__.filter_GT_,self__.p,self__.ch,meta31651__$1));
});

cljs.core.async.t_cljs$core$async31650.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31652){
var self__ = this;
var _31652__$1 = this;
return self__.meta31651;
});

cljs.core.async.t_cljs$core$async31650.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31650.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31650.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31650.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31650.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31650.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31650.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async31650.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31651","meta31651",-1997734691,null)], null);
});

cljs.core.async.t_cljs$core$async31650.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31650.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31650";

cljs.core.async.t_cljs$core$async31650.cljs$lang$ctorPrWriter = (function (this__25671__auto__,writer__25672__auto__,opt__25673__auto__){
return cljs.core._write.call(null,writer__25672__auto__,"cljs.core.async/t_cljs$core$async31650");
});

cljs.core.async.__GT_t_cljs$core$async31650 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31650(filter_GT___$1,p__$1,ch__$1,meta31651){
return (new cljs.core.async.t_cljs$core$async31650(filter_GT___$1,p__$1,ch__$1,meta31651));
});

}

return (new cljs.core.async.t_cljs$core$async31650(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args31653 = [];
var len__26140__auto___31697 = arguments.length;
var i__26141__auto___31698 = (0);
while(true){
if((i__26141__auto___31698 < len__26140__auto___31697)){
args31653.push((arguments[i__26141__auto___31698]));

var G__31699 = (i__26141__auto___31698 + (1));
i__26141__auto___31698 = G__31699;
continue;
} else {
}
break;
}

var G__31655 = args31653.length;
switch (G__31655) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31653.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29429__auto___31701 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29429__auto___31701,out){
return (function (){
var f__29430__auto__ = (function (){var switch__29317__auto__ = ((function (c__29429__auto___31701,out){
return (function (state_31676){
var state_val_31677 = (state_31676[(1)]);
if((state_val_31677 === (7))){
var inst_31672 = (state_31676[(2)]);
var state_31676__$1 = state_31676;
var statearr_31678_31702 = state_31676__$1;
(statearr_31678_31702[(2)] = inst_31672);

(statearr_31678_31702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31677 === (1))){
var state_31676__$1 = state_31676;
var statearr_31679_31703 = state_31676__$1;
(statearr_31679_31703[(2)] = null);

(statearr_31679_31703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31677 === (4))){
var inst_31658 = (state_31676[(7)]);
var inst_31658__$1 = (state_31676[(2)]);
var inst_31659 = (inst_31658__$1 == null);
var state_31676__$1 = (function (){var statearr_31680 = state_31676;
(statearr_31680[(7)] = inst_31658__$1);

return statearr_31680;
})();
if(cljs.core.truth_(inst_31659)){
var statearr_31681_31704 = state_31676__$1;
(statearr_31681_31704[(1)] = (5));

} else {
var statearr_31682_31705 = state_31676__$1;
(statearr_31682_31705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31677 === (6))){
var inst_31658 = (state_31676[(7)]);
var inst_31663 = p.call(null,inst_31658);
var state_31676__$1 = state_31676;
if(cljs.core.truth_(inst_31663)){
var statearr_31683_31706 = state_31676__$1;
(statearr_31683_31706[(1)] = (8));

} else {
var statearr_31684_31707 = state_31676__$1;
(statearr_31684_31707[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31677 === (3))){
var inst_31674 = (state_31676[(2)]);
var state_31676__$1 = state_31676;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31676__$1,inst_31674);
} else {
if((state_val_31677 === (2))){
var state_31676__$1 = state_31676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31676__$1,(4),ch);
} else {
if((state_val_31677 === (11))){
var inst_31666 = (state_31676[(2)]);
var state_31676__$1 = state_31676;
var statearr_31685_31708 = state_31676__$1;
(statearr_31685_31708[(2)] = inst_31666);

(statearr_31685_31708[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31677 === (9))){
var state_31676__$1 = state_31676;
var statearr_31686_31709 = state_31676__$1;
(statearr_31686_31709[(2)] = null);

(statearr_31686_31709[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31677 === (5))){
var inst_31661 = cljs.core.async.close_BANG_.call(null,out);
var state_31676__$1 = state_31676;
var statearr_31687_31710 = state_31676__$1;
(statearr_31687_31710[(2)] = inst_31661);

(statearr_31687_31710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31677 === (10))){
var inst_31669 = (state_31676[(2)]);
var state_31676__$1 = (function (){var statearr_31688 = state_31676;
(statearr_31688[(8)] = inst_31669);

return statearr_31688;
})();
var statearr_31689_31711 = state_31676__$1;
(statearr_31689_31711[(2)] = null);

(statearr_31689_31711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31677 === (8))){
var inst_31658 = (state_31676[(7)]);
var state_31676__$1 = state_31676;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31676__$1,(11),out,inst_31658);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__29429__auto___31701,out))
;
return ((function (switch__29317__auto__,c__29429__auto___31701,out){
return (function() {
var cljs$core$async$state_machine__29318__auto__ = null;
var cljs$core$async$state_machine__29318__auto____0 = (function (){
var statearr_31693 = [null,null,null,null,null,null,null,null,null];
(statearr_31693[(0)] = cljs$core$async$state_machine__29318__auto__);

(statearr_31693[(1)] = (1));

return statearr_31693;
});
var cljs$core$async$state_machine__29318__auto____1 = (function (state_31676){
while(true){
var ret_value__29319__auto__ = (function (){try{while(true){
var result__29320__auto__ = switch__29317__auto__.call(null,state_31676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29320__auto__;
}
break;
}
}catch (e31694){if((e31694 instanceof Object)){
var ex__29321__auto__ = e31694;
var statearr_31695_31712 = state_31676;
(statearr_31695_31712[(5)] = ex__29321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31713 = state_31676;
state_31676 = G__31713;
continue;
} else {
return ret_value__29319__auto__;
}
break;
}
});
cljs$core$async$state_machine__29318__auto__ = function(state_31676){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29318__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29318__auto____1.call(this,state_31676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29318__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29318__auto____0;
cljs$core$async$state_machine__29318__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29318__auto____1;
return cljs$core$async$state_machine__29318__auto__;
})()
;})(switch__29317__auto__,c__29429__auto___31701,out))
})();
var state__29431__auto__ = (function (){var statearr_31696 = f__29430__auto__.call(null);
(statearr_31696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29429__auto___31701);

return statearr_31696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29431__auto__);
});})(c__29429__auto___31701,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args31714 = [];
var len__26140__auto___31717 = arguments.length;
var i__26141__auto___31718 = (0);
while(true){
if((i__26141__auto___31718 < len__26140__auto___31717)){
args31714.push((arguments[i__26141__auto___31718]));

var G__31719 = (i__26141__auto___31718 + (1));
i__26141__auto___31718 = G__31719;
continue;
} else {
}
break;
}

var G__31716 = args31714.length;
switch (G__31716) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31714.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29429__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29429__auto__){
return (function (){
var f__29430__auto__ = (function (){var switch__29317__auto__ = ((function (c__29429__auto__){
return (function (state_31886){
var state_val_31887 = (state_31886[(1)]);
if((state_val_31887 === (7))){
var inst_31882 = (state_31886[(2)]);
var state_31886__$1 = state_31886;
var statearr_31888_31929 = state_31886__$1;
(statearr_31888_31929[(2)] = inst_31882);

(statearr_31888_31929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31887 === (20))){
var inst_31852 = (state_31886[(7)]);
var inst_31863 = (state_31886[(2)]);
var inst_31864 = cljs.core.next.call(null,inst_31852);
var inst_31838 = inst_31864;
var inst_31839 = null;
var inst_31840 = (0);
var inst_31841 = (0);
var state_31886__$1 = (function (){var statearr_31889 = state_31886;
(statearr_31889[(8)] = inst_31863);

(statearr_31889[(9)] = inst_31838);

(statearr_31889[(10)] = inst_31839);

(statearr_31889[(11)] = inst_31840);

(statearr_31889[(12)] = inst_31841);

return statearr_31889;
})();
var statearr_31890_31930 = state_31886__$1;
(statearr_31890_31930[(2)] = null);

(statearr_31890_31930[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31887 === (1))){
var state_31886__$1 = state_31886;
var statearr_31891_31931 = state_31886__$1;
(statearr_31891_31931[(2)] = null);

(statearr_31891_31931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31887 === (4))){
var inst_31827 = (state_31886[(13)]);
var inst_31827__$1 = (state_31886[(2)]);
var inst_31828 = (inst_31827__$1 == null);
var state_31886__$1 = (function (){var statearr_31892 = state_31886;
(statearr_31892[(13)] = inst_31827__$1);

return statearr_31892;
})();
if(cljs.core.truth_(inst_31828)){
var statearr_31893_31932 = state_31886__$1;
(statearr_31893_31932[(1)] = (5));

} else {
var statearr_31894_31933 = state_31886__$1;
(statearr_31894_31933[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31887 === (15))){
var state_31886__$1 = state_31886;
var statearr_31898_31934 = state_31886__$1;
(statearr_31898_31934[(2)] = null);

(statearr_31898_31934[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31887 === (21))){
var state_31886__$1 = state_31886;
var statearr_31899_31935 = state_31886__$1;
(statearr_31899_31935[(2)] = null);

(statearr_31899_31935[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31887 === (13))){
var inst_31838 = (state_31886[(9)]);
var inst_31839 = (state_31886[(10)]);
var inst_31840 = (state_31886[(11)]);
var inst_31841 = (state_31886[(12)]);
var inst_31848 = (state_31886[(2)]);
var inst_31849 = (inst_31841 + (1));
var tmp31895 = inst_31838;
var tmp31896 = inst_31839;
var tmp31897 = inst_31840;
var inst_31838__$1 = tmp31895;
var inst_31839__$1 = tmp31896;
var inst_31840__$1 = tmp31897;
var inst_31841__$1 = inst_31849;
var state_31886__$1 = (function (){var statearr_31900 = state_31886;
(statearr_31900[(9)] = inst_31838__$1);

(statearr_31900[(10)] = inst_31839__$1);

(statearr_31900[(11)] = inst_31840__$1);

(statearr_31900[(12)] = inst_31841__$1);

(statearr_31900[(14)] = inst_31848);

return statearr_31900;
})();
var statearr_31901_31936 = state_31886__$1;
(statearr_31901_31936[(2)] = null);

(statearr_31901_31936[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31887 === (22))){
var state_31886__$1 = state_31886;
var statearr_31902_31937 = state_31886__$1;
(statearr_31902_31937[(2)] = null);

(statearr_31902_31937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31887 === (6))){
var inst_31827 = (state_31886[(13)]);
var inst_31836 = f.call(null,inst_31827);
var inst_31837 = cljs.core.seq.call(null,inst_31836);
var inst_31838 = inst_31837;
var inst_31839 = null;
var inst_31840 = (0);
var inst_31841 = (0);
var state_31886__$1 = (function (){var statearr_31903 = state_31886;
(statearr_31903[(9)] = inst_31838);

(statearr_31903[(10)] = inst_31839);

(statearr_31903[(11)] = inst_31840);

(statearr_31903[(12)] = inst_31841);

return statearr_31903;
})();
var statearr_31904_31938 = state_31886__$1;
(statearr_31904_31938[(2)] = null);

(statearr_31904_31938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31887 === (17))){
var inst_31852 = (state_31886[(7)]);
var inst_31856 = cljs.core.chunk_first.call(null,inst_31852);
var inst_31857 = cljs.core.chunk_rest.call(null,inst_31852);
var inst_31858 = cljs.core.count.call(null,inst_31856);
var inst_31838 = inst_31857;
var inst_31839 = inst_31856;
var inst_31840 = inst_31858;
var inst_31841 = (0);
var state_31886__$1 = (function (){var statearr_31905 = state_31886;
(statearr_31905[(9)] = inst_31838);

(statearr_31905[(10)] = inst_31839);

(statearr_31905[(11)] = inst_31840);

(statearr_31905[(12)] = inst_31841);

return statearr_31905;
})();
var statearr_31906_31939 = state_31886__$1;
(statearr_31906_31939[(2)] = null);

(statearr_31906_31939[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31887 === (3))){
var inst_31884 = (state_31886[(2)]);
var state_31886__$1 = state_31886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31886__$1,inst_31884);
} else {
if((state_val_31887 === (12))){
var inst_31872 = (state_31886[(2)]);
var state_31886__$1 = state_31886;
var statearr_31907_31940 = state_31886__$1;
(statearr_31907_31940[(2)] = inst_31872);

(statearr_31907_31940[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31887 === (2))){
var state_31886__$1 = state_31886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31886__$1,(4),in$);
} else {
if((state_val_31887 === (23))){
var inst_31880 = (state_31886[(2)]);
var state_31886__$1 = state_31886;
var statearr_31908_31941 = state_31886__$1;
(statearr_31908_31941[(2)] = inst_31880);

(statearr_31908_31941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31887 === (19))){
var inst_31867 = (state_31886[(2)]);
var state_31886__$1 = state_31886;
var statearr_31909_31942 = state_31886__$1;
(statearr_31909_31942[(2)] = inst_31867);

(statearr_31909_31942[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31887 === (11))){
var inst_31852 = (state_31886[(7)]);
var inst_31838 = (state_31886[(9)]);
var inst_31852__$1 = cljs.core.seq.call(null,inst_31838);
var state_31886__$1 = (function (){var statearr_31910 = state_31886;
(statearr_31910[(7)] = inst_31852__$1);

return statearr_31910;
})();
if(inst_31852__$1){
var statearr_31911_31943 = state_31886__$1;
(statearr_31911_31943[(1)] = (14));

} else {
var statearr_31912_31944 = state_31886__$1;
(statearr_31912_31944[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31887 === (9))){
var inst_31874 = (state_31886[(2)]);
var inst_31875 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31886__$1 = (function (){var statearr_31913 = state_31886;
(statearr_31913[(15)] = inst_31874);

return statearr_31913;
})();
if(cljs.core.truth_(inst_31875)){
var statearr_31914_31945 = state_31886__$1;
(statearr_31914_31945[(1)] = (21));

} else {
var statearr_31915_31946 = state_31886__$1;
(statearr_31915_31946[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31887 === (5))){
var inst_31830 = cljs.core.async.close_BANG_.call(null,out);
var state_31886__$1 = state_31886;
var statearr_31916_31947 = state_31886__$1;
(statearr_31916_31947[(2)] = inst_31830);

(statearr_31916_31947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31887 === (14))){
var inst_31852 = (state_31886[(7)]);
var inst_31854 = cljs.core.chunked_seq_QMARK_.call(null,inst_31852);
var state_31886__$1 = state_31886;
if(inst_31854){
var statearr_31917_31948 = state_31886__$1;
(statearr_31917_31948[(1)] = (17));

} else {
var statearr_31918_31949 = state_31886__$1;
(statearr_31918_31949[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31887 === (16))){
var inst_31870 = (state_31886[(2)]);
var state_31886__$1 = state_31886;
var statearr_31919_31950 = state_31886__$1;
(statearr_31919_31950[(2)] = inst_31870);

(statearr_31919_31950[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31887 === (10))){
var inst_31839 = (state_31886[(10)]);
var inst_31841 = (state_31886[(12)]);
var inst_31846 = cljs.core._nth.call(null,inst_31839,inst_31841);
var state_31886__$1 = state_31886;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31886__$1,(13),out,inst_31846);
} else {
if((state_val_31887 === (18))){
var inst_31852 = (state_31886[(7)]);
var inst_31861 = cljs.core.first.call(null,inst_31852);
var state_31886__$1 = state_31886;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31886__$1,(20),out,inst_31861);
} else {
if((state_val_31887 === (8))){
var inst_31840 = (state_31886[(11)]);
var inst_31841 = (state_31886[(12)]);
var inst_31843 = (inst_31841 < inst_31840);
var inst_31844 = inst_31843;
var state_31886__$1 = state_31886;
if(cljs.core.truth_(inst_31844)){
var statearr_31920_31951 = state_31886__$1;
(statearr_31920_31951[(1)] = (10));

} else {
var statearr_31921_31952 = state_31886__$1;
(statearr_31921_31952[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29429__auto__))
;
return ((function (switch__29317__auto__,c__29429__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29318__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29318__auto____0 = (function (){
var statearr_31925 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31925[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29318__auto__);

(statearr_31925[(1)] = (1));

return statearr_31925;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29318__auto____1 = (function (state_31886){
while(true){
var ret_value__29319__auto__ = (function (){try{while(true){
var result__29320__auto__ = switch__29317__auto__.call(null,state_31886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29320__auto__;
}
break;
}
}catch (e31926){if((e31926 instanceof Object)){
var ex__29321__auto__ = e31926;
var statearr_31927_31953 = state_31886;
(statearr_31927_31953[(5)] = ex__29321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31954 = state_31886;
state_31886 = G__31954;
continue;
} else {
return ret_value__29319__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29318__auto__ = function(state_31886){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29318__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29318__auto____1.call(this,state_31886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29318__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29318__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29318__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29318__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29318__auto__;
})()
;})(switch__29317__auto__,c__29429__auto__))
})();
var state__29431__auto__ = (function (){var statearr_31928 = f__29430__auto__.call(null);
(statearr_31928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29429__auto__);

return statearr_31928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29431__auto__);
});})(c__29429__auto__))
);

return c__29429__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args31955 = [];
var len__26140__auto___31958 = arguments.length;
var i__26141__auto___31959 = (0);
while(true){
if((i__26141__auto___31959 < len__26140__auto___31958)){
args31955.push((arguments[i__26141__auto___31959]));

var G__31960 = (i__26141__auto___31959 + (1));
i__26141__auto___31959 = G__31960;
continue;
} else {
}
break;
}

var G__31957 = args31955.length;
switch (G__31957) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31955.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args31962 = [];
var len__26140__auto___31965 = arguments.length;
var i__26141__auto___31966 = (0);
while(true){
if((i__26141__auto___31966 < len__26140__auto___31965)){
args31962.push((arguments[i__26141__auto___31966]));

var G__31967 = (i__26141__auto___31966 + (1));
i__26141__auto___31966 = G__31967;
continue;
} else {
}
break;
}

var G__31964 = args31962.length;
switch (G__31964) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31962.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args31969 = [];
var len__26140__auto___32020 = arguments.length;
var i__26141__auto___32021 = (0);
while(true){
if((i__26141__auto___32021 < len__26140__auto___32020)){
args31969.push((arguments[i__26141__auto___32021]));

var G__32022 = (i__26141__auto___32021 + (1));
i__26141__auto___32021 = G__32022;
continue;
} else {
}
break;
}

var G__31971 = args31969.length;
switch (G__31971) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31969.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29429__auto___32024 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29429__auto___32024,out){
return (function (){
var f__29430__auto__ = (function (){var switch__29317__auto__ = ((function (c__29429__auto___32024,out){
return (function (state_31995){
var state_val_31996 = (state_31995[(1)]);
if((state_val_31996 === (7))){
var inst_31990 = (state_31995[(2)]);
var state_31995__$1 = state_31995;
var statearr_31997_32025 = state_31995__$1;
(statearr_31997_32025[(2)] = inst_31990);

(statearr_31997_32025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31996 === (1))){
var inst_31972 = null;
var state_31995__$1 = (function (){var statearr_31998 = state_31995;
(statearr_31998[(7)] = inst_31972);

return statearr_31998;
})();
var statearr_31999_32026 = state_31995__$1;
(statearr_31999_32026[(2)] = null);

(statearr_31999_32026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31996 === (4))){
var inst_31975 = (state_31995[(8)]);
var inst_31975__$1 = (state_31995[(2)]);
var inst_31976 = (inst_31975__$1 == null);
var inst_31977 = cljs.core.not.call(null,inst_31976);
var state_31995__$1 = (function (){var statearr_32000 = state_31995;
(statearr_32000[(8)] = inst_31975__$1);

return statearr_32000;
})();
if(inst_31977){
var statearr_32001_32027 = state_31995__$1;
(statearr_32001_32027[(1)] = (5));

} else {
var statearr_32002_32028 = state_31995__$1;
(statearr_32002_32028[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31996 === (6))){
var state_31995__$1 = state_31995;
var statearr_32003_32029 = state_31995__$1;
(statearr_32003_32029[(2)] = null);

(statearr_32003_32029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31996 === (3))){
var inst_31992 = (state_31995[(2)]);
var inst_31993 = cljs.core.async.close_BANG_.call(null,out);
var state_31995__$1 = (function (){var statearr_32004 = state_31995;
(statearr_32004[(9)] = inst_31992);

return statearr_32004;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31995__$1,inst_31993);
} else {
if((state_val_31996 === (2))){
var state_31995__$1 = state_31995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31995__$1,(4),ch);
} else {
if((state_val_31996 === (11))){
var inst_31975 = (state_31995[(8)]);
var inst_31984 = (state_31995[(2)]);
var inst_31972 = inst_31975;
var state_31995__$1 = (function (){var statearr_32005 = state_31995;
(statearr_32005[(10)] = inst_31984);

(statearr_32005[(7)] = inst_31972);

return statearr_32005;
})();
var statearr_32006_32030 = state_31995__$1;
(statearr_32006_32030[(2)] = null);

(statearr_32006_32030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31996 === (9))){
var inst_31975 = (state_31995[(8)]);
var state_31995__$1 = state_31995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31995__$1,(11),out,inst_31975);
} else {
if((state_val_31996 === (5))){
var inst_31975 = (state_31995[(8)]);
var inst_31972 = (state_31995[(7)]);
var inst_31979 = cljs.core._EQ_.call(null,inst_31975,inst_31972);
var state_31995__$1 = state_31995;
if(inst_31979){
var statearr_32008_32031 = state_31995__$1;
(statearr_32008_32031[(1)] = (8));

} else {
var statearr_32009_32032 = state_31995__$1;
(statearr_32009_32032[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31996 === (10))){
var inst_31987 = (state_31995[(2)]);
var state_31995__$1 = state_31995;
var statearr_32010_32033 = state_31995__$1;
(statearr_32010_32033[(2)] = inst_31987);

(statearr_32010_32033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31996 === (8))){
var inst_31972 = (state_31995[(7)]);
var tmp32007 = inst_31972;
var inst_31972__$1 = tmp32007;
var state_31995__$1 = (function (){var statearr_32011 = state_31995;
(statearr_32011[(7)] = inst_31972__$1);

return statearr_32011;
})();
var statearr_32012_32034 = state_31995__$1;
(statearr_32012_32034[(2)] = null);

(statearr_32012_32034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__29429__auto___32024,out))
;
return ((function (switch__29317__auto__,c__29429__auto___32024,out){
return (function() {
var cljs$core$async$state_machine__29318__auto__ = null;
var cljs$core$async$state_machine__29318__auto____0 = (function (){
var statearr_32016 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32016[(0)] = cljs$core$async$state_machine__29318__auto__);

(statearr_32016[(1)] = (1));

return statearr_32016;
});
var cljs$core$async$state_machine__29318__auto____1 = (function (state_31995){
while(true){
var ret_value__29319__auto__ = (function (){try{while(true){
var result__29320__auto__ = switch__29317__auto__.call(null,state_31995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29320__auto__;
}
break;
}
}catch (e32017){if((e32017 instanceof Object)){
var ex__29321__auto__ = e32017;
var statearr_32018_32035 = state_31995;
(statearr_32018_32035[(5)] = ex__29321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32017;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32036 = state_31995;
state_31995 = G__32036;
continue;
} else {
return ret_value__29319__auto__;
}
break;
}
});
cljs$core$async$state_machine__29318__auto__ = function(state_31995){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29318__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29318__auto____1.call(this,state_31995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29318__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29318__auto____0;
cljs$core$async$state_machine__29318__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29318__auto____1;
return cljs$core$async$state_machine__29318__auto__;
})()
;})(switch__29317__auto__,c__29429__auto___32024,out))
})();
var state__29431__auto__ = (function (){var statearr_32019 = f__29430__auto__.call(null);
(statearr_32019[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29429__auto___32024);

return statearr_32019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29431__auto__);
});})(c__29429__auto___32024,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args32037 = [];
var len__26140__auto___32107 = arguments.length;
var i__26141__auto___32108 = (0);
while(true){
if((i__26141__auto___32108 < len__26140__auto___32107)){
args32037.push((arguments[i__26141__auto___32108]));

var G__32109 = (i__26141__auto___32108 + (1));
i__26141__auto___32108 = G__32109;
continue;
} else {
}
break;
}

var G__32039 = args32037.length;
switch (G__32039) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32037.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29429__auto___32111 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29429__auto___32111,out){
return (function (){
var f__29430__auto__ = (function (){var switch__29317__auto__ = ((function (c__29429__auto___32111,out){
return (function (state_32077){
var state_val_32078 = (state_32077[(1)]);
if((state_val_32078 === (7))){
var inst_32073 = (state_32077[(2)]);
var state_32077__$1 = state_32077;
var statearr_32079_32112 = state_32077__$1;
(statearr_32079_32112[(2)] = inst_32073);

(statearr_32079_32112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (1))){
var inst_32040 = (new Array(n));
var inst_32041 = inst_32040;
var inst_32042 = (0);
var state_32077__$1 = (function (){var statearr_32080 = state_32077;
(statearr_32080[(7)] = inst_32042);

(statearr_32080[(8)] = inst_32041);

return statearr_32080;
})();
var statearr_32081_32113 = state_32077__$1;
(statearr_32081_32113[(2)] = null);

(statearr_32081_32113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (4))){
var inst_32045 = (state_32077[(9)]);
var inst_32045__$1 = (state_32077[(2)]);
var inst_32046 = (inst_32045__$1 == null);
var inst_32047 = cljs.core.not.call(null,inst_32046);
var state_32077__$1 = (function (){var statearr_32082 = state_32077;
(statearr_32082[(9)] = inst_32045__$1);

return statearr_32082;
})();
if(inst_32047){
var statearr_32083_32114 = state_32077__$1;
(statearr_32083_32114[(1)] = (5));

} else {
var statearr_32084_32115 = state_32077__$1;
(statearr_32084_32115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (15))){
var inst_32067 = (state_32077[(2)]);
var state_32077__$1 = state_32077;
var statearr_32085_32116 = state_32077__$1;
(statearr_32085_32116[(2)] = inst_32067);

(statearr_32085_32116[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (13))){
var state_32077__$1 = state_32077;
var statearr_32086_32117 = state_32077__$1;
(statearr_32086_32117[(2)] = null);

(statearr_32086_32117[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (6))){
var inst_32042 = (state_32077[(7)]);
var inst_32063 = (inst_32042 > (0));
var state_32077__$1 = state_32077;
if(cljs.core.truth_(inst_32063)){
var statearr_32087_32118 = state_32077__$1;
(statearr_32087_32118[(1)] = (12));

} else {
var statearr_32088_32119 = state_32077__$1;
(statearr_32088_32119[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (3))){
var inst_32075 = (state_32077[(2)]);
var state_32077__$1 = state_32077;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32077__$1,inst_32075);
} else {
if((state_val_32078 === (12))){
var inst_32041 = (state_32077[(8)]);
var inst_32065 = cljs.core.vec.call(null,inst_32041);
var state_32077__$1 = state_32077;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32077__$1,(15),out,inst_32065);
} else {
if((state_val_32078 === (2))){
var state_32077__$1 = state_32077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32077__$1,(4),ch);
} else {
if((state_val_32078 === (11))){
var inst_32057 = (state_32077[(2)]);
var inst_32058 = (new Array(n));
var inst_32041 = inst_32058;
var inst_32042 = (0);
var state_32077__$1 = (function (){var statearr_32089 = state_32077;
(statearr_32089[(10)] = inst_32057);

(statearr_32089[(7)] = inst_32042);

(statearr_32089[(8)] = inst_32041);

return statearr_32089;
})();
var statearr_32090_32120 = state_32077__$1;
(statearr_32090_32120[(2)] = null);

(statearr_32090_32120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (9))){
var inst_32041 = (state_32077[(8)]);
var inst_32055 = cljs.core.vec.call(null,inst_32041);
var state_32077__$1 = state_32077;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32077__$1,(11),out,inst_32055);
} else {
if((state_val_32078 === (5))){
var inst_32050 = (state_32077[(11)]);
var inst_32042 = (state_32077[(7)]);
var inst_32041 = (state_32077[(8)]);
var inst_32045 = (state_32077[(9)]);
var inst_32049 = (inst_32041[inst_32042] = inst_32045);
var inst_32050__$1 = (inst_32042 + (1));
var inst_32051 = (inst_32050__$1 < n);
var state_32077__$1 = (function (){var statearr_32091 = state_32077;
(statearr_32091[(11)] = inst_32050__$1);

(statearr_32091[(12)] = inst_32049);

return statearr_32091;
})();
if(cljs.core.truth_(inst_32051)){
var statearr_32092_32121 = state_32077__$1;
(statearr_32092_32121[(1)] = (8));

} else {
var statearr_32093_32122 = state_32077__$1;
(statearr_32093_32122[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (14))){
var inst_32070 = (state_32077[(2)]);
var inst_32071 = cljs.core.async.close_BANG_.call(null,out);
var state_32077__$1 = (function (){var statearr_32095 = state_32077;
(statearr_32095[(13)] = inst_32070);

return statearr_32095;
})();
var statearr_32096_32123 = state_32077__$1;
(statearr_32096_32123[(2)] = inst_32071);

(statearr_32096_32123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (10))){
var inst_32061 = (state_32077[(2)]);
var state_32077__$1 = state_32077;
var statearr_32097_32124 = state_32077__$1;
(statearr_32097_32124[(2)] = inst_32061);

(statearr_32097_32124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (8))){
var inst_32050 = (state_32077[(11)]);
var inst_32041 = (state_32077[(8)]);
var tmp32094 = inst_32041;
var inst_32041__$1 = tmp32094;
var inst_32042 = inst_32050;
var state_32077__$1 = (function (){var statearr_32098 = state_32077;
(statearr_32098[(7)] = inst_32042);

(statearr_32098[(8)] = inst_32041__$1);

return statearr_32098;
})();
var statearr_32099_32125 = state_32077__$1;
(statearr_32099_32125[(2)] = null);

(statearr_32099_32125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29429__auto___32111,out))
;
return ((function (switch__29317__auto__,c__29429__auto___32111,out){
return (function() {
var cljs$core$async$state_machine__29318__auto__ = null;
var cljs$core$async$state_machine__29318__auto____0 = (function (){
var statearr_32103 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32103[(0)] = cljs$core$async$state_machine__29318__auto__);

(statearr_32103[(1)] = (1));

return statearr_32103;
});
var cljs$core$async$state_machine__29318__auto____1 = (function (state_32077){
while(true){
var ret_value__29319__auto__ = (function (){try{while(true){
var result__29320__auto__ = switch__29317__auto__.call(null,state_32077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29320__auto__;
}
break;
}
}catch (e32104){if((e32104 instanceof Object)){
var ex__29321__auto__ = e32104;
var statearr_32105_32126 = state_32077;
(statearr_32105_32126[(5)] = ex__29321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32127 = state_32077;
state_32077 = G__32127;
continue;
} else {
return ret_value__29319__auto__;
}
break;
}
});
cljs$core$async$state_machine__29318__auto__ = function(state_32077){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29318__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29318__auto____1.call(this,state_32077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29318__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29318__auto____0;
cljs$core$async$state_machine__29318__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29318__auto____1;
return cljs$core$async$state_machine__29318__auto__;
})()
;})(switch__29317__auto__,c__29429__auto___32111,out))
})();
var state__29431__auto__ = (function (){var statearr_32106 = f__29430__auto__.call(null);
(statearr_32106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29429__auto___32111);

return statearr_32106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29431__auto__);
});})(c__29429__auto___32111,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args32128 = [];
var len__26140__auto___32202 = arguments.length;
var i__26141__auto___32203 = (0);
while(true){
if((i__26141__auto___32203 < len__26140__auto___32202)){
args32128.push((arguments[i__26141__auto___32203]));

var G__32204 = (i__26141__auto___32203 + (1));
i__26141__auto___32203 = G__32204;
continue;
} else {
}
break;
}

var G__32130 = args32128.length;
switch (G__32130) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32128.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29429__auto___32206 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29429__auto___32206,out){
return (function (){
var f__29430__auto__ = (function (){var switch__29317__auto__ = ((function (c__29429__auto___32206,out){
return (function (state_32172){
var state_val_32173 = (state_32172[(1)]);
if((state_val_32173 === (7))){
var inst_32168 = (state_32172[(2)]);
var state_32172__$1 = state_32172;
var statearr_32174_32207 = state_32172__$1;
(statearr_32174_32207[(2)] = inst_32168);

(statearr_32174_32207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32173 === (1))){
var inst_32131 = [];
var inst_32132 = inst_32131;
var inst_32133 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32172__$1 = (function (){var statearr_32175 = state_32172;
(statearr_32175[(7)] = inst_32132);

(statearr_32175[(8)] = inst_32133);

return statearr_32175;
})();
var statearr_32176_32208 = state_32172__$1;
(statearr_32176_32208[(2)] = null);

(statearr_32176_32208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32173 === (4))){
var inst_32136 = (state_32172[(9)]);
var inst_32136__$1 = (state_32172[(2)]);
var inst_32137 = (inst_32136__$1 == null);
var inst_32138 = cljs.core.not.call(null,inst_32137);
var state_32172__$1 = (function (){var statearr_32177 = state_32172;
(statearr_32177[(9)] = inst_32136__$1);

return statearr_32177;
})();
if(inst_32138){
var statearr_32178_32209 = state_32172__$1;
(statearr_32178_32209[(1)] = (5));

} else {
var statearr_32179_32210 = state_32172__$1;
(statearr_32179_32210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32173 === (15))){
var inst_32162 = (state_32172[(2)]);
var state_32172__$1 = state_32172;
var statearr_32180_32211 = state_32172__$1;
(statearr_32180_32211[(2)] = inst_32162);

(statearr_32180_32211[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32173 === (13))){
var state_32172__$1 = state_32172;
var statearr_32181_32212 = state_32172__$1;
(statearr_32181_32212[(2)] = null);

(statearr_32181_32212[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32173 === (6))){
var inst_32132 = (state_32172[(7)]);
var inst_32157 = inst_32132.length;
var inst_32158 = (inst_32157 > (0));
var state_32172__$1 = state_32172;
if(cljs.core.truth_(inst_32158)){
var statearr_32182_32213 = state_32172__$1;
(statearr_32182_32213[(1)] = (12));

} else {
var statearr_32183_32214 = state_32172__$1;
(statearr_32183_32214[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32173 === (3))){
var inst_32170 = (state_32172[(2)]);
var state_32172__$1 = state_32172;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32172__$1,inst_32170);
} else {
if((state_val_32173 === (12))){
var inst_32132 = (state_32172[(7)]);
var inst_32160 = cljs.core.vec.call(null,inst_32132);
var state_32172__$1 = state_32172;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32172__$1,(15),out,inst_32160);
} else {
if((state_val_32173 === (2))){
var state_32172__$1 = state_32172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32172__$1,(4),ch);
} else {
if((state_val_32173 === (11))){
var inst_32140 = (state_32172[(10)]);
var inst_32136 = (state_32172[(9)]);
var inst_32150 = (state_32172[(2)]);
var inst_32151 = [];
var inst_32152 = inst_32151.push(inst_32136);
var inst_32132 = inst_32151;
var inst_32133 = inst_32140;
var state_32172__$1 = (function (){var statearr_32184 = state_32172;
(statearr_32184[(11)] = inst_32152);

(statearr_32184[(7)] = inst_32132);

(statearr_32184[(12)] = inst_32150);

(statearr_32184[(8)] = inst_32133);

return statearr_32184;
})();
var statearr_32185_32215 = state_32172__$1;
(statearr_32185_32215[(2)] = null);

(statearr_32185_32215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32173 === (9))){
var inst_32132 = (state_32172[(7)]);
var inst_32148 = cljs.core.vec.call(null,inst_32132);
var state_32172__$1 = state_32172;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32172__$1,(11),out,inst_32148);
} else {
if((state_val_32173 === (5))){
var inst_32140 = (state_32172[(10)]);
var inst_32136 = (state_32172[(9)]);
var inst_32133 = (state_32172[(8)]);
var inst_32140__$1 = f.call(null,inst_32136);
var inst_32141 = cljs.core._EQ_.call(null,inst_32140__$1,inst_32133);
var inst_32142 = cljs.core.keyword_identical_QMARK_.call(null,inst_32133,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32143 = (inst_32141) || (inst_32142);
var state_32172__$1 = (function (){var statearr_32186 = state_32172;
(statearr_32186[(10)] = inst_32140__$1);

return statearr_32186;
})();
if(cljs.core.truth_(inst_32143)){
var statearr_32187_32216 = state_32172__$1;
(statearr_32187_32216[(1)] = (8));

} else {
var statearr_32188_32217 = state_32172__$1;
(statearr_32188_32217[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32173 === (14))){
var inst_32165 = (state_32172[(2)]);
var inst_32166 = cljs.core.async.close_BANG_.call(null,out);
var state_32172__$1 = (function (){var statearr_32190 = state_32172;
(statearr_32190[(13)] = inst_32165);

return statearr_32190;
})();
var statearr_32191_32218 = state_32172__$1;
(statearr_32191_32218[(2)] = inst_32166);

(statearr_32191_32218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32173 === (10))){
var inst_32155 = (state_32172[(2)]);
var state_32172__$1 = state_32172;
var statearr_32192_32219 = state_32172__$1;
(statearr_32192_32219[(2)] = inst_32155);

(statearr_32192_32219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32173 === (8))){
var inst_32140 = (state_32172[(10)]);
var inst_32136 = (state_32172[(9)]);
var inst_32132 = (state_32172[(7)]);
var inst_32145 = inst_32132.push(inst_32136);
var tmp32189 = inst_32132;
var inst_32132__$1 = tmp32189;
var inst_32133 = inst_32140;
var state_32172__$1 = (function (){var statearr_32193 = state_32172;
(statearr_32193[(14)] = inst_32145);

(statearr_32193[(7)] = inst_32132__$1);

(statearr_32193[(8)] = inst_32133);

return statearr_32193;
})();
var statearr_32194_32220 = state_32172__$1;
(statearr_32194_32220[(2)] = null);

(statearr_32194_32220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29429__auto___32206,out))
;
return ((function (switch__29317__auto__,c__29429__auto___32206,out){
return (function() {
var cljs$core$async$state_machine__29318__auto__ = null;
var cljs$core$async$state_machine__29318__auto____0 = (function (){
var statearr_32198 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32198[(0)] = cljs$core$async$state_machine__29318__auto__);

(statearr_32198[(1)] = (1));

return statearr_32198;
});
var cljs$core$async$state_machine__29318__auto____1 = (function (state_32172){
while(true){
var ret_value__29319__auto__ = (function (){try{while(true){
var result__29320__auto__ = switch__29317__auto__.call(null,state_32172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29320__auto__;
}
break;
}
}catch (e32199){if((e32199 instanceof Object)){
var ex__29321__auto__ = e32199;
var statearr_32200_32221 = state_32172;
(statearr_32200_32221[(5)] = ex__29321__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32199;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32222 = state_32172;
state_32172 = G__32222;
continue;
} else {
return ret_value__29319__auto__;
}
break;
}
});
cljs$core$async$state_machine__29318__auto__ = function(state_32172){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29318__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29318__auto____1.call(this,state_32172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29318__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29318__auto____0;
cljs$core$async$state_machine__29318__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29318__auto____1;
return cljs$core$async$state_machine__29318__auto__;
})()
;})(switch__29317__auto__,c__29429__auto___32206,out))
})();
var state__29431__auto__ = (function (){var statearr_32201 = f__29430__auto__.call(null);
(statearr_32201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29429__auto___32206);

return statearr_32201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29431__auto__);
});})(c__29429__auto___32206,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1474379731404