import { Cell, CellStatus } from "./cell"

export class World {
    private constructor(private readonly cells: Cell[][]) {}
    static createFrom(initialState: CellStatus[][]): World {
        const cells = initialState.map((row) => row.map((status) => Cell.create(status)))
        return new World(cells)
    }
    getCellMatrix(): Cell[][] {
        return this.cells.map((row) => {
            return row.map((cell) => {
                return Cell.create(cell.isAlive() ? CellStatus.Alive : CellStatus.Dead)
            })
        })
    }
    private getCell(x: number, y: number): Cell {
        return this.cells[x][y]
    }
    aliveNeighbors(x: number, y: number): number {
        const directions = [
            [-1, -1], [-1, 0], [-1, 1],
            [0, -1],         [0, 1],
            [1, -1], [1, 0], [1, 1],
        ]
        return directions.reduce((count, [dx, dy]) => {
            if (x + dx < 0 || y + dy < 0 || x + dx >= this.cells.length || y + dy >= this.cells[0].length) {
                return count
            }
            const neighbor = this.getCell(x + dx, y + dy)
            if (neighbor?.isAlive()) {
                return count + 1
            }
            return count
        }, 0)
    }
    nextGeneration(): World {
        const newCells = this.cells.map((row, x) => {
            return row.map((cell, y) => {
                const aliveNeighbors = this.aliveNeighbors(x, y)
                const nextState = cell.isAlive() ?
                    (aliveNeighbors >= 2 && aliveNeighbors <= 3 ? CellStatus.Alive : CellStatus.Dead) :
                    (aliveNeighbors === 3 ? CellStatus.Alive : CellStatus.Dead)
                return Cell.create(nextState)
            })
        })
        return new World(newCells)
    }
}
