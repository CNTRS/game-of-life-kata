export enum CellStatus {
    Dead = 0,
    Alive = 1,
}

export class Cell {
    private constructor(private readonly status: CellStatus) {}
    static create(status: CellStatus): Cell {
        if (status == null) {
            throw new Error("Cell status cannot be undefined or null")
        }
        return new Cell(status)
    }
    isAlive(): boolean {
        return this.status === CellStatus.Alive
    }
    private newStatus(aliveNeighbors: number): CellStatus {
        if (this.isAlive()) {
            return aliveNeighbors === 2 || aliveNeighbors === 3 ? CellStatus.Alive : CellStatus.Dead
        }
        return aliveNeighbors === 3 ? CellStatus.Alive : CellStatus.Dead
    }
    regenerate(neighbors: number): Cell {
        if (neighbors == null) {
            throw new Error("Number of neighbors cannot be undefined or null")
        }
        return Cell.create(this.newStatus(neighbors))
    }
}
