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
}
