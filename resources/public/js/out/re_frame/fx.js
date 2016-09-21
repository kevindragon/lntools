// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__36368){
var vec__36369 = p__36368;
var k = cljs.core.nth.call(null,vec__36369,(0),null);
var value = cljs.core.nth.call(null,vec__36369,(1),null);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,k,true);
if(cljs.core.truth_(temp__4655__auto__)){
var effect_fn = temp__4655__auto__;
return effect_fn.call(null,value);
} else {
return null;
}
}),new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context)));
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__36372 = cljs.core.seq.call(null,value);
var chunk__36373 = null;
var count__36374 = (0);
var i__36375 = (0);
while(true){
if((i__36375 < count__36374)){
var map__36376 = cljs.core._nth.call(null,chunk__36373,i__36375);
var map__36376__$1 = ((((!((map__36376 == null)))?((((map__36376.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36376.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36376):map__36376);
var effect = map__36376__$1;
var ms = cljs.core.get.call(null,map__36376__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__36376__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value: ",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__36372,chunk__36373,count__36374,i__36375,map__36376,map__36376__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__36372,chunk__36373,count__36374,i__36375,map__36376,map__36376__$1,effect,ms,dispatch))
,ms);
}

var G__36380 = seq__36372;
var G__36381 = chunk__36373;
var G__36382 = count__36374;
var G__36383 = (i__36375 + (1));
seq__36372 = G__36380;
chunk__36373 = G__36381;
count__36374 = G__36382;
i__36375 = G__36383;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36372);
if(temp__4657__auto__){
var seq__36372__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36372__$1)){
var c__25876__auto__ = cljs.core.chunk_first.call(null,seq__36372__$1);
var G__36384 = cljs.core.chunk_rest.call(null,seq__36372__$1);
var G__36385 = c__25876__auto__;
var G__36386 = cljs.core.count.call(null,c__25876__auto__);
var G__36387 = (0);
seq__36372 = G__36384;
chunk__36373 = G__36385;
count__36374 = G__36386;
i__36375 = G__36387;
continue;
} else {
var map__36378 = cljs.core.first.call(null,seq__36372__$1);
var map__36378__$1 = ((((!((map__36378 == null)))?((((map__36378.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36378.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36378):map__36378);
var effect = map__36378__$1;
var ms = cljs.core.get.call(null,map__36378__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__36378__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value: ",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__36372,chunk__36373,count__36374,i__36375,map__36378,map__36378__$1,effect,ms,dispatch,seq__36372__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__36372,chunk__36373,count__36374,i__36375,map__36378,map__36378__$1,effect,ms,dispatch,seq__36372__$1,temp__4657__auto__))
,ms);
}

var G__36388 = cljs.core.next.call(null,seq__36372__$1);
var G__36389 = null;
var G__36390 = (0);
var G__36391 = (0);
seq__36372 = G__36388;
chunk__36373 = G__36389;
count__36374 = G__36390;
i__36375 = G__36391;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got: ",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got: ",value);
} else {
}

var seq__36392 = cljs.core.seq.call(null,value);
var chunk__36393 = null;
var count__36394 = (0);
var i__36395 = (0);
while(true){
if((i__36395 < count__36394)){
var event = cljs.core._nth.call(null,chunk__36393,i__36395);
re_frame.router.dispatch.call(null,event);

var G__36396 = seq__36392;
var G__36397 = chunk__36393;
var G__36398 = count__36394;
var G__36399 = (i__36395 + (1));
seq__36392 = G__36396;
chunk__36393 = G__36397;
count__36394 = G__36398;
i__36395 = G__36399;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36392);
if(temp__4657__auto__){
var seq__36392__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36392__$1)){
var c__25876__auto__ = cljs.core.chunk_first.call(null,seq__36392__$1);
var G__36400 = cljs.core.chunk_rest.call(null,seq__36392__$1);
var G__36401 = c__25876__auto__;
var G__36402 = cljs.core.count.call(null,c__25876__auto__);
var G__36403 = (0);
seq__36392 = G__36400;
chunk__36393 = G__36401;
count__36394 = G__36402;
i__36395 = G__36403;
continue;
} else {
var event = cljs.core.first.call(null,seq__36392__$1);
re_frame.router.dispatch.call(null,event);

var G__36404 = cljs.core.next.call(null,seq__36392__$1);
var G__36405 = null;
var G__36406 = (0);
var G__36407 = (0);
seq__36392 = G__36404;
chunk__36393 = G__36405;
count__36394 = G__36406;
i__36395 = G__36407;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.doall.call(null,cljs.core.map.call(null,clear_event,value));
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));

//# sourceMappingURL=fx.js.map?rel=1474379737803