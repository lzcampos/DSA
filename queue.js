class Queue {
    constructor(capacity){
        this.front = -1
        this.rear = -1
        this.size = 0
        this.capacity = capacity
        this.queue = []
    }

    isEmpty = () => this.size === 0
    isFull = () => this.size === this.capacity

    enqueue(item) {
        if (this.isEmpty()) {
            this.front++
            this.rear++
            this.size++
            this.queue[this.rear] = item
            return
        }
        if (this.isFull()) {
            return "It is not possible to enqueue items. The queue is already full"
        }
        this.rear = (this.rear + 1) % this.capacity
        this.queue[this.rear] = item
        this.size++
    }

    dequeue() {
        if (this.isEmpty()) {
            return "It is not possible to dequeue items. The queue is empty."
        }
        let dequeuedItem = this.queue[this.front]
        this.front = (this.front + 1) % this.capacity
        this.size--
        return dequeuedItem
    }

    print() {
        console.log(this.queue.slice(this.front, ++this.rear))
    }
}

const QUEUE_CAPACITY = 20
let myQueue = new Queue(QUEUE_CAPACITY)

for(let item = 1; item <= 10; item++){
    myQueue.enqueue(item)
}

myQueue.print() //  [ 1,  2,  3,  4,  5,  6,  7, 8,  9, 10 ]

for(let i = 0; i < 5; i++){
    myQueue.dequeue()
}

myQueue.print() // [ 6, 7, 8, 9, 10 ]


