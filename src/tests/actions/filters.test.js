import moment from "moment";
import { 
    setTextFilter, 
    sortByDate, 
    sortByAmount, 
    filterByStartDate, 
    filterByEndDate 
} from "./../../actions/filters";

describe("actions filters tests", ()=>{
    const text = "what ever", date = moment(0), amount = 784689;

    test("should set text in the filter", ()=>{
        expect(setTextFilter(text)).toEqual({
            type: "FILTER_TEXT",
            text
        });
    });

    test("should set setTextFilter with no value", () => {
        expect(setTextFilter()).toEqual({
            type: "FILTER_TEXT",
            text: ""
        });
    });

    test("should set sortBy in the filter to date", () => {
        expect(sortByDate(date)).toEqual({
            type: "SORT_BY_DATE",
            sortBy: date
        });
    });

    test("should set sortBy in the filter to amount", () => {
        expect(sortByAmount(amount)).toEqual({
            type: "SORT_BY_AMOUNT",
            sortBy: amount
        });
    });

    test("should set start date in the filter to start date", () => {
        expect(filterByStartDate(date)).toEqual({
            type: "START_DATE_FILTER",
            startDate: date
        });
    });

    test("should set end date in the filter to end date", () => {
        expect(filterByEndDate(date)).toEqual({
            type: "END_DATE_FILTER",
            endDate: date
        });
    });

});