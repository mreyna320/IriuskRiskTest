import { objSortComparer } from "./obj-sort-comparer";

describe('[OBJ-SORT-COMPARER]', () => {
    const a = { name: "testing1" };
    const b = { name: "testing2" };
    const c = { name: "testing1" };

    it("Should return 1 when comparing in ASC", () => {
        const result = objSortComparer(a, b, "ASC", "name");
        expect(result).toBe(1);
    })
    it("Should return -1 when comparing in DES", () => {
        const result2 = objSortComparer(a, b, "DES", "name");
        expect(result2).toBe(-1);
    })
    it("Should return 0 when comparing two equal values", () => {
        const result3 = objSortComparer(a, c, "ASC", "name");
        expect(result3).toBe(0);
    })

});
