"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5372],{95372:function(e,t,r){r.r(t),r.d(t,{haskell:function(){return d}});var n=/[a-z_]/,a=/[A-Z]/,i=/\d/,o=/[0-9A-Fa-f]/,l=/[0-7]/,u=/[a-z_A-Z0-9'\xa1-\uffff]/,s=/[-!#$%&*+.\/<=>?@\\^|~:]/,f=/[(),;[\]`{}]/,c=/[ \t\v\f]/;function normal(e,t){if(e.eatWhile(c))return null;var r,m=e.next();if(f.test(m)){if("{"==m&&e.eat("-")){var d,p="comment";return e.eat("#")&&(p="meta"),t(d=function ncomment(e,t){return 0==t?normal:function(r,n){for(var a=t;!r.eol();){var i=r.next();if("{"==i&&r.eat("-"))++a;else if("-"==i&&r.eat("}")&&0==--a)return n(normal),e}return n(ncomment(e,a)),e}}(p,1)),d(e,t)}return null}if("'"==m)return(e.eat("\\"),e.next(),e.eat("'"))?"string":"error";if('"'==m)return t(r=stringLiteral),r(e,t);if(a.test(m))return(e.eatWhile(u),e.eat("."))?"qualifier":"type";if(n.test(m))return e.eatWhile(u),"variable";if(i.test(m)){if("0"==m){if(e.eat(/[xX]/))return e.eatWhile(o),"integer";if(e.eat(/[oO]/))return e.eatWhile(l),"number"}e.eatWhile(i);var p="number";return e.match(/^\.\d+/)&&(p="number"),e.eat(/[eE]/)&&(p="number",e.eat(/[-+]/),e.eatWhile(i)),p}return"."==m&&e.eat(".")?"keyword":s.test(m)?"-"==m&&e.eat(/-/)&&(e.eatWhile(/-/),!e.eat(s))?(e.skipToEnd(),"comment"):(e.eatWhile(s),"variable"):"error"}function stringLiteral(e,t){for(;!e.eol();){var r=e.next();if('"'==r)return t(normal),"string";if("\\"==r){if(e.eol()||e.eat(c))return t(stringGap),"string";e.eat("&")||e.next()}}return t(normal),"error"}function stringGap(e,t){if(e.eat("\\")){var r;return t(r=stringLiteral),r(e,t)}return e.next(),t(normal),"error"}var m=function(){var e={};function setType(t){return function(){for(var r=0;r<arguments.length;r++)e[arguments[r]]=t}}return setType("keyword")("case","class","data","default","deriving","do","else","foreign","if","import","in","infix","infixl","infixr","instance","let","module","newtype","of","then","type","where","_"),setType("keyword")("..",":","::","=","\\","<-","->","@","~","=>"),setType("builtin")("!!","$!","$","&&","+","++","-",".","/","/=","<","<*","<=","<$>","<*>","=<<","==",">",">=",">>",">>=","^","^^","||","*","*>","**"),setType("builtin")("Applicative","Bool","Bounded","Char","Double","EQ","Either","Enum","Eq","False","FilePath","Float","Floating","Fractional","Functor","GT","IO","IOError","Int","Integer","Integral","Just","LT","Left","Maybe","Monad","Nothing","Num","Ord","Ordering","Rational","Read","ReadS","Real","RealFloat","RealFrac","Right","Show","ShowS","String","True"),setType("builtin")("abs","acos","acosh","all","and","any","appendFile","asTypeOf","asin","asinh","atan","atan2","atanh","break","catch","ceiling","compare","concat","concatMap","const","cos","cosh","curry","cycle","decodeFloat","div","divMod","drop","dropWhile","either","elem","encodeFloat","enumFrom","enumFromThen","enumFromThenTo","enumFromTo","error","even","exp","exponent","fail","filter","flip","floatDigits","floatRadix","floatRange","floor","fmap","foldl","foldl1","foldr","foldr1","fromEnum","fromInteger","fromIntegral","fromRational","fst","gcd","getChar","getContents","getLine","head","id","init","interact","ioError","isDenormalized","isIEEE","isInfinite","isNaN","isNegativeZero","iterate","last","lcm","length","lex","lines","log","logBase","lookup","map","mapM","mapM_","max","maxBound","maximum","maybe","min","minBound","minimum","mod","negate","not","notElem","null","odd","or","otherwise","pi","pred","print","product","properFraction","pure","putChar","putStr","putStrLn","quot","quotRem","read","readFile","readIO","readList","readLn","readParen","reads","readsPrec","realToFrac","recip","rem","repeat","replicate","return","reverse","round","scaleFloat","scanl","scanl1","scanr","scanr1","seq","sequence","sequence_","show","showChar","showList","showParen","showString","shows","showsPrec","significand","signum","sin","sinh","snd","span","splitAt","sqrt","subtract","succ","sum","tail","take","takeWhile","tan","tanh","toEnum","toInteger","toRational","truncate","uncurry","undefined","unlines","until","unwords","unzip","unzip3","userError","words","writeFile","zip","zip3","zipWith","zipWith3"),e}();let d={name:"haskell",startState:function(){return{f:normal}},copyState:function(e){return{f:e.f}},token:function(e,t){var r=t.f(e,function(e){t.f=e}),n=e.current();return m.hasOwnProperty(n)?m[n]:r},languageData:{commentTokens:{line:"--",block:{open:"{-",close:"-}"}}}}}}]);