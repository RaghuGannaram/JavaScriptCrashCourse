let nums = [1, 2, 3, 4, 5];

console.log(nums.filter((x) => x % 2 === 0));
console.log(Array.prototype.filter.toString());

Array.prototype.filter = null;

try {
    console.log(nums.filter((x) => x % 2 === 0));
} catch (err) {
    console.log(err);
}

if (!Array.prototype.filter) {
    Array.prototype.filter = function (callback, thisArgs) {
        if (typeof callback !== "function") {
            throw new TypeError(callback + " is not a function");
        }

        const result = [];

        for (let i = 0; i < this.length; i++) {
            if (callback.call(thisArgs, this[i], i, this)) {
                result.push(this[i]);
            }
        }

        return result;
    };
}

console.log(nums.filter((x) => x % 2 === 0));

const bookshelf = {
    minPageCount: 300,
    isThickBook(book) {
        return book.pageCount >= this.minPageCount;
    },
};

const books = [
    { title: "Book A", pageCount: 150 },
    { title: "Book B", pageCount: 350 },
    { title: "Book C", pageCount: 500 },
];

console.log(books.filter(bookshelf.isThickBook, bookshelf));
