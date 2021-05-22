const app = new Vue ({
	el: '#app',
	data: {
		books: [
			{
				id: 1,
				name: '《算法导论》',
				date: '2006-09',
				price: 85.00,
				count: 1
			},
			{
				id: 2,
				name: '《UNIX编程艺术》',
				date: '2006-02',
				price: 59.00,
				count: 1
			},
			{
				id: 3,
				name: '《编程珠玑》',
				date: '2008-10',
				price: 39.00,
				count: 1
			},
			{
				id: 4,
				name: '《代码大全》',
				date: '2006-03',
				price: 128.00,
				count: 1
			}
		],
	},
	methods: {
		removeClick(index) {
			this.books.splice(index, 1);
			/* if(this.books.length === 0) {
				this.$refs.div.remove()
			} */
		},
		increment(book) {
			book.count++;
		},
		decrement(book) {
			let count = book.count
			if(count > 1) {
				book.count--;
			}
		}
	}, computed: {
		finalPrice() {
			return function(price) {
				return '￥' + price.toFixed(2);
			}
		},
		
		totalPrice() {
			// let price = 0;
			/* for (let i in this.books) {
				price += this.books[i].price * this.books[i].count;
			} */
			
			/* for (let book of this.books) {
				price += book.price * book.count;
			} */
			
			// return this.books.reduce((pre, book) => pre + book.price * book.count, 0);
			return this.books.map(book => book.price * book.count).reduce((pre,curr) => pre + curr)
		}
	},
})

