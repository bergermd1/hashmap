function hashMap() {
    const hashMap = [];
    for (let i = 0; i < 16; i++) {
        hashMap.push(undefined);
    }
    const loadFactor = .75;
    
    function hash(string) {
        let hashCode = 0;
      
        const primeNumber = 31;
        for (let i = 0; i < string.length; i++) {
          hashCode = primeNumber * hashCode + string.charCodeAt(i);
        }
      
        return hashCode % this.hashMap.length;
    }

    function set(key, value) {
        this.hashMap[key] = value;
        // length.call(this)
        // console.log(length.call(this) / this.hashMap.length);
        if (length.call(this) / this.hashMap.length > loadFactor) {
            this.hashMap[this.hashMap.length * 2] = '';
            this.hashMap.pop();
        }
    }

    function get(key) {
        return hashMap[key] || null;
    }

    function has(key) {
        return this.hashMap[key] !== undefined;
    }

    function remove(key) {
        if (has.call(this, key)) {
            this.hashMap[key] = undefined;
        }
    }

    function length() {
        // console.log(this);
        let length = this.hashMap.reduce((prev, cur) => {
            // console.log(prev);
            if (cur !== undefined) {
                prev += 1;
            }
            return prev;
        },0)
        return length
    }

    function clear() {
        for (let i = 0; i < this.hashMap.length; i++) {
            this.hashMap[i] = undefined;
        }
    }

    return {
        hashMap,
        hash,
        set,
        get,
        has,
        remove,
        length,
        clear,
    }
}

// let arr = [];
// arr[16] = '';
// arr.pop();
const h = hashMap();
h.set(h.hash('a'), 'a');
h.set(h.hash('b'), 'b');
h.set(h.hash('c'), 'c');
h.set(h.hash('d'), 'd');
h.set(h.hash('def'), 'def');
h.set(h.hash('f'), 'f');
h.set(h.hash('g'), 'g');
h.set(h.hash('h'), 'h');
// console.log(h.hash('def'));
// console.log(h.has(9));
// h.set(h.hash('i'), 'i');
// h.set(h.hash('j'), 'j');
// h.set(h.hash('k'), 'k');
// h.set(h.hash('l'), 'l');
// h.set(h.hash('m'), 'm');
// h.set(h.hash('a'), 'a');
// h.set(h.hash('o'), 'o');
// h.set(h.hash('p'), 'p');
// h.set(h.hash('q'), 'q');
// console.log(h.length());
// console.log(h.remove(1));
// console.log(h.clear());
console.log(h.hashMap);