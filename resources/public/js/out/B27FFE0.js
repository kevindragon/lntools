goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('tools.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__39380__delegate = function (x){
if(cljs.core.truth_(tools.core.main)){
return cljs.core.apply.call(null,tools.core.main,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'tools.core/main' is missing");
}
};
var G__39380 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__39381__i = 0, G__39381__a = new Array(arguments.length -  0);
while (G__39381__i < G__39381__a.length) {G__39381__a[G__39381__i] = arguments[G__39381__i + 0]; ++G__39381__i;}
  x = new cljs.core.IndexedSeq(G__39381__a,0);
} 
return G__39380__delegate.call(this,x);};
G__39380.cljs$lang$maxFixedArity = 0;
G__39380.cljs$lang$applyTo = (function (arglist__39382){
var x = cljs.core.seq(arglist__39382);
return G__39380__delegate(x);
});
G__39380.cljs$core$IFn$_invoke$arity$variadic = G__39380__delegate;
return G__39380;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
