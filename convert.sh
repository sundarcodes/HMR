cat tmp.js | sed 's/[ABCX][0-9][0-9]*/&\:/g' | tr '\n' ';' | sed 's/\: /\:/g' > output.txt
