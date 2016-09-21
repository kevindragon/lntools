goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('tools.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__40953__delegate = function (x){
if(cljs.core.truth_(tools.core.main)){
return cljs.core.apply.call(null,tools.core.main,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'tools.core/main' is missing");
}
};
var G__40953 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__40954__i = 0, G__40954__a = new Array(arguments.length -  0);
while (G__40954__i < G__40954__a.length) {G__40954__a[G__40954__i] = arguments[G__40954__i + 0]; ++G__40954__i;}
  x = new cljs.core.IndexedSeq(G__40954__a,0);
} 
return G__40953__delegate.call(this,x);};
G__40953.cljs$lang$maxFixedArity = 0;
G__40953.cljs$lang$applyTo = (function (arglist__40955){
var x = cljs.core.seq(arglist__40955);
return G__40953__delegate(x);
});
G__40953.cljs$core$IFn$_invoke$arity$variadic = G__40953__delegate;
return G__40953;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
