System.register("chunks:///_virtual/AuroraClown",["./AuroraClownController.ts","./AuroraClownMain.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/AuroraClownController.ts",["./rollupPluginModLoBabelHelpers.js","cc","./SlotController.ts"],(function(o){var r,t,n,e,l,s;return{setters:[function(o){r=o.inheritsLoose,t=o.asyncToGenerator,n=o.regeneratorRuntime},function(o){e=o.cclegacy,l=o._decorator},function(o){s=o.SlotController}],execute:function(){var a;e._RF.push({},"deddcnCySFByJco27rKeqj4","AuroraClownController",void 0);var c=l.ccclass;l.property,o("AuroraClownController",c("AuroraClownController")(a=function(o){function e(){return o.apply(this,arguments)||this}r(e,o);var l=e.prototype;return l.start=function(){o.prototype.start.call(this),this.setLineMap([[],[[0,1],[1,1],[2,1]],[[0,0],[1,0],[2,0]],[[0,2],[1,2],[2,2]]]),console.log("[AuroraClown] 遊戲初始化完成，線路定義完畢")},l.onPostStopPresentation=function(){var r=t(n().mark((function r(t){return n().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("[AuroraClown] 🃏 中獎演出開始! 贏分: "+t.win),r.next=3,o.prototype.onPostStopPresentation.call(this,t);case 3:t.win>0&&console.log("[AuroraClown] ✨ 慶祝大獎演出...");case 4:case"end":return r.stop()}}),r,this)})));return function(o){return r.apply(this,arguments)}}(),l.playBigWinCelebration=function(){},e}(s))||a);e._RF.pop()}}}));

System.register("chunks:///_virtual/AuroraClownMain.ts",["./rollupPluginModLoBabelHelpers.js","cc","./SlotGameMain.ts","./SlotInterfaces.ts"],(function(n){var t,r,e,o,i,u,a;return{setters:[function(n){t=n.inheritsLoose,r=n.asyncToGenerator,e=n.regeneratorRuntime},function(n){o=n.cclegacy,i=n._decorator},function(n){u=n.SlotGameMain},function(n){a=n.SlotRoundType}],execute:function(){var c;o._RF.push({},"da603h4Qi5BvJYL+Jl/ktp+","AuroraClownMain",void 0);var s=i.ccclass;i.property,n("AuroraClownMain",s("AuroraClownMain")(c=function(n){function o(){return n.apply(this,arguments)||this}t(o,n);var i=o.prototype;return i.fetchSpinResult=function(){var n=r(e().mark((function n(){return e().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",this.mockFetchSpinResult());case 1:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}(),i.onSpinStart=function(){console.log("[AuroraClownMain] 🎰 玩家發起 Spin!")},i.onSpinEnd=function(){console.log("[AuroraClownMain] ✅ 回合結束")},i.mockFetchSpinResult=function(){var n=r(e().mark((function n(){return e().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise((function(n){setTimeout((function(){var t={record_id:"mock_12345",round_type:a.NORMAL,triggers:[],bet_amount:10,win_amount:100,coin_balance:1e3,spins:[{round_id:"spin_001",round_type:a.NORMAL,triggers:[],reels:[[1,2,3],[1,1,1],[7,2,1]],bet:10,win:100,balance_before:1e3,balance_after:1090,win_lines:[{line_index:1,symbols:[1,1,1],payout:100}],client_data:{}}],machine_state:{tenjou:0,bb_count:0,rb_count:0,current_ng_spins:10,coin_diff:0,bonus_history:[]}};n(t)}),500)})));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o}(u))||c);o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/AuroraClown', 'chunks:///_virtual/AuroraClown'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});