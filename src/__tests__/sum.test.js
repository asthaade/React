import { sum } from "../components/sum";

test(" This function returns the sun of two numbers ",()=>{
    const result = sum(3,4);
    expect(result).toBe(7);
});