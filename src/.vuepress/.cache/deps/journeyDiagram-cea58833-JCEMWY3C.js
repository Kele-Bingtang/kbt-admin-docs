import {
  hn
} from "./chunk-5C4RDF2Y.js";
import {
  c,
  d,
  h,
  l
} from "./chunk-Y2OX2TSP.js";
import "./chunk-Z33VW5PY.js";
import {
  Aa,
  At,
  Ea,
  Fa,
  Ia,
  La,
  Ma,
  Oa,
  Ut,
  de,
  jg
} from "./chunk-M3V6CS66.js";

// node_modules/.pnpm/registry.npmmirror.com+mermaid@10.2.4/node_modules/mermaid/dist/journeyDiagram-cea58833.js
var Z = function() {
  var t = function(_, r, a, h2) {
    for (a = a || {}, h2 = _.length; h2--; a[_[h2]] = r)
      ;
    return a;
  }, e = [1, 2], s = [1, 5], n = [6, 9, 11, 17, 18, 20, 22, 23, 24, 26], i = [1, 15], o = [1, 16], c2 = [1, 17], y = [1, 18], u = [1, 19], x = [1, 20], g = [1, 24], f = [4, 6, 9, 11, 17, 18, 20, 22, 23, 24, 26], d2 = {
    trace: function() {
    },
    yy: {},
    symbols_: { error: 2, start: 3, journey: 4, document: 5, EOF: 6, directive: 7, line: 8, SPACE: 9, statement: 10, NEWLINE: 11, openDirective: 12, typeDirective: 13, closeDirective: 14, ":": 15, argDirective: 16, title: 17, acc_title: 18, acc_title_value: 19, acc_descr: 20, acc_descr_value: 21, acc_descr_multiline_value: 22, section: 23, taskName: 24, taskData: 25, open_directive: 26, type_directive: 27, arg_directive: 28, close_directive: 29, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 4: "journey", 6: "EOF", 9: "SPACE", 11: "NEWLINE", 15: ":", 17: "title", 18: "acc_title", 19: "acc_title_value", 20: "acc_descr", 21: "acc_descr_value", 22: "acc_descr_multiline_value", 23: "section", 24: "taskName", 25: "taskData", 26: "open_directive", 27: "type_directive", 28: "arg_directive", 29: "close_directive" },
    productions_: [0, [3, 3], [3, 2], [5, 0], [5, 2], [8, 2], [8, 1], [8, 1], [8, 1], [7, 4], [7, 6], [10, 1], [10, 2], [10, 2], [10, 1], [10, 1], [10, 2], [10, 1], [12, 1], [13, 1], [16, 1], [14, 1]],
    performAction: function(r, a, h2, p, m, l2, R) {
      var k = l2.length - 1;
      switch (m) {
        case 1:
          return l2[k - 1];
        case 3:
          this.$ = [];
          break;
        case 4:
          l2[k - 1].push(l2[k]), this.$ = l2[k - 1];
          break;
        case 5:
        case 6:
          this.$ = l2[k];
          break;
        case 7:
        case 8:
          this.$ = [];
          break;
        case 11:
          p.setDiagramTitle(l2[k].substr(6)), this.$ = l2[k].substr(6);
          break;
        case 12:
          this.$ = l2[k].trim(), p.setAccTitle(this.$);
          break;
        case 13:
        case 14:
          this.$ = l2[k].trim(), p.setAccDescription(this.$);
          break;
        case 15:
          p.addSection(l2[k].substr(8)), this.$ = l2[k].substr(8);
          break;
        case 16:
          p.addTask(l2[k - 1], l2[k]), this.$ = "task";
          break;
        case 18:
          p.parseDirective("%%{", "open_directive");
          break;
        case 19:
          p.parseDirective(l2[k], "type_directive");
          break;
        case 20:
          l2[k] = l2[k].trim().replace(/'/g, '"'), p.parseDirective(l2[k], "arg_directive");
          break;
        case 21:
          p.parseDirective("}%%", "close_directive", "journey");
          break;
      }
    },
    table: [{ 3: 1, 4: e, 7: 3, 12: 4, 26: s }, { 1: [3] }, t(n, [2, 3], { 5: 6 }), { 3: 7, 4: e, 7: 3, 12: 4, 26: s }, { 13: 8, 27: [1, 9] }, { 27: [2, 18] }, { 6: [1, 10], 7: 21, 8: 11, 9: [1, 12], 10: 13, 11: [1, 14], 12: 4, 17: i, 18: o, 20: c2, 22: y, 23: u, 24: x, 26: s }, { 1: [2, 2] }, { 14: 22, 15: [1, 23], 29: g }, t([15, 29], [2, 19]), t(n, [2, 8], { 1: [2, 1] }), t(n, [2, 4]), { 7: 21, 10: 25, 12: 4, 17: i, 18: o, 20: c2, 22: y, 23: u, 24: x, 26: s }, t(n, [2, 6]), t(n, [2, 7]), t(n, [2, 11]), { 19: [1, 26] }, { 21: [1, 27] }, t(n, [2, 14]), t(n, [2, 15]), { 25: [1, 28] }, t(n, [2, 17]), { 11: [1, 29] }, { 16: 30, 28: [1, 31] }, { 11: [2, 21] }, t(n, [2, 5]), t(n, [2, 12]), t(n, [2, 13]), t(n, [2, 16]), t(f, [2, 9]), { 14: 32, 29: g }, { 29: [2, 20] }, { 11: [1, 33] }, t(f, [2, 10])],
    defaultActions: { 5: [2, 18], 7: [2, 2], 24: [2, 21], 31: [2, 20] },
    parseError: function(r, a) {
      if (a.recoverable)
        this.trace(r);
      else {
        var h2 = new Error(r);
        throw h2.hash = a, h2;
      }
    },
    parse: function(r) {
      var a = this, h2 = [0], p = [], m = [null], l2 = [], R = this.table, k = "", z = 0, Q = 0, yt = 2, tt = 1, dt = l2.slice.call(arguments, 1), v = Object.create(this.lexer), A = { yy: {} };
      for (var D in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, D) && (A.yy[D] = this.yy[D]);
      v.setInput(r, A.yy), A.yy.lexer = v, A.yy.parser = this, typeof v.yylloc > "u" && (v.yylloc = {});
      var W = v.yylloc;
      l2.push(W);
      var pt = v.options && v.options.ranges;
      typeof A.yy.parseError == "function" ? this.parseError = A.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function ft() {
        var E;
        return E = p.pop() || v.lex() || tt, typeof E != "number" && (E instanceof Array && (p = E, E = p.pop()), E = a.symbols_[E] || E), E;
      }
      for (var w, I, S, X, F = {}, Y, $, et, q; ; ) {
        if (I = h2[h2.length - 1], this.defaultActions[I] ? S = this.defaultActions[I] : ((w === null || typeof w > "u") && (w = ft()), S = R[I] && R[I][w]), typeof S > "u" || !S.length || !S[0]) {
          var G = "";
          q = [];
          for (Y in R[I])
            this.terminals_[Y] && Y > yt && q.push("'" + this.terminals_[Y] + "'");
          v.showPosition ? G = "Parse error on line " + (z + 1) + `:
` + v.showPosition() + `
Expecting ` + q.join(", ") + ", got '" + (this.terminals_[w] || w) + "'" : G = "Parse error on line " + (z + 1) + ": Unexpected " + (w == tt ? "end of input" : "'" + (this.terminals_[w] || w) + "'"), this.parseError(G, {
            text: v.match,
            token: this.terminals_[w] || w,
            line: v.yylineno,
            loc: W,
            expected: q
          });
        }
        if (S[0] instanceof Array && S.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + I + ", token: " + w);
        switch (S[0]) {
          case 1:
            h2.push(w), m.push(v.yytext), l2.push(v.yylloc), h2.push(S[1]), w = null, Q = v.yyleng, k = v.yytext, z = v.yylineno, W = v.yylloc;
            break;
          case 2:
            if ($ = this.productions_[S[1]][1], F.$ = m[m.length - $], F._$ = {
              first_line: l2[l2.length - ($ || 1)].first_line,
              last_line: l2[l2.length - 1].last_line,
              first_column: l2[l2.length - ($ || 1)].first_column,
              last_column: l2[l2.length - 1].last_column
            }, pt && (F._$.range = [
              l2[l2.length - ($ || 1)].range[0],
              l2[l2.length - 1].range[1]
            ]), X = this.performAction.apply(F, [
              k,
              Q,
              z,
              A.yy,
              S[1],
              m,
              l2
            ].concat(dt)), typeof X < "u")
              return X;
            $ && (h2 = h2.slice(0, -1 * $ * 2), m = m.slice(0, -1 * $), l2 = l2.slice(0, -1 * $)), h2.push(this.productions_[S[1]][0]), m.push(F.$), l2.push(F._$), et = R[h2[h2.length - 2]][h2[h2.length - 1]], h2.push(et);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }
  }, T = function() {
    var _ = {
      EOF: 1,
      parseError: function(a, h2) {
        if (this.yy.parser)
          this.yy.parser.parseError(a, h2);
        else
          throw new Error(a);
      },
      // resets the lexer, sets new input
      setInput: function(r, a) {
        return this.yy = a || this.yy || {}, this._input = r, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      },
      // consumes and returns one char from the input
      input: function() {
        var r = this._input[0];
        this.yytext += r, this.yyleng++, this.offset++, this.match += r, this.matched += r;
        var a = r.match(/(?:\r\n?|\n).*/g);
        return a ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), r;
      },
      // unshifts one char (or a string) into the input
      unput: function(r) {
        var a = r.length, h2 = r.split(/(?:\r\n?|\n)/g);
        this._input = r + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - a), this.offset -= a;
        var p = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), h2.length - 1 && (this.yylineno -= h2.length - 1);
        var m = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: h2 ? (h2.length === p.length ? this.yylloc.first_column : 0) + p[p.length - h2.length].length - h2[0].length : this.yylloc.first_column - a
        }, this.options.ranges && (this.yylloc.range = [m[0], m[0] + this.yyleng - a]), this.yyleng = this.yytext.length, this;
      },
      // When called from action, caches matched text and appends it on next action
      more: function() {
        return this._more = true, this;
      },
      // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
      reject: function() {
        if (this.options.backtrack_lexer)
          this._backtrack = true;
        else
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        return this;
      },
      // retain first n characters of the match
      less: function(r) {
        this.unput(this.match.slice(r));
      },
      // displays already matched input, i.e. for error messages
      pastInput: function() {
        var r = this.matched.substr(0, this.matched.length - this.match.length);
        return (r.length > 20 ? "..." : "") + r.substr(-20).replace(/\n/g, "");
      },
      // displays upcoming input, i.e. for error messages
      upcomingInput: function() {
        var r = this.match;
        return r.length < 20 && (r += this._input.substr(0, 20 - r.length)), (r.substr(0, 20) + (r.length > 20 ? "..." : "")).replace(/\n/g, "");
      },
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: function() {
        var r = this.pastInput(), a = new Array(r.length + 1).join("-");
        return r + this.upcomingInput() + `
` + a + "^";
      },
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: function(r, a) {
        var h2, p, m;
        if (this.options.backtrack_lexer && (m = {
          yylineno: this.yylineno,
          yylloc: {
            first_line: this.yylloc.first_line,
            last_line: this.last_line,
            first_column: this.yylloc.first_column,
            last_column: this.yylloc.last_column
          },
          yytext: this.yytext,
          match: this.match,
          matches: this.matches,
          matched: this.matched,
          yyleng: this.yyleng,
          offset: this.offset,
          _more: this._more,
          _input: this._input,
          yy: this.yy,
          conditionStack: this.conditionStack.slice(0),
          done: this.done
        }, this.options.ranges && (m.yylloc.range = this.yylloc.range.slice(0))), p = r[0].match(/(?:\r\n?|\n).*/g), p && (this.yylineno += p.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: p ? p[p.length - 1].length - p[p.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + r[0].length
        }, this.yytext += r[0], this.match += r[0], this.matches = r, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(r[0].length), this.matched += r[0], h2 = this.performAction.call(this, this.yy, this, a, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), h2)
          return h2;
        if (this._backtrack) {
          for (var l2 in m)
            this[l2] = m[l2];
          return false;
        }
        return false;
      },
      // return next match in input
      next: function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = true);
        var r, a, h2, p;
        this._more || (this.yytext = "", this.match = "");
        for (var m = this._currentRules(), l2 = 0; l2 < m.length; l2++)
          if (h2 = this._input.match(this.rules[m[l2]]), h2 && (!a || h2[0].length > a[0].length)) {
            if (a = h2, p = l2, this.options.backtrack_lexer) {
              if (r = this.test_match(h2, m[l2]), r !== false)
                return r;
              if (this._backtrack) {
                a = false;
                continue;
              } else
                return false;
            } else if (!this.options.flex)
              break;
          }
        return a ? (r = this.test_match(a, m[p]), r !== false ? r : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      },
      // return next match that has a token
      lex: function() {
        var a = this.next();
        return a || this.lex();
      },
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: function(a) {
        this.conditionStack.push(a);
      },
      // pop the previously active lexer condition state off the condition stack
      popState: function() {
        var a = this.conditionStack.length - 1;
        return a > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      },
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      },
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: function(a) {
        return a = this.conditionStack.length - 1 - Math.abs(a || 0), a >= 0 ? this.conditionStack[a] : "INITIAL";
      },
      // alias for begin(condition)
      pushState: function(a) {
        this.begin(a);
      },
      // return the number of states currently on the stack
      stateStackSize: function() {
        return this.conditionStack.length;
      },
      options: { "case-insensitive": true },
      performAction: function(a, h2, p, m) {
        switch (p) {
          case 0:
            return this.begin("open_directive"), 26;
          case 1:
            return this.begin("type_directive"), 27;
          case 2:
            return this.popState(), this.begin("arg_directive"), 15;
          case 3:
            return this.popState(), this.popState(), 29;
          case 4:
            return 28;
          case 5:
            break;
          case 6:
            break;
          case 7:
            return 11;
          case 8:
            break;
          case 9:
            break;
          case 10:
            return 4;
          case 11:
            return 17;
          case 12:
            return this.begin("acc_title"), 18;
          case 13:
            return this.popState(), "acc_title_value";
          case 14:
            return this.begin("acc_descr"), 20;
          case 15:
            return this.popState(), "acc_descr_value";
          case 16:
            this.begin("acc_descr_multiline");
            break;
          case 17:
            this.popState();
            break;
          case 18:
            return "acc_descr_multiline_value";
          case 19:
            return 23;
          case 20:
            return 24;
          case 21:
            return 25;
          case 22:
            return 15;
          case 23:
            return 6;
          case 24:
            return "INVALID";
        }
      },
      rules: [/^(?:%%\{)/i, /^(?:((?:(?!\}%%)[^:.])*))/i, /^(?::)/i, /^(?:\}%%)/i, /^(?:((?:(?!\}%%).|\n)*))/i, /^(?:%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:[\n]+)/i, /^(?:\s+)/i, /^(?:#[^\n]*)/i, /^(?:journey\b)/i, /^(?:title\s[^#\n;]+)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:section\s[^#:\n;]+)/i, /^(?:[^#:\n;]+)/i, /^(?::[^#\n;]+)/i, /^(?::)/i, /^(?:$)/i, /^(?:.)/i],
      conditions: { open_directive: { rules: [1], inclusive: false }, type_directive: { rules: [2, 3], inclusive: false }, arg_directive: { rules: [3, 4], inclusive: false }, acc_descr_multiline: { rules: [17, 18], inclusive: false }, acc_descr: { rules: [15], inclusive: false }, acc_title: { rules: [13], inclusive: false }, INITIAL: { rules: [0, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 19, 20, 21, 22, 23, 24], inclusive: true } }
    };
    return _;
  }();
  d2.lexer = T;
  function b() {
    this.yy = {};
  }
  return b.prototype = d2, d2.Parser = b, new b();
}();
Z.parser = Z;
var Et = Z;
var L = "";
var J = [];
var N = [];
var B = [];
var Pt = function(t, e, s) {
  de.parseDirective(this, t, e, s);
};
var At2 = function() {
  J.length = 0, N.length = 0, L = "", B.length = 0, Fa();
};
var It = function(t) {
  L = t, J.push(t);
};
var Ct = function() {
  return J;
};
var Vt = function() {
  let t = st();
  const e = 100;
  let s = 0;
  for (; !t && s < e; )
    t = st(), s++;
  return N.push(...B), N;
};
var Ft = function() {
  const t = [];
  return N.forEach((s) => {
    s.people && t.push(...s.people);
  }), [...new Set(t)].sort();
};
var Lt = function(t, e) {
  const s = e.substr(1).split(":");
  let n = 0, i = [];
  s.length === 1 ? (n = Number(s[0]), i = []) : (n = Number(s[0]), i = s[1].split(","));
  const o = i.map((y) => y.trim()), c2 = {
    section: L,
    type: L,
    people: o,
    task: t,
    score: n
  };
  B.push(c2);
};
var Rt = function(t) {
  const e = {
    section: L,
    type: L,
    description: t,
    task: t,
    classes: []
  };
  N.push(e);
};
var st = function() {
  const t = function(s) {
    return B[s].processed;
  };
  let e = true;
  for (const [s, n] of B.entries())
    t(s), e = e && n.processed;
  return e;
};
var Nt = function() {
  return Ft();
};
var rt = {
  parseDirective: Pt,
  getConfig: () => Ut().journey,
  clear: At2,
  setDiagramTitle: Oa,
  getDiagramTitle: Ia,
  setAccTitle: La,
  getAccTitle: Aa,
  setAccDescription: Ea,
  getAccDescription: Ma,
  addSection: It,
  getSections: Ct,
  getTasks: Vt,
  addTask: Lt,
  addTaskOrg: Rt,
  getActors: Nt
};
var Bt = (t) => `.label {
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
    color: ${t.textColor};
  }
  .mouth {
    stroke: #666;
  }

  line {
    stroke: ${t.textColor}
  }

  .legend {
    fill: ${t.textColor};
  }

  .label text {
    fill: #333;
  }
  .label {
    color: ${t.textColor}
  }

  .face {
    ${t.faceColor ? `fill: ${t.faceColor}` : "fill: #FFF8DC"};
    stroke: #999;
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${t.mainBkg};
    stroke: ${t.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${t.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${t.lineColor};
    stroke-width: 1.5px;
  }

  .flowchart-link {
    stroke: ${t.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${t.edgeLabelBackground};
    rect {
      opacity: 0.5;
    }
    text-align: center;
  }

  .cluster rect {
  }

  .cluster text {
    fill: ${t.titleColor};
  }

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
    font-size: 12px;
    background: ${t.tertiaryColor};
    border: 1px solid ${t.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .task-type-0, .section-type-0  {
    ${t.fillType0 ? `fill: ${t.fillType0}` : ""};
  }
  .task-type-1, .section-type-1  {
    ${t.fillType0 ? `fill: ${t.fillType1}` : ""};
  }
  .task-type-2, .section-type-2  {
    ${t.fillType0 ? `fill: ${t.fillType2}` : ""};
  }
  .task-type-3, .section-type-3  {
    ${t.fillType0 ? `fill: ${t.fillType3}` : ""};
  }
  .task-type-4, .section-type-4  {
    ${t.fillType0 ? `fill: ${t.fillType4}` : ""};
  }
  .task-type-5, .section-type-5  {
    ${t.fillType0 ? `fill: ${t.fillType5}` : ""};
  }
  .task-type-6, .section-type-6  {
    ${t.fillType0 ? `fill: ${t.fillType6}` : ""};
  }
  .task-type-7, .section-type-7  {
    ${t.fillType0 ? `fill: ${t.fillType7}` : ""};
  }

  .actor-0 {
    ${t.actor0 ? `fill: ${t.actor0}` : ""};
  }
  .actor-1 {
    ${t.actor1 ? `fill: ${t.actor1}` : ""};
  }
  .actor-2 {
    ${t.actor2 ? `fill: ${t.actor2}` : ""};
  }
  .actor-3 {
    ${t.actor3 ? `fill: ${t.actor3}` : ""};
  }
  .actor-4 {
    ${t.actor4 ? `fill: ${t.actor4}` : ""};
  }
  .actor-5 {
    ${t.actor5 ? `fill: ${t.actor5}` : ""};
  }
`;
var jt = Bt;
var K = function(t, e) {
  return l(t, e);
};
var zt = function(t, e) {
  const n = t.append("circle").attr("cx", e.cx).attr("cy", e.cy).attr("class", "face").attr("r", 15).attr("stroke-width", 2).attr("overflow", "visible"), i = t.append("g");
  i.append("circle").attr("cx", e.cx - 15 / 3).attr("cy", e.cy - 15 / 3).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666"), i.append("circle").attr("cx", e.cx + 15 / 3).attr("cy", e.cy - 15 / 3).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666");
  function o(u) {
    const x = hn().startAngle(Math.PI / 2).endAngle(3 * (Math.PI / 2)).innerRadius(7.5).outerRadius(6.8181818181818175);
    u.append("path").attr("class", "mouth").attr("d", x).attr("transform", "translate(" + e.cx + "," + (e.cy + 2) + ")");
  }
  function c2(u) {
    const x = hn().startAngle(3 * Math.PI / 2).endAngle(5 * (Math.PI / 2)).innerRadius(7.5).outerRadius(6.8181818181818175);
    u.append("path").attr("class", "mouth").attr("d", x).attr("transform", "translate(" + e.cx + "," + (e.cy + 7) + ")");
  }
  function y(u) {
    u.append("line").attr("class", "mouth").attr("stroke", 2).attr("x1", e.cx - 5).attr("y1", e.cy + 7).attr("x2", e.cx + 5).attr("y2", e.cy + 7).attr("class", "mouth").attr("stroke-width", "1px").attr("stroke", "#666");
  }
  return e.score > 3 ? o(i) : e.score < 3 ? c2(i) : y(i), n;
};
var ot = function(t, e) {
  const s = t.append("circle");
  return s.attr("cx", e.cx), s.attr("cy", e.cy), s.attr("class", "actor-" + e.pos), s.attr("fill", e.fill), s.attr("stroke", e.stroke), s.attr("r", e.r), s.class !== void 0 && s.attr("class", s.class), e.title !== void 0 && s.append("title").text(e.title), s;
};
var ht = function(t, e) {
  return d(t, e);
};
var Yt = function(t, e) {
  function s(i, o, c2, y, u) {
    return i + "," + o + " " + (i + c2) + "," + o + " " + (i + c2) + "," + (o + y - u) + " " + (i + c2 - u * 1.2) + "," + (o + y) + " " + i + "," + (o + y);
  }
  const n = t.append("polygon");
  n.attr("points", s(e.x, e.y, 50, 20, 7)), n.attr("class", "labelBox"), e.y = e.y + e.labelMargin, e.x = e.x + 0.5 * e.labelMargin, ht(t, e);
};
var qt = function(t, e, s) {
  const n = t.append("g"), i = h();
  i.x = e.x, i.y = e.y, i.fill = e.fill, i.width = s.width * e.taskCount + // width of the tasks
  s.diagramMarginX * (e.taskCount - 1), i.height = s.height, i.class = "journey-section section-type-" + e.num, i.rx = 3, i.ry = 3, K(n, i), ut(s)(
    e.text,
    n,
    i.x,
    i.y,
    i.width,
    i.height,
    { class: "journey-section section-type-" + e.num },
    s,
    e.colour
  );
};
var nt = -1;
var Ot = function(t, e, s) {
  const n = e.x + s.width / 2, i = t.append("g");
  nt++;
  const o = 300 + 5 * 30;
  i.append("line").attr("id", "task" + nt).attr("x1", n).attr("y1", e.y).attr("x2", n).attr("y2", o).attr("class", "task-line").attr("stroke-width", "1px").attr("stroke-dasharray", "4 2").attr("stroke", "#666"), zt(i, {
    cx: n,
    cy: 300 + (5 - e.score) * 30,
    score: e.score
  });
  const c2 = h();
  c2.x = e.x, c2.y = e.y, c2.fill = e.fill, c2.width = s.width, c2.height = s.height, c2.class = "task task-type-" + e.num, c2.rx = 3, c2.ry = 3, K(i, c2);
  let y = e.x + 14;
  e.people.forEach((u) => {
    const x = e.actors[u].color, g = {
      cx: y,
      cy: e.y,
      r: 7,
      fill: x,
      stroke: "#000",
      title: u,
      pos: e.actors[u].position
    };
    ot(i, g), y += 10;
  }), ut(s)(
    e.task,
    i,
    c2.x,
    c2.y,
    c2.width,
    c2.height,
    { class: "task" },
    s,
    e.colour
  );
};
var Dt = function(t, e) {
  c(t, e);
};
var ut = function() {
  function t(i, o, c2, y, u, x, g, f) {
    const d2 = o.append("text").attr("x", c2 + u / 2).attr("y", y + x / 2 + 5).style("font-color", f).style("text-anchor", "middle").text(i);
    n(d2, g);
  }
  function e(i, o, c2, y, u, x, g, f, d2) {
    const { taskFontSize: T, taskFontFamily: b } = f, _ = i.split(/<br\s*\/?>/gi);
    for (let r = 0; r < _.length; r++) {
      const a = r * T - T * (_.length - 1) / 2, h2 = o.append("text").attr("x", c2 + u / 2).attr("y", y).attr("fill", d2).style("text-anchor", "middle").style("font-size", T).style("font-family", b);
      h2.append("tspan").attr("x", c2 + u / 2).attr("dy", a).text(_[r]), h2.attr("y", y + x / 2).attr("dominant-baseline", "central").attr("alignment-baseline", "central"), n(h2, g);
    }
  }
  function s(i, o, c2, y, u, x, g, f) {
    const d2 = o.append("switch"), b = d2.append("foreignObject").attr("x", c2).attr("y", y).attr("width", u).attr("height", x).attr("position", "fixed").append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%");
    b.append("div").attr("class", "label").style("display", "table-cell").style("text-align", "center").style("vertical-align", "middle").text(i), e(i, d2, c2, y, u, x, g, f), n(b, g);
  }
  function n(i, o) {
    for (const c2 in o)
      c2 in o && i.attr(c2, o[c2]);
  }
  return function(i) {
    return i.textPlacement === "fo" ? s : i.textPlacement === "old" ? t : e;
  };
}();
var Wt = function(t) {
  t.append("defs").append("marker").attr("id", "arrowhead").attr("refX", 5).attr("refY", 2).attr("markerWidth", 6).attr("markerHeight", 4).attr("orient", "auto").append("path").attr("d", "M 0,0 V 4 L6,2 Z");
};
var j = {
  drawRect: K,
  drawCircle: ot,
  drawSection: qt,
  drawText: ht,
  drawLabel: Yt,
  drawTask: Ot,
  drawBackgroundRect: Dt,
  initGraphics: Wt
};
var Xt = function(t) {
  Object.keys(t).forEach(function(s) {
    O[s] = t[s];
  });
};
var P = {};
function Gt(t) {
  const e = Ut().journey;
  let s = 60;
  Object.keys(P).forEach((n) => {
    const i = P[n].color, o = {
      cx: 20,
      cy: s,
      r: 7,
      fill: i,
      stroke: "#000",
      pos: P[n].position
    };
    j.drawCircle(t, o);
    const c2 = {
      x: 40,
      y: s + 7,
      fill: "#666",
      text: n,
      textMargin: e.boxTextMargin | 5
    };
    j.drawText(t, c2), s += 20;
  });
}
var O = Ut().journey;
var C = O.leftMargin;
var Ht = function(t, e, s, n) {
  const i = Ut().journey;
  n.db.clear(), n.parser.parse(t + `
`);
  const o = Ut().securityLevel;
  let c2;
  o === "sandbox" && (c2 = At("#i" + e));
  const y = o === "sandbox" ? At(c2.nodes()[0].contentDocument.body) : At("body");
  M.init();
  const u = y.select("#" + e);
  j.initGraphics(u);
  const x = n.db.getTasks(), g = n.db.getDiagramTitle(), f = n.db.getActors();
  for (const a in P)
    delete P[a];
  let d2 = 0;
  f.forEach((a) => {
    P[a] = {
      color: i.actorColours[d2 % i.actorColours.length],
      position: d2
    }, d2++;
  }), Gt(u), M.insert(0, 0, C, Object.keys(P).length * 50), Ut2(u, x, 0);
  const T = M.getBounds();
  g && u.append("text").text(g).attr("x", C).attr("font-size", "4ex").attr("font-weight", "bold").attr("y", 25);
  const b = T.stopy - T.starty + 2 * i.diagramMarginY, _ = C + T.stopx + 2 * i.diagramMarginX;
  jg(u, b, _, i.useMaxWidth), u.append("line").attr("x1", C).attr("y1", i.height * 4).attr("x2", _ - C - 4).attr("y2", i.height * 4).attr("stroke-width", 4).attr("stroke", "black").attr("marker-end", "url(#arrowhead)");
  const r = g ? 70 : 0;
  u.attr("viewBox", `${T.startx} -25 ${_} ${b + r}`), u.attr("preserveAspectRatio", "xMinYMin meet"), u.attr("height", b + r + 25);
};
var M = {
  data: {
    startx: void 0,
    stopx: void 0,
    starty: void 0,
    stopy: void 0
  },
  verticalPos: 0,
  sequenceItems: [],
  init: function() {
    this.sequenceItems = [], this.data = {
      startx: void 0,
      stopx: void 0,
      starty: void 0,
      stopy: void 0
    }, this.verticalPos = 0;
  },
  updateVal: function(t, e, s, n) {
    t[e] === void 0 ? t[e] = s : t[e] = n(s, t[e]);
  },
  updateBounds: function(t, e, s, n) {
    const i = Ut().journey, o = this;
    let c2 = 0;
    function y(u) {
      return function(g) {
        c2++;
        const f = o.sequenceItems.length - c2 + 1;
        o.updateVal(g, "starty", e - f * i.boxMargin, Math.min), o.updateVal(g, "stopy", n + f * i.boxMargin, Math.max), o.updateVal(M.data, "startx", t - f * i.boxMargin, Math.min), o.updateVal(M.data, "stopx", s + f * i.boxMargin, Math.max), u !== "activation" && (o.updateVal(g, "startx", t - f * i.boxMargin, Math.min), o.updateVal(g, "stopx", s + f * i.boxMargin, Math.max), o.updateVal(M.data, "starty", e - f * i.boxMargin, Math.min), o.updateVal(M.data, "stopy", n + f * i.boxMargin, Math.max));
      };
    }
    this.sequenceItems.forEach(y());
  },
  insert: function(t, e, s, n) {
    const i = Math.min(t, s), o = Math.max(t, s), c2 = Math.min(e, n), y = Math.max(e, n);
    this.updateVal(M.data, "startx", i, Math.min), this.updateVal(M.data, "starty", c2, Math.min), this.updateVal(M.data, "stopx", o, Math.max), this.updateVal(M.data, "stopy", y, Math.max), this.updateBounds(i, c2, o, y);
  },
  bumpVerticalPos: function(t) {
    this.verticalPos = this.verticalPos + t, this.data.stopy = this.verticalPos;
  },
  getVerticalPos: function() {
    return this.verticalPos;
  },
  getBounds: function() {
    return this.data;
  }
};
var U = O.sectionFills;
var at = O.sectionColours;
var Ut2 = function(t, e, s) {
  const n = Ut().journey;
  let i = "";
  const o = n.height * 2 + n.diagramMarginY, c2 = s + o;
  let y = 0, u = "#CCC", x = "black", g = 0;
  for (const [f, d2] of e.entries()) {
    if (i !== d2.section) {
      u = U[y % U.length], g = y % U.length, x = at[y % at.length];
      let b = 0;
      const _ = d2.section;
      for (let a = f; a < e.length && e[a].section == _; a++)
        b = b + 1;
      const r = {
        x: f * n.taskMargin + f * n.width + C,
        y: 50,
        text: d2.section,
        fill: u,
        num: g,
        colour: x,
        taskCount: b
      };
      j.drawSection(t, r, n), i = d2.section, y++;
    }
    const T = d2.people.reduce((b, _) => (P[_] && (b[_] = P[_]), b), {});
    d2.x = f * n.taskMargin + f * n.width + C, d2.y = c2, d2.width = n.diagramMarginX, d2.height = n.diagramMarginY, d2.colour = x, d2.fill = u, d2.num = g, d2.actors = T, j.drawTask(t, d2, n), M.insert(d2.x, d2.y, d2.x + d2.width + n.taskMargin, 300 + 5 * 30);
  }
};
var ct = {
  setConf: Xt,
  draw: Ht
};
var te = {
  parser: Et,
  db: rt,
  renderer: ct,
  styles: jt,
  init: (t) => {
    ct.setConf(t.journey), rt.clear();
  }
};
export {
  te as diagram
};
//# sourceMappingURL=journeyDiagram-cea58833-JCEMWY3C.js.map
