// Compiled by ClojureScript 1.9.229 {}
goog.provide('tools.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('tools.db');
cljs.core.enable_console_print_BANG_.call(null);
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (db,_){
return cljs.core.merge.call(null,db,tools.db.default_db);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-route","update-route",-2008994266),(function (db,p__35045){
var vec__35046 = p__35045;
var _ = cljs.core.nth.call(null,vec__35046,(0),null);
var params = cljs.core.nth.call(null,vec__35046,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"route","route",329891309),params);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"display-nav","display-nav",-1772822880),(function (db,p__35049){
var vec__35050 = p__35049;
var _ = cljs.core.nth.call(null,vec__35050,(0),null);
var idx = cljs.core.nth.call(null,vec__35050,(1),null);
var bool = cljs.core.nth.call(null,vec__35050,(2),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),idx,new cljs.core.Keyword(null,"hide?","hide?",-988635670)], null),bool);
}));

//# sourceMappingURL=events.js.map?rel=1474464913660