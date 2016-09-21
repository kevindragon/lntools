// Compiled by ClojureScript 1.9.229 {}
goog.provide('tools.route');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('bidi.bidi');
goog.require('re_frame.core');
goog.require('goog.History');
goog.require('goog.History.EventType');
cljs.core.enable_console_print_BANG_.call(null);
tools.route.routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.Keyword(null,"index","index",-1531685915)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null)], null)], null);
tools.route.history = (function (){var G__37842 = (new goog.History());
goog.events.listen(G__37842,goog.History.EventType.NAVIGATE,((function (G__37842){
return (function (event){
var params = bidi.bidi.match_route.call(null,tools.route.routes,event.token);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-route","update-route",-2008994266),params], null));
});})(G__37842))
);

G__37842.setEnabled(true);

return G__37842;
})();

//# sourceMappingURL=route.js.map?rel=1474443377801