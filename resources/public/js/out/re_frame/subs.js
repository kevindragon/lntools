// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frame.subs');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('re_frame.utils');
goog.require('re_frame.registrar');
re_frame.subs.kind = new cljs.core.Keyword(null,"sub","sub",-2093760025);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.subs.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register a subscription handler fucntion for an query id
 */
re_frame.subs.register_raw = (function re_frame$subs$register_raw(query_id,handler_fn){
return re_frame.registrar.register_handler.call(null,re_frame.subs.kind,query_id,handler_fn);
});
re_frame.subs.query__GT_reaction = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Unregisters all existing subscription handlers
 */
re_frame.subs.clear_all_handlers_BANG_ = (function re_frame$subs$clear_all_handlers_BANG_(){
re_frame.registrar.clear_handlers.call(null,re_frame.subs.kind);

return cljs.core.reset_BANG_.call(null,re_frame.subs.query__GT_reaction,cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * cache the reaction r
 */
re_frame.subs.cache_and_return = (function re_frame$subs$cache_and_return(query_v,dynv,r){
var cache_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dynv], null);
re_frame.interop.add_on_dispose_BANG_.call(null,r,((function (cache_key){
return (function (){
return cljs.core.swap_BANG_.call(null,re_frame.subs.query__GT_reaction,cljs.core.dissoc,cache_key);
});})(cache_key))
);

cljs.core.swap_BANG_.call(null,re_frame.subs.query__GT_reaction,cljs.core.assoc,cache_key,r);

return r;
});
re_frame.subs.cache_lookup = (function re_frame$subs$cache_lookup(var_args){
var args36478 = [];
var len__26140__auto___36481 = arguments.length;
var i__26141__auto___36482 = (0);
while(true){
if((i__26141__auto___36482 < len__26140__auto___36481)){
args36478.push((arguments[i__26141__auto___36482]));

var G__36483 = (i__26141__auto___36482 + (1));
i__26141__auto___36482 = G__36483;
continue;
} else {
}
break;
}

var G__36480 = args36478.length;
switch (G__36480) {
case 1:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36478.length)].join('')));

}
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
return re_frame.subs.cache_lookup.call(null,query_v,cljs.core.PersistentVector.EMPTY);
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2 = (function (query_v,dyn_v){
return cljs.core.get.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dyn_v], null));
});

re_frame.subs.cache_lookup.cljs$lang$maxFixedArity = 2;

/**
 * Returns a Reagent/reaction which contains a computation
 */
re_frame.subs.subscribe = (function re_frame$subs$subscribe(var_args){
var args36485 = [];
var len__26140__auto___36488 = arguments.length;
var i__26141__auto___36489 = (0);
while(true){
if((i__26141__auto___36489 < len__26140__auto___36488)){
args36485.push((arguments[i__26141__auto___36489]));

var G__36490 = (i__26141__auto___36489 + (1));
i__26141__auto___36489 = G__36490;
continue;
} else {
}
break;
}

var G__36487 = args36485.length;
switch (G__36487) {
case 1:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36485.length)].join('')));

}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,query_v);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query_v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(cljs.core.not.call(null,handler_fn)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no subscription handler registered for: \"",query_id,"\". Returning a nil subscription.");
} else {
}

return re_frame.subs.cache_and_return.call(null,query_v,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,re_frame.db.app_db,query_v));
}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (v,dynv){
var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,v,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___36492 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___36492)){
var not_reactive_36493 = temp__4657__auto___36492;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom: ",not_reactive_36493);
} else {
}
} else {
}

if((handler_fn == null)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no subscription handler registered for: \"",query_id,"\". Returning a nil subscription.");
} else {
var dyn_vals = re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__4655__auto__){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__4655__auto__))
);
var sub = re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__4655__auto__){
return (function (){
return handler_fn.call(null,re_frame.db.app_db,v,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__))
);
return re_frame.subs.cache_and_return.call(null,v,dynv,re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__4655__auto__))
));
}
}
});

re_frame.subs.subscribe.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new version of 'm' in which 'f' has been applied to each value.
 *   (map-vals inc {:a 4, :b 2}) => {:a 5, :b 3}
 */
re_frame.subs.map_vals = (function re_frame$subs$map_vals(f,m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__25845__auto__ = (function re_frame$subs$map_vals_$_iter__36510(s__36511){
return (new cljs.core.LazySeq(null,(function (){
var s__36511__$1 = s__36511;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36511__$1);
if(temp__4657__auto__){
var s__36511__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36511__$2)){
var c__25843__auto__ = cljs.core.chunk_first.call(null,s__36511__$2);
var size__25844__auto__ = cljs.core.count.call(null,c__25843__auto__);
var b__36513 = cljs.core.chunk_buffer.call(null,size__25844__auto__);
if((function (){var i__36512 = (0);
while(true){
if((i__36512 < size__25844__auto__)){
var vec__36520 = cljs.core._nth.call(null,c__25843__auto__,i__36512);
var k = cljs.core.nth.call(null,vec__36520,(0),null);
var val = cljs.core.nth.call(null,vec__36520,(1),null);
cljs.core.chunk_append.call(null,b__36513,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null));

var G__36526 = (i__36512 + (1));
i__36512 = G__36526;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36513),re_frame$subs$map_vals_$_iter__36510.call(null,cljs.core.chunk_rest.call(null,s__36511__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36513),null);
}
} else {
var vec__36523 = cljs.core.first.call(null,s__36511__$2);
var k = cljs.core.nth.call(null,vec__36523,(0),null);
var val = cljs.core.nth.call(null,vec__36523,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null),re_frame$subs$map_vals_$_iter__36510.call(null,cljs.core.rest.call(null,s__36511__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25845__auto__.call(null,m);
})());
});
re_frame.subs.deref_input_signals = (function re_frame$subs$deref_input_signals(signals,query_id){
if(cljs.core.sequential_QMARK_.call(null,signals)){
return cljs.core.map.call(null,cljs.core.deref,signals);
} else {
if(cljs.core.map_QMARK_.call(null,signals)){
return re_frame.subs.map_vals.call(null,cljs.core.deref,signals);
} else {
if(cljs.core.truth_(re_frame.interop.deref_QMARK_.call(null,signals))){
return cljs.core.deref.call(null,signals);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: the reg-sub for ",query_id,", must be wrong. Return value from input-signals function is: ",signals);

}
}
}
});
/**
 * Register a given handler function for a given query id.
 * 
 *   There's 3 ways this function can be called
 * 
 *   1. (reg-sub
 *     :test-sub
 *     (fn [db [_]] db))
 *   The value in app-db is passed to the computation function as the 1st argument.
 * 
 *   2. (reg-sub
 *     :a-b-sub
 *     (fn [q-vec d-vec]
 *       [(subs/subscribe [:a-sub])
 *        (subs/subscribe [:b-sub])])
 *     (fn [[a b] [_]] {:a a :b b}))
 * 
 *   Two functions provided. The 2nd is computation fucntion, as before. The 1st
 *   is returns what `input signals` should be provided to the computation. The
 *   `input signals` function is called with two arguments: the query vector
 *   and the dynamic vector. The return value can be singleton reaction or
 *   a sequence of reactions.
 * 
 *   3. (reg-sub
 *     :a-b-sub
 *     :<- [:a-sub]
 *     :<- [:b-sub]
 *     (fn [[a b] [_]] {:a a :b b}))```
 *   This 3rd variation is just syntactic sugar for the 2nd. Pairs are supplied instead
 *   of an `input signals` functions. `:<-` is supplied followed by the subscription
 *   vector.
 *   
 */
re_frame.subs.reg_sub = (function re_frame$subs$reg_sub(var_args){
var args__26147__auto__ = [];
var len__26140__auto___36530 = arguments.length;
var i__26141__auto___36531 = (0);
while(true){
if((i__26141__auto___36531 < len__26140__auto___36530)){
args__26147__auto__.push((arguments[i__26141__auto___36531]));

var G__36532 = (i__26141__auto___36531 + (1));
i__26141__auto___36531 = G__36532;
continue;
} else {
}
break;
}

var argseq__26148__auto__ = ((((1) < args__26147__auto__.length))?(new cljs.core.IndexedSeq(args__26147__auto__.slice((1)),(0),null)):null);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26148__auto__);
});

re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
var computation_fn = cljs.core.last.call(null,args);
var input_args = cljs.core.butlast.call(null,args);
var err_header = [cljs.core.str("re-frame: reg-sub for "),cljs.core.str(query_id),cljs.core.str(", ")].join('');
var inputs_fn = (function (){var G__36529 = cljs.core.count.call(null,input_args);
switch (G__36529) {
case (0):
return ((function (G__36529,computation_fn,input_args,err_header){
return (function() {
var G__36534 = null;
var G__36534__1 = (function (_){
return re_frame.db.app_db;
});
var G__36534__2 = (function (_,___$1){
return re_frame.db.app_db;
});
G__36534 = function(_,___$1){
switch(arguments.length){
case 1:
return G__36534__1.call(this,_);
case 2:
return G__36534__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36534.cljs$core$IFn$_invoke$arity$1 = G__36534__1;
G__36534.cljs$core$IFn$_invoke$arity$2 = G__36534__2;
return G__36534;
})()
;})(G__36529,computation_fn,input_args,err_header))

break;
case (1):
var f = cljs.core.first.call(null,input_args);
if(cljs.core.fn_QMARK_.call(null,f)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"2nd argument expected to be an inputs function, got: ",f);
}

return f;

break;
case (2):
var ret_val = re_frame.subs.subscribe.call(null,cljs.core.second.call(null,input_args));
return ((function (ret_val,G__36529,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return ret_val;
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return ret_val;
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(ret_val,G__36529,computation_fn,input_args,err_header))

break;
default:
var pairs = cljs.core.partition.call(null,(2),input_args);
var vecs = cljs.core.map.call(null,cljs.core.last,pairs);
var ret_val = cljs.core.map.call(null,re_frame.subs.subscribe,vecs);
if(cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,vecs)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected pairs of :<- and vectors, got: ",pairs);
}

return ((function (pairs,vecs,ret_val,G__36529,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return ret_val;
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return ret_val;
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(pairs,vecs,ret_val,G__36529,computation_fn,input_args,err_header))

}
})();
return re_frame.registrar.register_handler.call(null,re_frame.subs.kind,query_id,((function (computation_fn,input_args,err_header,inputs_fn){
return (function() {
var re_frame$subs$subs_handler_fn = null;
var re_frame$subs$subs_handler_fn__2 = (function (db,query_vec){
var subscriptions = inputs_fn.call(null,query_vec);
return re_frame.interop.make_reaction.call(null,((function (subscriptions,computation_fn,input_args,err_header,inputs_fn){
return (function (){
return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
});})(subscriptions,computation_fn,input_args,err_header,inputs_fn))
);
});
var re_frame$subs$subs_handler_fn__3 = (function (db,query_vec,dyn_vec){
var subscriptions = inputs_fn.call(null,query_vec,dyn_vec);
return re_frame.interop.make_reaction.call(null,((function (subscriptions,computation_fn,input_args,err_header,inputs_fn){
return (function (){
return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
});})(subscriptions,computation_fn,input_args,err_header,inputs_fn))
);
});
re_frame$subs$subs_handler_fn = function(db,query_vec,dyn_vec){
switch(arguments.length){
case 2:
return re_frame$subs$subs_handler_fn__2.call(this,db,query_vec);
case 3:
return re_frame$subs$subs_handler_fn__3.call(this,db,query_vec,dyn_vec);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$subs_handler_fn__2;
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$3 = re_frame$subs$subs_handler_fn__3;
return re_frame$subs$subs_handler_fn;
})()
;})(computation_fn,input_args,err_header,inputs_fn))
);
});

re_frame.subs.reg_sub.cljs$lang$maxFixedArity = (1);

re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq36527){
var G__36528 = cljs.core.first.call(null,seq36527);
var seq36527__$1 = cljs.core.next.call(null,seq36527);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic(G__36528,seq36527__$1);
});


//# sourceMappingURL=subs.js.map?rel=1474379738677