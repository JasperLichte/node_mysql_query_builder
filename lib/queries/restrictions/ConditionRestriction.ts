import Restriction from "./Restriction";

export default class ConditionRestriction extends Restriction {

    public field(field: string): ConditionRestriction {
        this.queryString = `${this.queryString} ${field}`;

        return this;
    }

    public in(...values: number[]): ConditionRestriction {
        this.queryString = `${this.queryString} IN (${values.join(', ')})`;

        return this;
    }

    public equals(value: string|number): ConditionRestriction {
        this.queryString = `${this.queryString} = ${value}`;

        return this;
    }

    public doesntEqual(value: string|number): ConditionRestriction {
        this.queryString = `${this.queryString} != ${value}`;

        return this;
    }

    public isMoreThan(value: string|number): ConditionRestriction {
        this.queryString = `${this.queryString} > ${value}`;

        return this;
    }

    public isMoreThanOrEqualTo(value: string|number): ConditionRestriction {
        this.queryString = `${this.queryString} >= ${value}`;

        return this;
    }

    public isLessThan(value: string|number): ConditionRestriction {
        this.queryString = `${this.queryString} < ${value}`;

        return this;
    }

    public isLessThanOrEqualTo(value: string|number): ConditionRestriction {
        this.queryString = `${this.queryString} <= ${value}`;

        return this;
    }

    public get not(): ConditionRestriction {
        this.queryString = `${this.queryString} NOT`;

        return this;
    }


    public get and(): ConditionRestriction {
        this.queryString = `${this.queryString} AND`;

        return this;
    }

    public get or(): ConditionRestriction {
        this.queryString = `${this.queryString} OR`;

        return this;
    }

}
