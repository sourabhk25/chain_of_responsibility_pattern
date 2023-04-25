// Interface for all dispensers(Handler Interface)
interface IDispenser {
    nextSuccessor(successor: IDispenser): void
    handle(amount: number): void
}

// A dispenser of $10 notes
class Dispenser10 implements IDispenser {
    // Dispenses $10s if applicable, otherwise continues to next successor
    successor: IDispenser | undefined

    nextSuccessor(successor: IDispenser): void {
        // Set the next successor
        this.successor = successor
    }

    handle(amount: number): void {
        // Handle the dispensing of notes"
        if (amount >= 10) {
            const num = Math.floor(amount / 10)
            const remainder = amount % 10
            console.log('Dispensing ' + num  + ' $10 note')
            if (remainder !== 0) {
                ;(this.successor as IDispenser).handle(remainder)
            }
        } else {
            ;(this.successor as IDispenser).handle(amount)
        }
    }
}

// A dispenser of $20 notes
class Dispenser20 implements IDispenser {
    // Dispenses $20s if applicable, otherwise continues to next successor
    successor: IDispenser | undefined

    nextSuccessor(successor: IDispenser): void {
        // Set the next successor
        this.successor = successor
    }

    handle(amount: number): void {
        // Handle the dispensing of notes"
        if (amount >= 20) {
            const num = Math.floor(amount / 20)
            const remainder = amount % 20
            console.log('Dispensing ' + num  + ' $20 note')
            if (remainder !== 0) {
                ;(this.successor as IDispenser).handle(remainder)
            }
        } else {
            ;(this.successor as IDispenser).handle(amount)
        }
    }
}

// A dispenser of $50 notes
class Dispenser50 implements IDispenser {
    // Dispenses $50s if applicable, otherwise continues to next successor
    successor: IDispenser | undefined

    nextSuccessor(successor: IDispenser): void {
        // Set the next successor
        this.successor = successor
    }

    handle(amount: number): void {
        // Handle the dispensing of notes"
        if (amount >= 50) {
            const num = Math.floor(amount / 50)
            const remainder = amount % 50
            console.log('Dispensing ' + num  + ' $50 note')
            if (remainder !== 0) {
                ;(this.successor as IDispenser).handle(remainder)
            }
        } else {
            ;(this.successor as IDispenser).handle(amount)
        }
    }
}

// A dispenser of $100 notes
class Dispenser100 implements IDispenser {
    // Dispenses $50s if applicable, otherwise continues to next successor
    successor: IDispenser | undefined

    nextSuccessor(successor: IDispenser): void {
        // Set the next successor
        this.successor = successor
    }

    handle(amount: number): void {
        // Handle the dispensing of notes"
        if (amount >= 100) {
            const num = Math.floor(amount / 100)
            const remainder = amount % 100
            console.log('Dispensing ' + num  + ' $100 note')
            if (remainder !== 0) {
                ;(this.successor as IDispenser).handle(remainder)
            }
        } else {
            ;(this.successor as IDispenser).handle(amount)
        }
    }
}

// The ATM Dispenser Chain
class ATMDispenserChain {
    chain1: Dispenser100
    chain2: Dispenser50
    chain3: Dispenser20
    chain4: Dispenser10

    constructor() {
        this.chain1 = new Dispenser100()
        this.chain2 = new Dispenser50()
        this.chain3 = new Dispenser20()
        this.chain4 = new Dispenser10()

        // Setting the successor chain starting from the dispenser for $100 notes
        this.chain1.nextSuccessor(this.chain2)
        this.chain2.nextSuccessor(this.chain3)
        this.chain3.nextSuccessor(this.chain4)
    }
}

// An ATM Dispenser that dispenses denominations of notes
// Client code
const ATM = new ATMDispenserChain()
console.log('Enter amount to withdrawal : ')
process.stdin.on('data', (data: string) => {
    if (parseInt(data)) {
        const amount = parseInt(data)
        if (amount < 10 || amount % 10 != 0) {
            console.log(
                'Amount should be positive and in multiple of 10s.'
            )
        } else {
            // process the request
            ATM.chain1.handle(amount)
            console.log('Use it well!!')
            process.exit()
        }
    } else {
        console.log('Please enter a number.')
    }
})