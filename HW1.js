//Question 1 code for a function sumFirstNInts(n)
function sumFirstNInts(n) { 
    return Array.from({length: n}, (_, i) => i + 1).reduce((acc, e,i) => e + acc,0);
  }

console.log(" sumFirstNInts :"+sumFirstNInts(5));
console.log(" sumFirstNInts :"+sumFirstNInts(1));
console.log(" sumFirstNInts :"+sumFirstNInts(0));

//Question 2  code for a function sumFirstNSquares(n)
function sumFirstNSquares(n) { 
    return Array.from({length: n}, (_, i) => i + 1).
      
    reduce((acc, e, i) => (e**2 + acc),0);
  }

console.log(" sumFirstNSquares :"+sumFirstNSquares(3));
console.log(" sumFirstNSquares :"+sumFirstNSquares(5));
console.log(" sumFirstNSquares :"+sumFirstNSquares(1));
console.log(" sumFirstNSquares :"+sumFirstNSquares(0));

//Question 3 code for a function oddLengthLines(text)

function oddLengthLines(n){
    return n.split('\n').reduce((acc,e,i) => e.length%2!=0 ? acc.concat([e]) + '\n' : acc,[]);
  }

console.log(" oddLengthLines :"+oddLengthLines('01\n012\n0123\n01234\n'));
console.log(" oddLengthLines :"+oddLengthLines('01\n012\n0123\n01234'));
console.log(" oddLengthLines :"+oddLengthLines(''));
console.log(" oddLengthLines :"+oddLengthLines('01'));
console.log(" oddLengthLines :"+oddLengthLines('0'));

//Question 4 code for a function positiveEvens(arr)

function positiveEvens(n) { 
    return n.
      
    filter(e => e%2==0 && e>0);
  }

console.log(" positiveEvens :"+positiveEvens([5, -4, 0, 2]));
console.log(" positiveEvens :"+positiveEvens([-4, 3, 2, 7, -8]));
console.log(" positiveEvens :"+positiveEvens([-4, 3, 9, 7, -8]));
console.log(" positiveEvens :"+positiveEvens([-4, 6, 3, 9, 7, -8, 6]));

//Question 5 code for a function stringsLength(strings)

function stringsLength(n) { 
    return n.reduce((acc, e, i) => (e.length + acc),0);
  }

console.log(" stringsLength :"+stringsLength(['hello', 'world', '']));
console.log(" stringsLength :"+stringsLength(['12', '140', '2']));
console.log(" stringsLength :"+stringsLength(['']));
console.log(" stringsLength :"+stringsLength([]));

//Question 6 code for a function indexAdd(...xs)
function indexAdd(...n) { 
    return n.
    
    reduce((acc, e, i) => acc.concat([e + i]),[]);
  }
console.log("indexAdd :"+indexAdd(2, 5, 7, 12));
console.log("indexAdd :"+indexAdd(2));
console.log("indexAdd :"+indexAdd());

//Question 7 code for a function indexAddProduct(...xs)
function indexAddProduct(...n) { 
    return indexAdd(...n).
    reduce((acc, e, i) =>  (e * acc),1);
  }
console.log(" indexAddProduct :"+indexAddProduct(2, 5, 7, 12));
console.log(" indexAddProduct :"+indexAddProduct(2));
console.log(" indexAddProduct :"+indexAddProduct());

//Question 8 code for a function hailstones(init, n=10)
function hailstones(init,n=10) {
    return Array.from({length: n}, (_, i) => i ).
    reduce((acc, _, i) => (i == 0) ? acc.concat(init) : (acc[i-1]%2==1) ? acc.concat( (acc[i-1] * 3) + 1 ) : acc.concat(acc[i-1]/2), []);
  }

console.log("hailstones :"+hailstones(42));
console.log("hailstones :"+hailstones(42,15));
console.log("hailstones :"+hailstones(42,1));

//Question 9 code for a function isHailstones(seq)
function isHailstones(seq) {
    return seq.reduce((acc, _, i) => (i == 0) ? true : (seq[i-1]%2==1) ? ((seq[i-1] * 3) + 1 == seq[i]) : ((seq[i-1]/2) == seq[i]), false );
  }

console.log("isHailstones "+isHailstones([42, 21, 64]));
console.log("isHailstones "+isHailstones([42, 21, 63]));
console.log("isHailstones "+isHailstones([42, 21, 64, 32, 16, 8, 4, 1]));
console.log("isHailstones "+isHailstones([42, 21, 64, 32, 16, 8, 4, 2, 1]));
console.log("isHailstones "+isHailstones([42]));
console.log("isHailstones "+isHailstones([42, 21, 64, 32, 16, 8, 4, 2, 1, 4, 2, 1]));
console.log("isHailstones "+isHailstones([]));

//Question 10 code for a function isHailstonesText(text) 
function isHailstonesText(text){
    return ((text.trim().length > 0) ? isHailstones(Array.from(text.match(/\d+/g)).map(Number)) : false) ;
  }

console.log(" isHailstonesText "+isHailstonesText(' 42 , 21 , 64 , 32,16, 8, 4 ,2 ,1'));
console.log(" isHailstonesText "+isHailstonesText(' 42 , 21 , 64 , 32,16, 8, 4, 1'));
console.log(" isHailstonesText "+isHailstonesText(' 42  '));
console.log(" isHailstonesText "+isHailstonesText('\t\n42 , \n\n\t21, 64'));
console.log(" isHailstonesText "+isHailstonesText('\t\n42 , \n\n\t21, 63'));
console.log(" isHailstonesText "+isHailstonesText(' '));

//Question 11 code for a function isSeq(fn, seq) 
function isSeq(fn,seq){
    const res = seq.reduce(function (acc,e,i){
    if(seq.length === 0 || acc == false){
        return false;
    }else if(i == seq.length-1){
        return acc;
    }else if (fn(e)==seq[i+1]){
        return true;
    }else{
        return false;
    }}, true);

    return res;
}



console.log("isSeq :"+isSeq(n => n+1,[4,5,6,7]));
console.log("isSeq :"+isSeq(n => n+1,[4,5,6,8]));
console.log("isSeq :"+isSeq(n => n * 2, [4, 8, 16, 32]));
console.log("isSeq :"+isSeq(n => n * 2, [4, 8, 32, 64]));
console.log("isSeq :"+isSeq(n => n * 2, [42]));

//Question 12 code for a function isHailstonesSeq(seq)
function isSeq(fn, seq) {
    const res = seq.reduce(function (acc, e, i) {
        if (seq.length === 0 || acc == false) {
            return false;
        } else if (i == seq.length - 1) {
            return acc;
        } else if (fn(e) == seq[i + 1]) {
            return true;
        } else {
            return false;
        }
    }, true);

    return res;
}


function isHailstonesSeq(arr) {
    const fn = function (n) {
        if ((n % 2) == 0) {
            return n / 2;
        } else {
            return (3 * n) + 1;
        }
    }
    return arr.length==0 ? false : isSeq(fn,arr);
}

console.log("isHailstonesSeq :"+isHailstonesSeq([7, 22, 11, 34, 17]));
console.log("isHailstonesSeq :"+isHailstonesSeq([7, 22, 11, 35, 17]));
console.log("isHailstonesSeq :"+isHailstonesSeq([7]));
console.log("isHailstonesSeq :"+isHailstonesSeq([]));

//Question 13 code for a function isPredArray(pred, arr)
function isPredArray(pred,arr){
    const res = arr.length==0 ? false : arr.reduce(function(acc,e,i){
        if(i===arr.length-1 || acc == false){
            return acc;
        }else if(pred(e,arr[i+1])){
            return true;
        }else{
            return false;
        }

    },true);

    return res;
}

 
console.log(" isPredArray :"+isPredArray((a0, a) => a === a0 + 1, [5, 6, 7, 8]));
console.log(" isPredArray :"+isPredArray((a0, a) => a === a0 + 1, [5, 6, 7, 9]));
console.log(" isPredArray :"+isPredArray((a0, a) => a === a0 + 1, [5]));
console.log(" isPredArray :"+isPredArray((a0, a) => a === a0 + 1, []));
console.log(" isPredArray :"+isPredArray((a0, a) => a.length === a0.length + 1,['a', 'ab', 'abc']));
console.log(" isPredArray :"+isPredArray((a0, a) => a.length === a0.length + 1,['a', 'abc', 'abc']));
console.log(" isPredArray :"+isPredArray((a0, a) => a.length === a0.length + 1,['a']));

//Question 14 code 
function isPredArray(pred,arr){
    const res = arr.length==0 ? false : arr.reduce(function(acc,e,i){
        if(i===arr.length-1 || acc == false){
            return acc;
        }else if(pred(e,arr[i+1])){
            return true;
        }else{
            return false;
        }

    },true);

    return res;
}

function isOrderedNums(n) {

const result= n.length==0 ? false : n.reduce(function(acc,e,i) {
if (isPredArray((a0, a) => a === a0+1|| a0=== a,n) )
{
    return true;
}else if (isPredArray((a0, a) => a === a0-1|| a0=== a,n) )
{
    return true
}
else
    {
        return false;
    }
},n);
return result;
}

console.log(" isOrderedNums : "+isOrderedNums([1, 2, 3, 3, 4]));
console.log(" isOrderedNums : "+isOrderedNums([1, 2, 3, 3, 4,3]));
console.log(" isOrderedNums : "+isOrderedNums([1, '2', 3, 4]));
console.log(" isOrderedNums : "+isOrderedNums([4, 3, 2, 1]));
console.log(" isOrderedNums : "+isOrderedNums([4, 4, 3, 2, 1]));
console.log(" isOrderedNums : "+isOrderedNums([4, 3, 4, 2, 1]));
console.log(" isOrderedNums : "+isOrderedNums([4, '3', 2, 1]));
console.log(" isOrderedNums : "+isOrderedNums([4]));
console.log(" isOrderedNums : "+isOrderedNums([]));
console.log(" isOrderedNums : "+isOrderedNums([2, 2, 2, 2]));
console.log(" isOrderedNums : "+isOrderedNums([2, '2', 2, 2]));